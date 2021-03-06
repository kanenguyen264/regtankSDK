import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import LoadingWrapper from "../../../src/UI/LoadingWrapper";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 200,
    backgroundColor: "#39424b",
    color: "white",
    padding: theme.spacing(2),
  },
}));

function LoadingWrapperExample1() {
  const [loading, setLoading] = React.useState(false),
    classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Switch
              checked={loading}
              onChange={(e) => setLoading(e.target.checked)}
            />
          }
          label={`Loading ${loading ? "On" : "Off"}`}
        />
      </Grid>
      <Grid item xs={6}>
        <LoadingWrapper loading={loading}>
          <Paper classes={{ root: classes.paper }}>
            <strong>Default opacity (0.25) </strong>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Beatae, minima.
          </Paper>
        </LoadingWrapper>
      </Grid>
      <Grid item xs={6}>
        <LoadingWrapper loading={loading} opacity={0.35}>
          <Paper classes={{ root: classes.paper }}>
            <strong>Opacity = 0.35 </strong>Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequatur, similique!
          </Paper>
        </LoadingWrapper>
      </Grid>
    </Grid>
  );
}

export default LoadingWrapperExample1;
