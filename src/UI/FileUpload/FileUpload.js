import React from "react";
// import clsx from "clsx";
import { compose } from "recompose";
import PropTypes from "prop-types";

const FileUpload = compose()(function FileUpload(props) {
  const { id, multiple, accept, children, onChange } = props;
  return (
    <>
      <input
        style={{ display: "none" }}
        id={id}
        accept={accept}
        multiple={multiple}
        type={"file"}
        onChange={onChange}
      />
      <label htmlFor={id}>
        {React.cloneElement(React.Children.only(children), {
          component: "span",
        })}
      </label>
    </>
  );
});

FileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
FileUpload.defaultProps = {
  accept: "*/*",
  multiple: false,
};

export default FileUpload;
