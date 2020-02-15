///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

///////////////////////////////////////////////////////////////
// COMPONENTS
///////////////////////////////////////////////////////////////
class SimpleFileListItem extends React.Component {

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  getIcon() {
    switch (this.props.item.fileType) {
      case "image":
        return ImageIcon;
      case "text":
        return TextFieldsIcon;
      default:
        return InsertDriveFileIcon;
    }
  }

  ///////////////////////////////////////////////////////////////
  // RENDERS
  ///////////////////////////////////////////////////////////////
  renderIcon() {
    let Icon = this.getIcon();
    return (
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
    );
  }

  render() {
    return (
      <ListItem>
        {this.renderIcon()}
        <ListItemText
          primary={this.props.item.fileName}
        />
      </ListItem>
    );
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default SimpleFileListItem;
