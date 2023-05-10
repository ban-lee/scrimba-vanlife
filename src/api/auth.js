import { getAuth } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { redirect } from 'react-router-dom';
import { useState } from 'react';

export function useAuthState() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  onAuthStateChanged(getAuth(), (user) => {
    const newIsSignedIn = !!user;
    if (isSignedIn === newIsSignedIn) return;

    setIsSignedIn(newIsSignedIn);
  });

  return isSignedIn;
}

export async function requireAuth(request) {
  const user = getAuth().currentUser;
  if (!user) {
    const pathname = request?.url ? new URL(request.url).pathname : '';
    throw redirect(`/login?redirect=true${pathname ? `&redirectTo=${pathname}` : ''}`);
  }
}

export async function logIn(credentials) {
  await signInWithEmailAndPassword(getAuth(), credentials.email, credentials.password);
}

export async function logOut() {
  await signOut(getAuth());
}
