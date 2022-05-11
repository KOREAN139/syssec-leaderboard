import Footer from '@/components/footer';
import Head from 'next/head';
import styles from '@/styles/Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Syssec 마작 리더보드</title>
        <meta name="description" content="Syssec majsoul leaderboard" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" as="style" crossOrigin="true" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
      </Head>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout