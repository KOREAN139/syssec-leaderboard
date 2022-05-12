import type { NextComponentType } from 'next'
import styles from '@/styles/YakumanBoard.module.css'
import TableContainer from '@/components/table-container';
import { getYakumanHistories } from '@/utils/log'

const YakumanBoard: NextComponentType = () => {
  const yakumanHistories = getYakumanHistories();

  return (
    <TableContainer>
      {yakumanHistories.map(({ yakumans, nickname, hand, huTile }, i) => (
        <table className={styles.board} key={`yakuman-${i}`}>
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
    </TableContainer>
  )
}

export default YakumanBoard