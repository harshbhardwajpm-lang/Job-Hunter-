import { Injectable, signal, computed } from '@angular/core';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
  Auth
} from 'firebase/auth';
import firebaseConfig from '../../../firebase-applet-config.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app: FirebaseApp;
  private auth: Auth;
  private provider: GoogleAuthProvider;

  // In-memory token storage (MANDATORY per workspace integration skill: do NOT store in localStorage)
  private cachedAccessToken: string | null = null;

  // Signals for reactive state
  readonly currentUser = signal<User | null>(null);
  readonly isAuthenticated = computed(() => !!this.currentUser());
  readonly isSigningIn = signal<boolean>(false);
  readonly authError = signal<string | null>(null);

  constructor() {
    // Prevent re-initialization if already initialized
    this.app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    this.auth = getAuth(this.app);

    this.provider = new GoogleAuthProvider();
    // Scope required for sending email alerts
    this.provider.addScope('https://www.googleapis.com/auth/gmail.send');
    this.provider.setCustomParameters({
      prompt: 'consent'
    });

    // Listen to auth state
    if (typeof window !== 'undefined') {
      onAuthStateChanged(this.auth, (user) => {
        this.currentUser.set(user);
        if (!user) {
          this.cachedAccessToken = null;
        }
      });
    }
  }

  async signInWithGoogle(): Promise<{ user: User; accessToken: string }> {
    this.isSigningIn.set(true);
    this.authError.set(null);
    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (!credential?.accessToken) {
        throw new Error('No OAuth access token was returned by Google authentication.');
      }
      this.cachedAccessToken = credential.accessToken;
      this.currentUser.set(result.user);
      return { user: result.user, accessToken: credential.accessToken };
    } catch (error: unknown) {
      const err = error as { message?: string };
      const msg = err.message || 'Failed to authenticate with Google';
      this.authError.set(msg);
      throw error;
    } finally {
      this.isSigningIn.set(false);
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.cachedAccessToken = null;
    this.currentUser.set(null);
  }

  getAccessToken(): string | null {
    return this.cachedAccessToken;
  }
}
