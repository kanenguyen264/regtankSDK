//@flow
import { Avatar } from "@mui/material";
import Tooltip from "../Tooltip";
import { withStyles } from "@mui/styles";
import { toRem } from "../utils";
import { extractLetters } from "@protego/sdk/utils/string";
import React, { Fragment } from "react";
import { compose, withProps } from "recompose";
import { getFullName } from "../utils";
import ThemeColors from "../constants/ThemeColors";
const withNotAvailableStr = (letters, notAvailable) =>
  notAvailable ? letters.slice(0, 1) + "/" + letters.slice(1) : letters;

const UserAvatar = compose(
  withProps((props) => {
    if (!props.user)
      return {
        user: {
          firstName: "Not",
          lastName: "Available",
          bgColorCode: "#FFD964",
          txtColorCode: "#ffffff",
        },
        notAvailable: true,
      };
    if (typeof props.user === "string") {
      const [firstName, ...lastName] = props.user.split(" ");
      return {
        user: {
          firstName,
          lastName: lastName.join(" "),
          bgColorCode: "#3E4FB3",
          txtColorCode: "#ffffff",
        },
      };
    }
  }),
  withStyles(
    (theme) => {
      const size = (props) => theme.typography.pxToRem(props.size || 26);
      return {
        wrap: {
          display: "flex",
          alignItems: "center",
          "& .MuiAvatar-root": {
            backgroundColor: (props) => props.user?.bgColorCode || "#3E4FB3",
            color: (props) => props.user?.txtColorCode || "#FFFFFF",
            fontSize: (props) => toRem(props.notAvailable ? 8 : 10),
            width: size,
            fontWeight: 400,
            height: size,
            marginRight: toRem(8),
            fontSize: (props) => toRem(props.txtSize || 11),
          },
        },
        description: {
          fontWeight: "normal",
          fontSize: toRem(14),
          lineHeight: toRem(20),
          color: ThemeColors.grayText,
        },
      };
    },
    { name: "MuiUserAvatar" },
  ),
)(function UserAvatar(props) {
  const {
    classes,
    user,
    notAvailable,
    className,
    noExtractLetter = false,
    toolTipTitle,
    description,
    src,
    hideAvatar = false,
    ...others
  } = props;
  const fullName = getFullName(user);

  return (
    <div className={classes.wrap}>
      {!hideAvatar && (
        <Tooltip arrow title={toolTipTitle || fullName}>
          <div className="avatarWrapper">
            <Avatar classes={classes} className={className} {...others} src={src}>
              {withNotAvailableStr(
                noExtractLetter ? fullName : extractLetters(fullName),
                notAvailable,
              )}
            </Avatar>
          </div>
        </Tooltip>
      )}
      {description && <div className={classes.description}>{description}</div>}
    </div>
  );
});

export default UserAvatar;
