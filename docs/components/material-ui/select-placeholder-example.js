import React from "react";
import Select from "../../../src/UI/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const ExamplePlaceholder = function () {
  const [value, setValue] = React.useState(-1);
  return (
    <FormControl style={{ width: "200px" }}>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        <MenuItem value={-1} style={{ display: "none" }}>
          Select an item
        </MenuItem>
        <MenuItem value={0}>Foo</MenuItem>
        <MenuItem value={1}>Bar</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ExamplePlaceholder;
