// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from 'material-ui/List';
import FileItem from '../FileItem/FileItem';
import styles from './FileTree.css';

export default class Home extends Component {
  props: {
    openFile: (file: Object) => void,
    files: Array
  };

  render() {
    const { files, openFile } = this.props;
    return (
      <div>
        <List>
          {files.map((f) =>
            <FileItem file={f} open={openFile} />
          )}
        </List>
      </div>
    );
  }
}
