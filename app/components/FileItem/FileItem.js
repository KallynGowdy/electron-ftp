// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import DescriptionIcon from 'material-ui-icons/Description';
import styles from './FileItem.css';

export default class FileItem extends Component {
  props: {
    open: (file: Object) => void,
    file: Object
  };

  render() {
    const { file, open } = this.props;
    return (
      <ListItem dense button onClick={() => open(file)} >
        <Avatar>
          {file.type === 'file' ? <DescriptionIcon /> : <FolderIcon />}
        </Avatar>
        <ListItemText primary={file.name} secondary={file.editDate} />
      </ListItem>
    );
  }
}
