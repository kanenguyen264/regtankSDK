import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as CopyIcon } from "../../assets/icons/CopyIcon.svg";
import { useSnackbar } from "notistack";
import { toRem } from "../../utils/measurements";
import styles from "./CopyButton.module.scss";
import { Tooltip } from "@material-ui/core";

/**
 *
 * @param {HTMLElement} element
 * @param {function} callback
 */
function executeCopy(element, callback = () => {}) {
  const el = document.createElement("textarea");
  el.value = element.innerText;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

const CopyButton = compose(
  withStyles(
    (theme) => {
      return {
        root: {},
        copyButton: {
          display: "inline-block",
          paddingLeft: toRem(9.4),
          paddingBottom: "0px",
          marginRight: toRem(9.4)
        },
      };
    },
    { name: "MuiCopyButton" },
  ),
)(
  React.forwardRef(
    /**
     *
     * @param {CopyButtonProps} props
     * @param ref
     * @returns {null}
     * @constructor
     */
    function CopyButton(props, ref) {
      
      const {
          className,
          copyButtonRef = () => {},
          classes,
          silence = false,
          component: Component = "div",
          children,
          buttonSize = null,
          tooltip = null,
          ...others
        } = props,
        /**
         *
         * @type {React.MutableRefObject<HTMLElement>}
         */
        contentRef = React.useRef(),
        { enqueueSnackbar } = useSnackbar(),
        iconProps = buttonSize
          ? {
              width: toRem(buttonSize),
              height: toRem(buttonSize * (16.0 / 13)),
            }
          : {};

      // @ts-ignore
      return (
        <Component
          ref={ref}
          className={clsx(classes.root, className)}
          {...others}
        >
          {React.Children.only(children)
            |> React.cloneElement(#, {
              ref: (r) => (contentRef.current = r),
            })}

          <div
            className={clsx(classes.copyButton, styles.CopyIconHover)}
            ref={copyButtonRef}
            onClick={() => {
              executeCopy(contentRef.current);
              if (!silence) {
                enqueueSnackbar("Copied!", {
                  autoHideDuration: 1200,
                });
              }
            }}
          >
            { tooltip ?
                <Tooltip title={tooltip} arrow>
                  <div className={ styles.boxCopyButton }>
                    <CopyIcon {...iconProps} />
                  </div>
                </Tooltip>
              :
                <div className={ styles.boxCopyButton }>
                  <CopyIcon {...iconProps} />
                </div>
            }
            
          </div>
        </Component>
      );
    },
  ),
);

CopyButton.propTypes = {
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.shape({
    copyButton: PropTypes.string,
    root: PropTypes.string,
  }),
  /**
   * Attach ref đến copyButton
   */
  copyButtonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),
  /**
   * Tắt toast notification khi copy dữ liệu thành công
   */
  silence: PropTypes.bool,
};

export default CopyButton;
