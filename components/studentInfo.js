import { useEffect, useMemo, useState } from 'react'
import { usePayment } from './paymentProvider'
import styles from './studentInfo.module.css'

export default function StudentInfo({student, orders}) {
  const {paymentIndex, due} = usePayment()
  const [total, setTotal] = useState(0)

  useEffect(() => {
      const t = due[0] === paymentIndex 
        ? 0 
        : orders.slice(due[0], paymentIndex)
            .reduce((a,b) => {
              return a + parseFloat(b.price)
            }, 0)
      setTotal(t)
    }
      , [paymentIndex])
  

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>{student.first_name + ' ' + student.last_name}</div>
        <div>{student.school.name}</div>
      </div>
      <div className={styles.totalContainer}>
        <div>{'Total a Pagar'}</div>
        <div>${total? total: '--'}</div>
      </div>
    </div> 
  )
}
