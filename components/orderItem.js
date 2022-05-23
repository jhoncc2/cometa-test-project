import styles from './orderItem.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { Checkbox, IconButton } from '@mui/material';
// Define kwnon status, avoid typos
const STATUS = {
  OUTSTANDING: 'OUTSTANDING',
  DUE: 'DUE',
  PAID: 'PAID'
}

export default function OrderItem({order, index, paymentIndex}) {
  
  const {name,
    price, 
    interest,
    due,
    status,
    payin} = order

    const reduction = null

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{due}</div>
      </div>
      {status !== STATUS.PAID ? 
        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div className={styles.title}>
            {reduction?
              <div className={styles.reduction}>${reduction}</div>
              :<></> }
              <span/>${price}
            </div>
            {interest?
              <div className={styles.description}>Interés: ${interest}</div>
              :<></> }
          </div>
          <Checkbox
            className={styles.checkbox}
            onChange={() => {}} 
            sx={{ '& .MuiSvgIcon-root': { 
              fontSize: 35, 
              borderRadius: 0,
            } }}
            />
        </div>
        :
        <IconButton 
          aria-label="open paid" 
          color="primary" 
          onClick={()=> {
            // TODO: do something
            }}>
            <KeyboardArrowDownIcon
              sx={[
                {
                  transform: "rotate(-90deg)"
                }
              ]}
            />  
          </IconButton> 
      }
      
    </div> 
  )
}

