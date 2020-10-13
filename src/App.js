import React from 'react';

import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import  Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import SideBar from './components/SideBar';
import home from './pages/home';
import possibilidade from './pages/possibilidade';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import {
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route,
} from "react-router-dom";

import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';

 //takes theme defined in theme.js
 const styles = (theme) => ({
  ...theme.general,
  appBarSeparator:{
    borderBottom: '1px solid rgba(0,0,0,0.4)',
  },
  itemContainer:{
    marginTop:10,
    paddingLeft:0,
    paddingTop:10,
    borderRadius: '15px',
    backgroundColor: "rgb(245,245,245,1)",
  },
  gridContainer:{
    height: '100%'
  },
  pageContainer:{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  contentWrap:{
    flex: 1
  },
  footer:{
    minHeight: 32
  },
  footerText:{
    marginLeft: 'auto',
    marginRight: '10%'
  }
});
// flex:1 will make the content absorb any free space in the chosen direction

function App({username, email, classes}) {

  return (
    <div className={classes.pageContainer}>
    <div className={classes.contentWrap}>
    <Router>
    <AppBar position="static" classes={{root:classes.appBarSeparator}}>
        <Toolbar>
          <Button color='inherit' component={Link} to='/'>
              <Typography variant='h3'> UFRGS </Typography>
          </Button>
        </Toolbar>  
      </AppBar>
      <Grid container spacing={1} xs={12} justify="space-around" classes={{root:classes.gridContainer}}>
        <Grid item sm={2} xs={12} >
          <SideBar />
        </Grid>
        <Grid item sm={10} xs={12} classes={{root:classes.itemContainer}}>
          
              <RouterSwitch>
                <Route exact path='/' component={home} />
                <Route exact path='/matricula/possibilidade' component={possibilidade} />
              </RouterSwitch>
            
        </Grid>
      </Grid>
    </Router>
    </div>
      <div >
        <AppBar position="static" color="secondary">
          
            <Toolbar variant="dense" classes={{root:classes.footer}}>
              <Typography variant="caption" color="inherit" classes={{root:classes.footerText}}>
                eduardo.paim@inf.ufrgs.br
              </Typography>
            </Toolbar>
          
        </AppBar>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

// if we put a function call here we HAVE to use CreateSelector, otherwise we will
// recall it every time an action is dispatched even if no argument has changed
const mapStateToProps = state => ({
  username: state.user.username,
  email: state.user.email
})

export default connect(mapStateToProps)(withStyles(styles)(App));
