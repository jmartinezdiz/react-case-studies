///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class AlertDialog extends React.Component {

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(props, context) {
    super(props, context);
    this.state = { opened: props.defaultOpened };
  }

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  open() {
    this.setState({ opened: true });
  }

  close() {
    this.setState({ opened: false });
  }

  ///////////////////////////////////////////////////////////////
  // EVENTS
  ///////////////////////////////////////////////////////////////
  onClickClose(e) {
    e.preventDefault();
    this.close();
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <Dialog
        open={this.state.opened}
        onClose={() => this.close()}
      >
        <DialogTitle>{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => this.onClickClose(e)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default AlertDialog;
