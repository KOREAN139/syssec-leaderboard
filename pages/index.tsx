import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Syssec 마작 리더보드</title>
        <meta name="description" content="Syssec majsoul leaderboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Syssec 마작 리더보드
        </h1>

        <table>
          <tbody>
              <tr>
                <th>순위</th>
                <td>이름</td>
                <td>승률</td>
                <td>1위 비율</td>
                <td>국수</td>
              </tr>
            {Array.from(Array(5)).map((_, i) => (
              <tr key={`leader-table-${i}`}>
                <th>{i + 1}</th>
                <td>AA</td>
                <td>AA</td>
                <td>AA</td>
                <td>AA</td>
              </tr>))}
          </tbody>
        </table>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/KOREAN139"
          target="_blank"
          rel="noopener noreferrer"
        >
          Maintained by 한상구
        </a>
      </footer>
    </div>
  )
}

export default Home
