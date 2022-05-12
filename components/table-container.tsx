import styles from '@/styles/TableContainer.module.css'

type TableContainerProps = {
  children: React.ReactNode;
}

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TableContainer