import { Outlet } from 'react-router-dom'
import * as styles from './DefaultLayout.css'
const Layout = () => {
  return (
    <div className={styles.app}>
      <Outlet />
    </div>
  )
}

export default Layout
