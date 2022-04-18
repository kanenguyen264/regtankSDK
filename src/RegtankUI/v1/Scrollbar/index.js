import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import clsx from "clsx";
import styles from './style.module.scss';

const CustomScrollbar = ({ classes = {}, autoHeightMax = 300, ...props }) => {
  return (
    <Scrollbars
      style={{ width: "100%" }}
      autoHeight
      autoHeightMin={10}
      autoHeightMax={autoHeightMax}
      className={classes.root}
      renderTrackHorizontal={(props) => {
        return <div {...props} style={{ display: "none" }} />;
      }}
      renderTrackVertical={(props) => {
        return <div {...props} className={clsx(styles.vCustomScrollBarTrack, classes.vCustomScrollBarTrack, 'RegScrollbarVTrack' )} />;
      }}
      renderView={(props) => (
        <div
          {...props}
          style={{
            ...props.style,
          }}
          className={clsx(styles.scrollbarView, clsx(classes.scrollbarView, 'RegScrollbarView'))}
        />
      )}
      renderThumbVertical={(props) => {
        return <div {...props} className={clsx(styles.vCustomScrollBarThumb, classes.vCustomScrollBarThumb, 'RegScrollbarVThumb')} />;

      }}
      {...props}
    >
      {props.children}
    </Scrollbars>
  );
};

export default CustomScrollbar;
