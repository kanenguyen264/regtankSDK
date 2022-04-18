import React from "react";
import CountrySelector from "../../../src/UI/CountrySelector";
import Button from "@material-ui/core/Button";

function CountrySelectorExample() {
  const [value, setValue] = React.useState(["AL"]),
    [anchorEl, setAnchorEl] = React.useState(null),
    open = Boolean(anchorEl);
  return (
    <>
      <Button
        variant={"contained"}
        color={"primary"}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Select country
      </Button>
      <CountrySelector
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        value={value}
        onChange={setValue}
      />
    </>
  );
}

export default CountrySelectorExample;
