import React, { useState } from "react";
import {
  makeStyles,
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container
} from "@material-ui/core/";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { signup } from "../actions/SignupAction";
import whitelogo from "../whitelogo.png";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },logo: {
    width: "100%",
    height: "10%",
    marginBottom: 60,
    // [theme.breakpoints.down(1200)]: {
    //   width: 400
    // },
    // [theme.breakpoints.down(960)]: {
    //   width: "85%"
    // },
  }
}));

function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  });

  // console.log("signup newUser check", newUser);

  const handleSubmit = e => {
    e.preventDefault();
    props.signup(newUser);
    history.push("/");
  };

  const handleChanges = e => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <img src={whitelogo} className={classes.logo}/>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Username"
                name="username"
                variant="outlined"
                fullWidth
                autoFocus
                value={newUser.username}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={newUser.password}
                onChange={handleChanges}
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                fullWidth
                label="First Name"
                value={newUser.first_name}
                onChange={handleChanges}
                name="first_name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                fullWidth
                label="Last Name"
                value={newUser.last_name}
                onChange={handleChanges}
                name="last_name"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { signup })(SignUp);
