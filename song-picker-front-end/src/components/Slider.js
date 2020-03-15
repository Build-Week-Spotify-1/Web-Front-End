import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import TuneIcon from "@material-ui/icons/Tune";

const useStyles = makeStyles({
  root: {
    width: 250
  },
  input: {
    width: 60
  }
});

export default function SingleSlider(props) {
  console.log("slider props", props);
  const classes = useStyles();
  const [value, setValue] = useState(0);
  console.log("slider value", value);
  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1) {
      setValue(1);
    }
  };

  return (
    <Grid container justify="center">
      <Typography id="input-slider" gutterBottom>
        {props.cat.name}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TuneIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            min={0}
            step={0.01}
            max={1}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 0.01,
              min: 0,
              max: 1,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
