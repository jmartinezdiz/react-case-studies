///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Routes from '../routes';

///////////////////////////////////////////////////////////////
// STYLES
///////////////////////////////////////////////////////////////
import MenuStyle from '../assets/styles/layout/menu';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class CustomMenu extends React.Component {

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(props, context) {
    super(props, context);
    this.state = { opened: false };
  }

  ///////////////////////////////////////////////////////////////
  // EVENTS
  ///////////////////////////////////////////////////////////////
  onClickIconButton(e) {
    e.preventDefault();
    this.setState({ opened: !this.state.opened });
  }

  onClickClose(e) {
    e.preventDefault();
    this.setState({ opened: false });
  }

  onClickRoute(e, route) {
    e.preventDefault();
    window.location.href = route.path;
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderItem(route, index) {
    return (
      <MenuItem
        key={index}
        onClick={(e) => this.onClickRoute(e, route)}
      >
        {route.text}
      </MenuItem>
    );
  }

  render() {
    return (
      <IconButton
        ref={(e) => this.menuIcon = e}
        className={this.props.classes.button}
        onClick={(e) => this.onClickIconButton(e)}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon  />
        <Menu
          anchorEl={this.menuIcon}
          open={this.state.opened}
          onClose={(e) => this.onClickClose(e)}
          keepMounted
        >
          {Routes.map((r, i) => this.renderItem(r,i))}
        </Menu>
      </IconButton>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default withStyles(MenuStyle)(CustomMenu);
