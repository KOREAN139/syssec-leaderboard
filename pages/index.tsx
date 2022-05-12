import type { NextPage } from 'next'
import styles from '@/styles/Home.module.css'
import { getFourPlayerGameStats, getYakumanHistories } from '@/utils/log'

const Home: NextPage = () => {
  const fourPlayerGameStates = getFourPlayerGameStats();
  const yakumanHistories = getYakumanHistories();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Syssec 마작 리더보드
      </h1>

      <table className={styles.leaderboard}>
        <thead>
          <tr>
            <th>순위</th>
            <td>이름</td>
            <td>1%<sup>*</sup></td>
            <td>12%<sup>**</sup></td>
            <td>국수</td>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan={6}>
              * 1%: 전체 국수 중 1위를 한 국수의 비율 <br />
              ** 12%: 전체 국수 중 1, 2위를 한 국수의 비율
            </td>
          </tr>
        </tfoot>
        <tbody>
          {fourPlayerGameStates.map(stat => (
            <tr key={`leader-table-${stat.rank}`}>
              <th>{stat.rank}</th>
              <td className={styles.nickname}>{stat.player}</td>
              <td>{+stat.firstRatio.toFixed(1)}</td>
              <td>{+stat.upperSecondRatio.toFixed(1)}</td>
              <td>{stat.totalGames}</td>
            </tr>))}
        </tbody>
      </table>

      {yakumanHistories.map(({ yakumans, nickname, hand, huTile }, i) => (
        <table className={styles.yakumanboard} key={`yakuman-${i}`}>
          <tbody>
            <tr>
              <th colSpan={2}>{nickname}</th>
            </tr>
            <tr className={styles.yakuman}>
              <td className={styles.name}>{yakumans.join("\n")}</td>
              <td className={styles.hand}>{hand.join("") + " " + huTile}</td>
            </tr>
          </tbody>
        </table>))}
    </div>
  )
}

export default Home
