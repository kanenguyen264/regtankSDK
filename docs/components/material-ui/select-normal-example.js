import React from "react";
import Select from "../../../src/UI/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const ExampleNormal = function () {
  const [value, setValue] = React.useState(0);
  return (
    <FormControl style={{ width: "300px" }}>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        <MenuItem value={0}>Foo</MenuItem>
        <MenuItem value={1}>Bar</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ExampleNormal;
