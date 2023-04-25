import { Footer } from '/src/components/footer';
import { Header } from '/src/components/header';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>);
}
