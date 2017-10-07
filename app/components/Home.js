// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FileTree from './FileTree/FileTree';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    const files = [
      { name: 'MyFolder', editDate: 'Edited 1 Jan 2017', type: 'folder' },
      { name: 'MyFile', editDate: 'Edited 1 Jan 2017', type: 'file' }
    ];
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <FileTree files={files} openFile={(file) => console.log("Open " + file.name)} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
