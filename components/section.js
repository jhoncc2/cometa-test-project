import { useReducer, useContext, createContext } from 'react'
import styles from './section.module.css';

export const Section = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}