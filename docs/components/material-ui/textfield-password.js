import React from "react";
import TextField from "@protego/sdk/UI/TextField";
function TextFieldPasswordExample() {
  return (
    <div style={{ width: "300px" }}>
      <TextField value={"12345678"} type={"password"} togglePassword />
    </div>
  );
}

export default TextFieldPasswordExample;
