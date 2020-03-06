import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/FetchUserAction";
import { editProfile } from "../actions/EditProfileAction";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import {
  makeStyles,
  TextField,
  Typography,
  Button,
  Grid,
  Paper
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  container: {
    // flexDirection: "column"
  },
  editIcon: {
    color: "#99FF8A",
    marginTop: 50
  },
  grid: {
    margin: "auto"
  },
  paper: {
    // padding: "auto",
    // margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "90%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  input: {
    marginBottom: 30
  },
  contButton: {
    margin: "auto",
    marginRight: 50,
    marginBottom: 20,
    "&:hover": {
      backgroundColor: "#CCFFC4",
      color: "#007CB2"
    }
  },
  backButton: {
    margin: "auto",
    marginLeft: 50,
    marginBottom: 20,
    backgroundColor: "#ff0000",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#ff0000"
    }
  }
}));

function EditProfile(props) {
  const classes = useStyles();
  const history = useHistory();

  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  });

  // let user_id = localStorage.getItem("user_id");

  useEffect(() => {
    setUpdatedUser(props.user);
    // AxiosWithAuth()
    //   .get(`/api/users/${user_id}`)
    //   .then(res => {
    //     console.log("edit profile get res", res);
    //     setUser(res.data);
    //     // console.log("user1", user);
    //     // if (res.data.password.length > 0) {
    //     //   setUser({ ...res.data, password: "******" });
    //     //   console.log("user2", user);
    //     // } else {
    //     //   setUser(res.data);
    //     // }
    //   })
    //   .catch(err => console.error(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    AxiosWithAuth()
      .put(`/api/users/${props.user.id}`, updatedUser)
      .then(res => {
        // console.log("HELLO???");
        // console.log("submit update res", res);
        window.alert("Profile updated");
        history.push("/dashboard");
      })
      .catch(err => {
        console.error(
          "Error communicating with server on PUT update profile: ",
          err
        );
        window.alert("Error updating profile. Please try again");
      });
  };

  const handleChange = e => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  };

  // const handleChange = e => {
  //   props.user[e.target.name] = e.target.value;
  // };

  const goBack = () => {
    history.push("/dashboard");
  };

  return (
    <div className={classes.container}>
      <EditIcon className={classes.editIcon} fontSize="large" />
      <br />
      <Typography variant="h5">Edit Profile</Typography>

      <br />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        className={classes.grid}
      >
        <div className={classes.paper}>
          <Typography>
            You must retype your current password to change fields unless you
            want to change your current password
          </Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              required
              fullWidth
              className={classes.input}
              autoComplete="off"
              label="Username"
              name="username"
              value={updatedUser.username || ""}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              className={classes.input}
              autoComplete="off"
              label="Password"
              type="password"
              name="password"
              value={updatedUser.password || ""}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              className={classes.input}
              autoComplete="off"
              label="First Name"
              name="first_name"
              value={updatedUser.first_name || ""}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              className={classes.input}
              autoComplete="off"
              label="Last Name"
              name="last_name"
              value={updatedUser.last_name || ""}
              onChange={handleChange}
            />
            <Button
              className={classes.contButton}
              variant="contained"
              color="primary"
              type="submit"
            >
              Update
            </Button>
            <Button
              onClick={goBack}
              color="secondary"
              className={classes.backButton}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(EditProfile);
