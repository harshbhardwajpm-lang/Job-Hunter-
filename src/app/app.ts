import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { JobsService } from './services/jobs.service';
import { AlertsService } from './services/alerts.service';

export interface AiEvalResult {
  matchScore: number;
  verdict: string;
  matchedSkills: string[];
  gaps?: string[];
  keyStrengths?: string[];
  interviewTips?: string[];
  visaEvidenceAnalysis?: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly authService = inject(AuthService);
  readonly jobsService = inject(JobsService);
  readonly alertsService = inject(AlertsService);

  // Active navigation tab
  readonly activeTab = signal<'matrix' | 'alerts' | 'top10' | 'skills' | 'ai-evaluator'>('matrix');

  // Custom AI Evaluator state
  readonly evalJobTitle = signal<string>('');
  readonly evalCompany = signal<string>('');
  readonly evalJobDescription = signal<string>('');
  readonly isEvaluating = signal<boolean>(false);
  readonly evalResult = signal<AiEvalResult | null>(null);
  readonly evalError = signal<string | null>(null);

  // Copy notification toast
  readonly toastMessage = signal<string | null>(null);

  // Email preview mode in Alerts tab
  readonly emailPreviewType = signal<'withJobs' | 'noJobs'>('withJobs');

  setTab(tab: 'matrix' | 'alerts' | 'top10' | 'skills' | 'ai-evaluator') {
    this.activeTab.set(tab);
  }

  showToast(message: string) {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3000);
  }

  copyToClipboard(text: string, label: string) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      this.showToast(`Copied ${label} to clipboard!`);
    }
  }

  async handleGoogleSignIn() {
    try {
      await this.authService.signInWithGoogle();
      this.showToast('Successfully signed in with Google! Gmail alert dispatch enabled.');
    } catch {
      this.showToast('Sign-in cancelled or failed.');
    }
  }

  async handleLogout() {
    await this.authService.logout();
    this.showToast('Logged out of Google.');
  }

  // Trigger daily alert dispatch flow (opens mandatory confirmation dialog)
  triggerAlertDispatch() {
    this.alertsService.prepareAlertDispatch();
  }

  // Confirm and send email
  async confirmSendEmail() {
    const res = await this.alertsService.confirmAndSendAlert();
    this.showToast(res.message);
  }

  cancelSendEmail() {
    this.alertsService.cancelAlertDispatch();
  }

  // Run AI Role Evaluator via server-side Gemini
  async runAiEvaluation() {
    const desc = this.evalJobDescription().trim();
    if (!desc) {
      this.evalError.set('Please paste a job description to evaluate.');
      return;
    }

    this.isEvaluating.set(true);
    this.evalError.set(null);
    this.evalResult.set(null);

    try {
      const response = await fetch('/api/gemini/analyze-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobTitle: this.evalJobTitle(),
          company: this.evalCompany(),
          jobDescription: desc
        })
      });

      if (!response.ok) {
        throw new Error(`Evaluation failed with status ${response.status}`);
      }

      const data = await response.json();
      this.evalResult.set(data);
      this.showToast('AI analysis complete!');
    } catch (err: unknown) {
      const errorObj = err as { message?: string };
      this.evalError.set(errorObj.message || 'Failed to complete evaluation');
    } finally {
      this.isEvaluating.set(false);
    }
  }
}
