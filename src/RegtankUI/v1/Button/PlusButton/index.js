import React from 'react';
import { styled } from '@mui/material/styles';
import ThemeColors from '../../constants/ThemeColors';
import { toRem } from '../../utils';
 import Button from "../ButtonBase"
import IconButton from '@mui/material/IconButton';
import { ReactComponent as AddIcon } from "./iconAdd.svg";

const PlusButton = (props) => {
    return(
          <IconButton  {...props} >
            <div>
                <AddIcon />
            </div>
        </IconButton>
    )
}

export default PlusButton;