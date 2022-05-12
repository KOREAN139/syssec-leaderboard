import type { NextComponentType } from 'next'
import styles from '@/styles/Leaderboard.module.css'
import TableContainer from '@/components/table-container';
import { getFourPlayerGameStats } from '@/utils/log'

const Leaderboard: NextComponentType = () => {
  const fourPlayerGameStates = getFourPlayerGameStats();

  return (
    <TableContainer>
      <table className={styles.board}>
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
            <td colSpan={5}>
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
    </TableContainer>
  )
}

export default Leaderboard