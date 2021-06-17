import React from "react";
import Lay from "./Lay";
// import Layre from "./Layre";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react'
import Register from "./components/Register";
import Sidebar from "./leftside/Sidebar";
import Login from "./components/Login";
import Write from "./components/Write";
import Setting from "./components/Setting";
import SinglePost from "./components/SinglePost";
import { Context } from "./context/Context";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})


const App = () => {
  const { user } = useContext(Context);
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Lay />
          </Route>
          <Route path="/register">
            {user ? <Lay/> : <Register/>}
            {/* <Register /> */}
          </Route>
          <Route path="/login">
            {user ? <Lay/> : <Login/>}
            {/* <Login /> */}
          </Route>
          <Route path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route path="/settings">
            <Setting />
          </Route>
          <Route path="/post/:postId">
            <SinglePost />
          </Route>
        </Switch>
      </Router>

    </ThemeProvider>

  );
};

export default App;
