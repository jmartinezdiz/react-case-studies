///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import Grid from '@material-ui/core/Grid';

import SimpleFileList from './components/SimpleFileList';
import AvatarFileList from './components/AvatarFileList';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class CaseStudyResult extends React.Component {

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  getData() {
    return [
      { fileName: "a.png", fileType: "image" },
      { fileName: "b.txt", fileType: "text" },
    ];
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <SimpleFileList data={this.getData()} />
        </Grid>
        <Grid item xs={6} sm={6}>
          <AvatarFileList data={this.getData()} />
        </Grid>
      </Grid>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default CaseStudyResult;
