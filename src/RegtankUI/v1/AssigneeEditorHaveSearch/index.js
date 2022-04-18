import { ReactComponent as SearchIcon } from "../../../assets/icons/IcoSearch.svg";
import { getFullName } from "../utils";
import UserAvatar from "../UserAvatar";
import { toRem } from "../utils";
import clsx from "clsx";
import styles from "./styles.module.scss";
import * as React from "react";
import PropTypes from "prop-types";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Autocomplete from "@mui/material/Autocomplete";
import ButtonBase from "@mui/material/ButtonBase";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { ReactComponent as DropdownIcon } from "../../../assets/icons/IcoDropdown.svg";
import { Scrollbars } from "react-custom-scrollbars";
import { SvgIcon } from "@mui/material";

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
function PopperComponent(props) {
  const { disablePortal, anchorEl, open, selected, ...other } = props;
  return (
    <div {...other} className={styles.autoPopperBody}>
      {props.children}
    </div>
  );
}

function PaperComponent(props) {
  return (
    <Scrollbars
      style={{ width: "100%" }}
      autoHeight
      autoHeightMin={10}
      autoHeightMax={300}
      className={styles.autoPopperList}
      renderTrackHorizontal={(props) => {
        return <div {...props} style={{ display: "none" }} />;
      }}
      renderTrackVertical={(props) => {
        return <div {...props} className={styles.vCustomScrollBarTrack} />;
      }}
      renderView={(props) => (
        <div
          {...props}
          style={{
            ...props.style,
          }}
          className={styles.scrollbarView}
        />
      )}
      renderThumbVertical={(props) => {
        return <div {...props} className={styles.vCustomScrollBarThumb} />;
      }}
    >
      {props.children}
    </Scrollbars>
  );
}

PopperComponent.propTypes = {
  anchorEl: PropTypes.any,
  disablePortal: PropTypes.bool,
  open: PropTypes.bool.isRequired,
};

export default function AssigneeEditor({
  selected,
  onChange,
  data = [], //array user from API
  placement = "bottom-start",
  mWidth = 221,
  customOnChange,
  placeholder = "Filter labels"
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [value, setValue] = React.useState([labels[1], labels[11]]);
  const [selectedValue, setSelectedValue] = React.useState(selected);
  React.useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);
  const handleClick = (event) => {
    // setSelectedValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? new Date().getTime() : null;

  return (
    <React.Fragment>
      <Box
        sx={{ minWidth: mWidth, fontSize: 13 }}
        className={styles.autoInputField}
      >
        <ButtonBase disableRipple aria-describedby={id} onClick={handleClick}>
          {selectedValue?.firstName?.length > 0 ? (
            <UserAvatar
              user={{...selectedValue, bgColorCode: selectedValue?.colorCode}}
              size={30}
              txtSize={12}
              description={
                <span
                  style={{
                    fontSize: toRem(12),
                    color: "#232323",
                  }}
                >
                  {getFullName(selectedValue)}
                </span>
              }
            />
          ) : (
            <UserAvatar
              user={{
                firstName: "?",
                lastName: "",
                bgColorCode: "#9e9d9d",
                txtColorCode: "",
              }}
              size={30}
              noExtractLetter
              description={
                <span style={{ fontSize: toRem(12), color: "#232323" }}>
                  Unassigned
                </span>
              }
            />
          )}
          {/* <DropdownIcon /> */}
          <SvgIcon viewBox={"0 0 12 8"} component={DropdownIcon} />
        </ButtonBase>
      </Box>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        selected={selectedValue?.id ? 1 : 0}
        className={styles.autoPopperWrap}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <Autocomplete
              open
              onClose={(event, reason) => {
                if (reason === "escape") {
                  handleClose();
                }
              }}
              value={selectedValue}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === "keydown" &&
                  event.key === "Backspace" &&
                  reason === "removeOption"
                ) {
                  return;
                }
                if(customOnChange) {
                  customOnChange(newValue, setAnchorEl, setSelectedValue)
                } else {
                  setSelectedValue(newValue);
                  setAnchorEl(null);
                  onChange && onChange(newValue);
                }
              }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              PaperComponent={PaperComponent}
              renderTags={() => null}
              noOptionsText="No labels"
              renderOption={(props, option) => {
                return (
                  <li
                    className={clsx(
                      "d-flex align-items-center",
                      styles.autoMenuItem,
                    )}
                    {...props}
                    key={option.id}
                  >
                    <UserAvatar
                      user={{...option, bgColorCode: option?.colorCode}}
                      size={26}
                      description={
                        <span
                          style={{
                            fontSize: toRem(14),
                            color: "#444444",
                          }}
                        >
                          {getFullName(option)}
                        </span>
                      }
                      txtSize={11}
                    />
                  </li>
                );
              }}
              options={data}
              getOptionLabel={(option) => {
                return getFullName(option);
              }}
              renderInput={(params) => (
                <div className={styles.autoHeader}>
                  <InputBase
                    ref={params.InputProps.ref}
                    inputProps={{ ...params.inputProps }}
                    autoFocus
                    placeholder={placeholder}
                    endAdornment={
                      <InputAdornment position="start">
                        <SvgIcon viewBox={"0 0 18 18"} component={SearchIcon} />
                      </InputAdornment>
                    }
                  />
                  <span className={styles.autoCount}>
                    Selected({selectedValue?.id ? 1 : 0})
                  </span>
                </div>
              )}
            />
          </div>
        </ClickAwayListener>
      </Popper>
    </React.Fragment>
  );
}

AssigneeEditor.propTypes = {
  selected: objectOf(
    shape({
      avatar: element,
      colorCode: string,
      email: string,
      firstName: string,
      id: number,
      lastName: string,
    }),
  ),
  data: arrayOf(
    shape(
      objectOf(
        // data from api
        shape({
          avatar: element,
          colorCode: string,
          email: string,
          firstName: string,
          id: number,
          lastName: string,
        }),
      ),
    ),
  ),
};
