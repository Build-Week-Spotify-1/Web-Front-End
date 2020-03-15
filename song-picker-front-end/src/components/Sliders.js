import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Grid, Typography, Container } from "@material-ui/core/";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import SingleSlider from "./Slider";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  linkbut: {
    textDecoration: "none"
  },
  sliderCont: {
    margin: "auto"
  }
}));

function Sliders(props) {
  const classes = useStyles();

  const cats = [
    { name: "cat1", value: 0 },
    { name: "cat2", value: 0 },
    { name: "cat3", value: 0 },
    { name: "cat4", value: 0 },
    { name: "cat5", value: 0 },
    { name: "cat6", value: 0 }
  ];

  return (
    <div>
      <CssBaseline />

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Welcome to the sliders page
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Here you can adjust the categories with their respective slider to
            find a song based on your input
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Search!
                </Button>
              </Grid>
              {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container direction="column" justify="center">
          {cats.map(cat => (
            <SingleSlider key={cat.name} cat={cat}/>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Sliders);
