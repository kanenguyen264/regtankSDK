import React from "react";
import TextField from "../../../src/UI/TextField";

function TextFieldInputTel() {
  const [value, setValue] = React.useState("");

  return (
    <div style={{ width: "200px" }}>
      <TextField
        fullWidth
        type={"tel"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextFieldInputTel;
