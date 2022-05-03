import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getFourPlayerGameStats } from '../utils/log'

const Home: NextPage = () => {
  const fourPlayerGameStates = getFourPlayerGameStats();

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

        <table className={styles.leaderboard}>
          <thead>
              <tr>
                <th>순위</th>
                <td>이름</td>
                <td>Elo</td>
                <td>1%<sup>*</sup></td>
                <td>12%<sup>**</sup></td>
                <td>국수</td>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan={6}>
                * 1%: 전체 국수 중 1위를 한 국수의 비율 <br/>
                ** 12%: 전체 국수 중 1, 2위를 한 국수의 비율
              </td>
            </tr>
          </tfoot>
          <tbody>
            {fourPlayerGameStates.map(stat => (
              <tr key={`leader-table-${stat.rank}`}>
                <th>{stat.rank}</th>
                <td>{stat.player}</td>
                <td>1500</td>
                <td>{stat.firstRatio}</td>
                <td>{stat.upperSecondRatio}</td>
                <td>{stat.totalGames}</td>
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
