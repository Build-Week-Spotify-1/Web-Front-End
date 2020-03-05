import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/FetchUserAction";
import { editProfile } from "../actions/EditProfileAction";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: "column"
  },
  editIcon: {
    color: "#99FF8A",
    marginTop: 50
  },
  contButton: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  formDiv: {
    marginTop: 20
  },
  linkBut: {
    textDecoration: "none"
  },
  linkText: {
    color: "#E2FFCE",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  input: {
    width: "35%",
    marginTop: 30,
    [theme.breakpoints.down(1300)]: {
      width: "50%"
    },
    [theme.breakpoints.down(800)]: {
      width: "75%"
    }
  }
}));

function EditProfile(props) {
  const classes = useStyles();
  const history = useHistory();

  // console.log("edit profile1", props);
  const [user, setUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  });
  let user_id = localStorage.getItem("user_id");

  useEffect(() => {
    // props.fetchUser(user_id);
    // console.log("edit profile props2", props)
    // console.log("HELLO?")
    // setUser(props.user);
    AxiosWithAuth()
      .get(`/api/users/${user_id}`)
      .then(res => {
        // console.log("edit profile get res", res);
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, [user_id]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.editProfile(user);
    history.push("/dashboard");
  };

  // console.log("edit profile user", user);
  return (
    <div className={classes.container}>
      <EditIcon className={classes.editIcon} fontSize="large" />
      <br />
      <Typography>Edit Profile</Typography>
      <br />
      <TextField
        className={classes.input}
        autoComplete="off"
        label="Username"
        name="username"
        value={user.username || ""}
        onChange={handleChange}
      />
      {/* <br />
      <TextField
        className={classes.input}
        autoComplete="off"
        label="Password"
        // type="password"
        name="password"
        value={user.password || ""}
        onChange={handleChange}
      /> */}
      <br />
      <TextField
        className={classes.input}
        autoComplete="off"
        label="First Name"
        name="first_name"
        value={user.first_name || ""}
        onChange={handleChange}
      />
      <br />
      <TextField
        className={classes.input}
        autoComplete="off"
        label="Last Name"
        name="last_name"
        value={user.last_name || ""}
        onChange={handleChange}
      />
      <br />
      <Button
        onClick={handleSubmit}
        className={classes.contButton}
        variant="contained"
        color="primary"
      >
        Update
      </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { fetchUser, editProfile })(
  EditProfile
);
