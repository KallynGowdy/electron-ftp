// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';

export default class HomePage extends Component {
  render() {
    return (
      <Home />
    );
  }
}
