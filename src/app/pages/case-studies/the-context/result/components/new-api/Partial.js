///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import Button from '@material-ui/core/Button';

import Context from './context';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class Partial extends React.Component {

  ///////////////////////////////////////////////////////////////
  // EVENTS
  ///////////////////////////////////////////////////////////////
  onClickButton(e) {
    e.preventDefault();
    if (this.context.user) {
      this.context.logout();
    } else {
      this.context.login();
    }
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <Button variant="outlined" color="primary" onClick={(e) => this.onClickButton(e)}>
        {this.context.user ? "Logout" : "Login"}
      </Button>
    );
  }

}

Partial.contextType = Context;

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default Partial;
