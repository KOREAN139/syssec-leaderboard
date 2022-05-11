import type { NextPage } from 'next'
import styles from '@/styles/Footer.module.css'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
    <a
      href="https://github.com/KOREAN139"
      target="_blank"
      rel="noopener noreferrer"
    >
      Maintained by 한상구
    </a>
  </footer>
  )
}

export default Footer