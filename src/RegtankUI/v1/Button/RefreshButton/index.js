import IconButton from '@mui/material/IconButton';
import React from 'react';
import { ReactComponent as RefreshIcon } from "./RefreshIcon.svg";
import styles from "./styles.module.scss";

const RefreshButton = (props) => {
    return(
          <IconButton  {...props} >
            <div className={styles.button}>
                <RefreshIcon/>
            </div>
        </IconButton>
    )
}

export default RefreshButton;