import React from "react";
import {MemoryRouter, useHistory, useLocation} from "react-router";
import "./BrowserSimulator.css";
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
function BrowserSimulatorNavigationBar() {
  const location = useLocation(),
    history = useHistory();
  return (
    <div className={"BrowserSimulator--navigator"}>
      <IconButton
        size={"small"}
        disabled={history.length < 2}
        onClick={() => history.goBack()}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton size={"small"} onClick={() => history.goForward()}>
        <ArrowForwardIcon />
      </IconButton>
      <span style={{flexGrow: 1, marginLeft: "1rem"}}>{location.pathname}</span>
    </div>
  );
}

function BrowserSimulator({children}) {
  return (
    <MemoryRouter>
      <BrowserSimulatorNavigationBar />
      {children}
    </MemoryRouter>
  );
}

export default BrowserSimulator;
