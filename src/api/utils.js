export function getErrorMessage(code) {
  switch (code) {
    case 'auth/missing-password':
      return 'No password was entered.';
    case 'auth/invalid-email':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'No user with those credentials found!';
    default:
      return 'Unknown authentication error';
  }
}
