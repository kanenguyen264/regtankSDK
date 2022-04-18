import React from "react";
import DatePicker from "../../../src/UI/DatePicker";
import Moment from "react-moment";
function DatePickerSimpleExample() {
  const [value, setValue] = React.useState(null);
  return (
    <div style={{ width: "500px" }}>
      <div className={"mb-3"}>
        Selected day is <Moment format={"DD/MM/YYYY"}>{value}</Moment>
      </div>
      <DatePicker
        value={value}
        onChange={setValue}
        placeholder={"Input a date"}
      />
    </div>
  );
}

export default DatePickerSimpleExample;
