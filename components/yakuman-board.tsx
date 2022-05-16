import type { NextComponentType } from 'next'
import Image from 'next/image';
import styles from '@/styles/YakumanBoard.module.css'
import TableContainer from '@/components/table-container';
import { getYakumanHistories } from '@/utils/log'
import { tileImageMap } from '@/utils/tile-images';

const YakumanBoard: NextComponentType = () => {
  const yakumanHistories = getYakumanHistories();

  return (
    <TableContainer>
      {yakumanHistories.map(({ yakumans, nickname, hand, huTile }, i) => (
        <table className={styles.board} key={`yakuman-${i}`}>
          <tbody>
            <tr>
              <th colSpan={2} className={styles.nickname}>{nickname}</th>
            </tr>
            <tr className={styles.yakuman}>
              <td className={styles.name}>{yakumans.join("\n")}</td>
              <td className={styles.hand}>
                {hand.map(tile => (
                  <Image
                    src={tileImageMap[tile]}
                    className={styles.tile}
                    height="60%"
                    width="37%"
                    objectFit="contain"
                    draggable={false}
                  />
                ))}
                <Image
                  src={tileImageMap[huTile]}
                  className={styles.hutile}
                  height="60%"
                  width="60%"
                  objectFit="contain"
                  draggable={false}
                />
              </td>
            </tr>
          </tbody>
        </table>))}
    </TableContainer>
  )
}

export default YakumanBoard