import { AppBar, Avatar, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './layout.module.css'

export default function Layout({student, children}) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.titleContainer}>
        <div className={styles.icon}><Avatar>{student.school.name.substring(0,3)}</Avatar></div>
        <div className={styles.title}>{student.school.name}</div>
      </div> */}
      <AppBar className={styles.AppBar}
        position="relative" color="primary" enableColorOnDark
        >
        <div className={styles.icon}><Avatar>{student.school.name.substring(0,3)}</Avatar></div>
        <div className={styles.title}>{student.school.name}</div>
      </AppBar>
      {children}
    </div> 
  )
}

