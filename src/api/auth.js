import { getAuth } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function useAuthState() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      const newIsSignedIn = !!user;
      setIsSignedIn(newIsSignedIn);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isSignedIn;
}

export async function requireAuth(request) {
  let unsubscribe;
  const userPromise = new Promise((resolve) => {
    unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      resolve(user);
    });
  });

  const user = await userPromise;
  unsubscribe();

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
