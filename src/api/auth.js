import { checkResponse } from './utils';
import { redirect } from 'react-router-dom';

const logInKey = 'loggedIn';

export async function requireAuth() {
  // Fake a log in flow.
  const isLoggedIn = localStorage.getItem(logInKey);
  if (!isLoggedIn) throw redirect('/login?redirect=true');

  return null;
}


export async function logIn(credentials) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(credentials),
  });
  const data = await res.json();

  checkResponse(res, data.message);
  localStorage.setItem(logInKey, true);

  return data;
}
