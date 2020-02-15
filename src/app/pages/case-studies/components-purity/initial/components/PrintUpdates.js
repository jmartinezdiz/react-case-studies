///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class PrintUpdates extends React.Component {

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(props, context) {
    super(props, context);
    this.number = 0;
  }

  ///////////////////////////////////////////////////////////////
  // CALLBACKS
  ///////////////////////////////////////////////////////////////
  componentWillUpdate() {
    this.number = this.number + 1;
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <span>Children updates: <b>{this.number}</b></span>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default PrintUpdates;
