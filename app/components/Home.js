// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import FileTreeContainer from '../containers/FileTreeContainer';
import ConnectionPanel from '../containers/ConnectionPanelContainer';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ConnectionPanel />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <FileTreeContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}
