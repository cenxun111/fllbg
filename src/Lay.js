import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./leftside/Sidebar";
import Hidden from "@material-ui/core/Hidden";
import Center from "./center/Center";
import Rightbar from "./rifhtside/Rightbar";
import Paper from '@material-ui/core/Paper';
import Write from "./components/Write";
import Setting from "./components/Setting";
import Login from "./components/Login";
import Register from "./components/Register";
import axios from "axios"
import Posts from "./center/Posts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container >
        <Grid item xs={2} md={2} >
          {/* <Sidebar /> */}
        </Grid>

        <Grid item lg={6} xs={10}>
          <Center />
          
         
        {/* <Router>
        <Switch>
          <Route exact path="/">
            <Center />
          </Route>
          <Route path ="/register">
            <Register/>
          </Route>
        </Switch>
      </Router> */}
          
        {/* <Write/> */}
        {/* <Setting /> */}
        {/* <Login/> */}
        {/* <Register/> */}
        </Grid>

        <Hidden mdDown>

          <Grid item xs={4} >
            <Rightbar />
          </Grid>

        </Hidden>

      </Grid>

    </div>

  );
}
