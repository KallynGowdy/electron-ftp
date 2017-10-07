// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import FileTree from './FileTree/FileTree';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    const files = [
      { name: 'MyFolder', editDate: 'Edited 1 Jan 2017', type: 'folder' },
      { name: 'MyFile', editDate: 'Edited 1 Jan 2017', type: 'file' }
    ];
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <FileTree files={files} openFile={(file) => console.log("Open " + file.name)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <h2>World!</h2>
        </Grid>
      </Grid>
    );
  }
}
