import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from './sectionTitle.module.css'
import { useState } from "react";

export default function SectionTitle({title, description, onOpen, isOpen}) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div>
        <IconButton 
          aria-label="rotate" 
          color="primary" 
          onClick={()=> {
            onOpen()
            }}>
          <KeyboardArrowDownIcon
            sx={[
              { 
                transform: "rotate(0deg)"
              },
              isOpen && {
                transform: "rotate(-180deg)"
              }
            ]}
          />
        </IconButton>
      </div>
    </div> 
  )
}

