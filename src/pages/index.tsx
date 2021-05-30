import Link from 'next/link'
import Header from '../components/header';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <>
    <Header titlePre="Página Inicial" />
    <main className={styles.homeContainer}>
      <Link href="/blog">
        <a>Ir para blog</a>
      </Link>
    </main>
    </>
  )
}
