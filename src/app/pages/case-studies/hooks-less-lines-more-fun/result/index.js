///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Counter from './components/Counter';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
function CaseStudyResult() {
  // State
  const [working, setWorking] = useState(false);

  // Events
  const onClickButton = (e) => {
    e.preventDefault();
    setWorking((working) => !working);
  };

  // Renders
  const renderCounter = () => {
    if (working) {
      return (
        <Grid item xs={6} sm={6}>
          <Counter initValue={5} />
        </Grid>
      );
    }
  };

  // Main
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={6}>
        <Button variant="outlined" color="primary" onClick={onClickButton}>
          {working ? "Stop" : "Play"}
        </Button>
      </Grid>
      {renderCounter()}
    </Grid>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default CaseStudyResult;
