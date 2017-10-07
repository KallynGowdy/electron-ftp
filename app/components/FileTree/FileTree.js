// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List, { ListSubheader } from 'material-ui/List';
import FileItem from '../FileItem/FileItem';
import styles from './FileTree.css';

export default class FileTree extends Component {
  props: {
    openFile: (file: Object) => void,
    files: Array
  };

  render() {
    const { files, openFile } = this.props;
    return (
      <div>
        <List subheader={<ListSubheader>Files</ListSubheader>}>
          {files.map((f) =>
            <FileItem key={f.name} file={f} open={openFile} />
          )}
        </List>
      </div>
    );
  }
}
