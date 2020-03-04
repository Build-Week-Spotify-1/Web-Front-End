import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Paper,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core/";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  container: {},
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://i.imgur.com/QgEZLH9.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    let name = e.target.name;
    let value = e.target.value;
    setCreds({ ...creds, [name]: value });
  };

  const signinForm = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/api/auth/login", creds)
      .then(res => {
        console.log("sign in res", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("message", res.data.message);
        history.push("/dashboard");
      })
      .catch(err => {
        console.log("SIGN IN ERROR: ", err);
        window.alert("Incorrect credentials or user does not exist.");
      });
  };

  return (
    <div className={classes.container}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={signinForm}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                autoFocus
                value={creds.username}
                onChange={handleChanges}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={creds.password}
                onChange={handleChanges}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // href="/dashboard"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
