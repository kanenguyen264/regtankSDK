import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { compose } from "recompose";
import { ReactComponent as CopyIcon } from "../../../assets/icons/IcoCopy.svg";
import Tooltip from "../Tooltip";
import { toRem } from "../utils";
import styles from "./style.module.scss";
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
          // display: "inline-block",
          paddingLeft: toRem(9.4),
          // paddingBottom: "0px",
          marginRight: toRem(9.4),
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
          copyIcon = null,
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
            }
          : {};

      // @ts-ignore
      return (
        <Component
          ref={ref}
          className={clsx(classes.root, className)}
          {...others}
        >
          <div className="d-flex align-items-center justify-content-start">
            <div>
              {React.Children.only(children)
                |> React.cloneElement(#, {
                  ref: (r) => (contentRef.current = r),
                })}
            </div>
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
              <div>
                {tooltip ? (
                  <Tooltip title={tooltip} arrow>
                    <div className={styles.boxCopyButton}>
                      {copyIcon ? copyIcon : <CopyIcon {...iconProps} />}
                    </div>
                  </Tooltip>
                ) : (
                  <div className={styles.boxCopyButton}>
                    {copyIcon ? copyIcon : <CopyIcon {...iconProps} />}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Component>
      );
    },
  ),
);

CopyButton.propTypes = {
  children: PropTypes.node,

  classes: PropTypes.shape({
    copyButton: PropTypes.string,
    root: PropTypes.string,
  }),

  copyButtonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired,
    }),
  ]),

  silence: PropTypes.bool,
};

export default CopyButton;
