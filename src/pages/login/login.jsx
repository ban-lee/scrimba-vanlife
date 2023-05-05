import styles from './login.module.css';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

export function loader({ request }) {
  const searchParams = new URL(request.url).searchParams;

  return { redirectMsg: searchParams.has('redirect') ? 'You must sign in first.' : '' };
}

export function LogIn() {
  const [formData, setFormData] = useState({email: '', password: ''});
  const { redirectMsg } = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
  }

  return (
    <div className={styles.content}>
      <h2 className={`h2 ${styles.title}`}>
        Sign in to your account
      </h2>
      {!!redirectMsg && <div className={styles.redirectMsg}>{redirectMsg}</div> }
      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={formData.email}
          className={styles.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={formData.password}
          className={styles.password}
        />
        <button className={`button ${styles.logInBtn}`}>Sign in</button>
      </form>
    </div>
  );
}
