import React, { useState, useEffect } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import EditProfile from "./components/EditProfile";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import SongFind from "./components/SongFind";
import Sliders from "./components/Sliders";

function App() {
  const [toknd, setToknd] = useState("");

  useEffect(() => {
    if (!toknd) {
      setToknd(localStorage.getItem("token"));
    }
  }, [toknd]);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",

          primary: {
            main: "#1DB954"
          },
          secondary: {
            main: "#FFFFFF"
          },
          text: {
            primary: "#ffffff",
            secondary: "#00000"
          }
        },

        typography: {
          fontFamily: "Montserrat"
        }
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* {console.log(toknd)} */}
        {/* {toknd ? <NavBar setToknd={setToknd} /> : null} */}
        <PrivateRoute path="/dashboard" component={NavBar} />
        <PrivateRoute path="/search" component={NavBar} />
        <PrivateRoute path="/edit" component={NavBar} />
        <PrivateRoute path="/sliders" component={NavBar} />

        <Switch>
          {/* <PrivateRoute path="/" component={NavBar} /> */}

          <Route exact path="/" component={SignIn} />

          <Route path="/signup" component={SignUp} />

          <PrivateRoute path="/dashboard" component={DashBoard} />

          <PrivateRoute path="/search" component={SongFind} />

          <PrivateRoute path="/edit" component={EditProfile} />

          <PrivateRoute path="/sliders" component={Sliders} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
