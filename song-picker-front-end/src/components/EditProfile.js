import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/FetchUserAction";
import { editProfile } from "../actions/EditProfileAction";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  container: {
    margin: 100,
    color: "#898E88"
  },
  editIcon: {
    color: "#99FF8A"
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
  }
}));

function EditProfile(props) {
  const classes = useStyles();
  console.log("edit profile1", props);
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
        console.log("edit profile get res", res);
        setUser(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.editProfile(user);
  };

  console.log("edit profile user", user);
  return (
    <div>
      <EditIcon className={classes.editIcon} fontSize="large" />

      <Typography>Edit Profile</Typography>

      <TextField
        autoComplete="off"
        label="Username"
        name="username"
        value={user.username || ""}
        onChange={handleChange}
      />

      <TextField
        autoComplete="off"
        label="Password"
        // type="password"
        name="password"
        value={user.password || ""}
        onChange={handleChange}
      />

      <TextField
        autoComplete="off"
        label="First Name"
        name="first_name"
        value={user.first_name || ""}
        onChange={handleChange}
      />

      <TextField
        autoComplete="off"
        label="Last Name"
        name="last_name"
        value={user.last_name || ""}
        onChange={handleChange}
      />

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
