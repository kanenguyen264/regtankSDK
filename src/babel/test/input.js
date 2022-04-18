import React from "react";
import clsx from "clsx";
const styles = {
  foo: "",
};

const Component = ({ className }) => (
  <div>
    <span className={(styles.foo, "bar", className)} />
  </div>
);
