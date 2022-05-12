import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import YakumanBoard from '@/components/yakuman-board';
import Leaderboard from '@/components/leaderboard';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          4인 동장 & 4인 반장 <br />
          역만
        </h1>
      </div>
      <Leaderboard />
      <YakumanBoard />
    </div>
  )
}

export default Home
