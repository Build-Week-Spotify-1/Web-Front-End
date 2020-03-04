import React from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashBoard from "./components/DashBoard";
import EditProfile from "./components/EditProfile";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import NavBar from "./components/NavBar";
import SongFind from "./components/SongFind";

function App() {
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
        typography: {}
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/dashboard">
            <NavBar />
            <DashBoard />
          </PrivateRoute>
          <PrivateRoute exact path="/search">
            <NavBar />
            <SongFind />
          </PrivateRoute>
          <PrivateRoute exact path="/edit">
            <NavBar />
            <EditProfile />
          </PrivateRoute>
 
          {/* <Route exact path="/suggested">
          <Suggested />
        </Route> */}
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
