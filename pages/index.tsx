import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import YakumanBoard from '@/components/yakuman-board';
import Leaderboard from '@/components/leaderboard';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Syssec 마작 리더보드
      </h1>

      <Leaderboard />
      <YakumanBoard />
    </div>
  )
}

export default Home
