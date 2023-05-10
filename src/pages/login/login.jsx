import styles from './login.module.css';
import { Form, redirect, useActionData, useLoaderData, useNavigation } from 'react-router-dom';
import { getErrorMessage } from '/src/api/utils';
import { logIn } from '/src/api/auth';

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;

  return { redirectMsg: searchParams.has('redirect') ? 'You must sign in first.' : '' };
}

export async function action({ request }) {
  const formData = await request.formData();

  try {
    await logIn({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const redirectTo = new URL(request.url).searchParams.get('redirectTo') ?? '/host';
    return redirect(redirectTo);
  } catch (e) {
    return { message: getErrorMessage(e.code) };
  }
}

export function LogIn() {
  const navigation = useNavigation();
  const loading = navigation.state !== 'idle';

  const { redirectMsg } = useLoaderData();
  const error = useActionData();

  return (
    <div className={styles.content}>
      <h2 className={`h2 ${styles.title}`}>
        Sign in to your account
      </h2>
      {!!redirectMsg && <div className={styles.redirectMsg}>{redirectMsg}</div>}
      {!!error?.message && <div className={styles.errorMsg}>{error.message}</div>}
      <Form
        method="post"
        replace
        className={styles.form}
      >
        <input
          name="email"
          type="email"
          placeholder="Email address"
          className={styles.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className={styles.password}
        />
        <button
          className={`button ${styles.logInBtn}`}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </Form>
      <div className={styles.demo}>
        <strong>Demo User Credentials</strong>
        <p>demo@vanlife.com</p>
        <p>password123</p>
      </div>
    </div>
  );
}
