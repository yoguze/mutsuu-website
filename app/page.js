import Link from 'next/link'
import './style.css'
import styles from './page.module.css'
import './styles/style.scss'

export default function Page() {
  return (
    <>
      <h1 className={styles.sitetitle}>ともすた</h1>
      <p><a href="/about">ポートフォリオ</a></p>
    </>
  )
}