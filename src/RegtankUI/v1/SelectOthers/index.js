import React, { useEffect, useRef, useState } from "react";
import { Grid, OutlinedInput } from "@mui/material";
import Select from "@protego/sdk/RegtankUI/v1/Select/Select";
import MenuItem from "@mui/material/MenuItem";
// import { ReactComponent as IconSelect } from "./ic_arrow_down.svg";
import IconSelect from '@mui/icons-material/KeyboardArrowDown';
import styles from "./styled.module.scss";
import PropTypes from "prop-types";

const {
  bool,
  number,
  string,
  object,
  objectOf,
  element,
  shape,
  func,
  any,
  arrayOf,
} = PropTypes;
const SelectOthers = ({ enterInput, data, onChange, selected, onSubmitInput, inputProp, ...props }) => {
  const [valueSelect, setValueSelect] = useState(selected);
  const [openSelect, setOpenSelect] = useState(false);
  const [inputValue, setInputValue] = useState(inputProp?.value);
  const [showInput, setShowInput] = useState(false);
  const [isEnterInput, setIsEnterInput] = useState("");
  const inputRef = useRef(null);
  const othersProp = data[data.length - 1]; //get last item of array data
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEnterInput("enter");
      onSubmitInput && onSubmitInput(e.target.value, valueSelect);
    }
  };
  useEffect(()=>{
    setValueSelect(selected);
    if(selected?.includes("OTHERS")) {
      setShowInput(true);
    }
  },[selected])
  const showInputText = () => {
    setShowInput(true);
  };
  const handleChange = (event) => { // handle change select
    const newValue = event.target.value;
    if (event.target.value === othersProp.key) {
      setShowInput(true);
      setTimeout(()=>{
        inputRef?.current?.focus();
      }, 200)
    }
    onChange && onChange(newValue);
    setValueSelect(newValue);
  };
  const onClickSelect = () => {
    setOpenSelect(!openSelect)
  }
  const onChangeInput = (e) => {
    setIsEnterInput("");
    setInputValue(e.target.value);
  }
  const clickOutsideInput = () => {
    if(isEnterInput!=="enter" || inputRef?.current?.value===""){
      setInputValue(inputProp?.value)
    }
  }
  const onFocusInput = () => {
    setInputValue("");
  }
  return (
    <div className={styles.selectOtherWrapper}>
      <div>
        {showInput && (
          <div className={styles.InputrWrapper}>
            <OutlinedInput
              inputRef={inputRef}
              endAdornment={
                <IconSelect
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setShowInput(false);
                    setOpenSelect(true);
                    setValueSelect("")
                  }}
                />
              }
              onChange={onChangeInput}
              onKeyDown={_handleKeyDown}
              value={inputValue}
              onBlur={clickOutsideInput}
              onFocus={onFocusInput}
              placeholder="Type a text here..."
            />
          </div>
        )}
        {!showInput && (
          <Select
            withFormControlProps={{ fullWidth: true }}
            value={valueSelect}
            onChange={handleChange}
            MenuProps={{ disablePortal: true }}
            open={openSelect}
            onClick={onClickSelect}
            input={<OutlinedInput />}
          >
            {data && data.map((item, key)=>{
              if(key < data.length -1 ) {
                return <MenuItem key={key} value={item.key}>{item.value}</MenuItem>
              }
            })}
              <MenuItem value={othersProp.key} onClick={showInputText}>
                {othersProp.value}
              </MenuItem>
          </Select>
        )}
      </div>
    </div>
  );
};

export default SelectOthers;

SelectOthers.propTypes = {
  selected: string, // selected value
  enterInput: func, // handle when enter input
  onChange: func, // onchange select
  data: arrayOf(
    shape(
      objectOf(
        shape({
          key: string, // value of select
          value: string, // text of select
        }),
      ),
    ),
  ),
};
