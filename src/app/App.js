///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Menu from './layout/Menu';

import Routes from './routes';

///////////////////////////////////////////////////////////////
// STYLES
///////////////////////////////////////////////////////////////
import 'typeface-roboto';
import AppStyle from './assets/styles/layout/app';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class App extends React.Component {

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(props, context) {
    super(props, context);
    this.currentRoute = this.getCurrentRoute();
  }

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  getCurrentRoute() {
    let current = Routes.find(function(route) {
      return route.path === window.location.pathname;
    });
    current = current || Routes.find(function(route) { return route.default });
    return current;
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <Grid container>
        <AppBar position="static" className={this.props.classes.appBar}>
          <Toolbar>
            <Menu />
            <Typography variant="h5" className={this.props.classes.title}>
              {this.currentRoute.text}
            </Typography>
          </Toolbar>
        </AppBar>
        <this.currentRoute.page />
      </Grid>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default withStyles(AppStyle)(App);
