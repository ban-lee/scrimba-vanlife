import NProgress from 'nprogress';
import styles from './layout.module.css';
import { Footer } from '/src/components/footer';
import { Header } from '/src/components/header';
import { Outlet, useNavigation } from 'react-router-dom';
import { useEffect } from 'react';

import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

export function Layout() {
  const navigation = useNavigation();

  useEffect(() => {
  }, []);

  useEffect(() => {
    if (navigation.state === 'idle') NProgress.done();
    else NProgress.start();

  }, [navigation.state])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>);
}
