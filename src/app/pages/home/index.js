///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

import Routes from '../../routes';

///////////////////////////////////////////////////////////////
// STYLES
///////////////////////////////////////////////////////////////
import HomeStyle from '../../assets/styles/pages/home';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class Home extends React.Component {

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(props, context) {
    super(props, context);
    this.routes = Routes.filter(function(x) {
      return !x.default;
    });
  }

  ///////////////////////////////////////////////////////////////
  // EVENTS
  ///////////////////////////////////////////////////////////////
  onClickListItem(e, route) {
    e.preventDefault();
    window.location.href = route.path;
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderListItem(route, index) {
    return (
      <ListItem
        key={index}
        onClick={(e) => this.onClickListItem(e, route)}
        button
      >
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={route.text} />
      </ListItem>
    );
  }

  render() {
    return (
      <Paper className={this.props.classes.paper} elevation={3}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={this.props.classes.root}
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Case studies
            </ListSubheader>
          }
        >
          {this.routes.map((r, i) => this.renderListItem(r,i))}
        </List>
      </Paper>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default withStyles(HomeStyle)(Home);
