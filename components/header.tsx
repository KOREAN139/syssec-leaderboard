import type { NextComponentType } from 'next'
import styles from '@/styles/Header.module.css'

const Header: NextComponentType = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SysSec 마작 통계</h1>
    </div>
  )
}

export default Header