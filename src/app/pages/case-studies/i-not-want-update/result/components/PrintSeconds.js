///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class PrintSeconds extends React.Component {

  ///////////////////////////////////////////////////////////////
  // CALLBACKS
  ///////////////////////////////////////////////////////////////
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.seconds % 5 === 0;
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <span>{this.props.seconds}</span>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default PrintSeconds;
