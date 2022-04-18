import React from "react";
import { getDisplayName } from "recompose";
import { FastField, Field } from "formik";

const withFormikField = (Component) => {
  const WithFormikFieldInnerComponent = React.forwardRef(
    function WithFormikFieldInnerComponent(
      { field, form, error, helperText, autoFocus = false, ...props },
      ref,
    ) {
      const { touched, errors } = form;
      const _error = Boolean(
          error || (touched[field.name] && errors[field.name]),
        ),
        _helperText = _error ? errors[field.name] : helperText;

      return (
        <Component
          ref={ref}
          formik
          field={field}
          form={form}
          error={_error}
          helperText={_helperText}
          {...props}
        />
      );
    },
  );
  function WithFormikField({ formik, autoFocus, ...props }) {
    /**
     *
     * @type {React.MutableRefObject<HTMLElement>}
     */
    const ref = React.useRef(null),
      [focus, setFocus] = React.useState(false);

    React.useEffect(() => {
      if (ref.current !== null && !focus && autoFocus === true) {
        ref.current.focus();
        setFocus(true);
      }
    }, [focus]);

    if (!formik) {
      return <Component ref={ref} {...props} />;
    }
    const FieldComponent = formik === "fast" ? FastField : Field;
    return (
      <FieldComponent
        component={WithFormikFieldInnerComponent}
        ref={ref}
        {...props}
      />
    );
  }
  if (process.env.NODE_ENV === "development")
    WithFormikField.displayName = `withFormikField(${getDisplayName(
      Component,
    )})`;
  return WithFormikField;
};

export default withFormikField;
