///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class CaseStudy extends React.Component {

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderWrappedContent(header, content) {
    if (content) {
      return (
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" className={this.props.classes.header}>
            {header}
          </Typography>
          <Paper elevation={3} className={this.props.classes.paper}>
            <Grid container className={this.props.classes.paperContent}>
              {content}
            </Grid>
          </Paper>
        </Grid>
      );
    }
  }

  renderInitialContent() {
    // Nothing by defult
  }

  renderResultContent() {
    // Nothing by defult
  }

  render() {
    return (
      <Grid container spacing={3}>
        {this.renderWrappedContent("Initial", this.renderInitialContent())}
        {this.renderWrappedContent("Result", this.renderResultContent())}
      </Grid>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default CaseStudy;
