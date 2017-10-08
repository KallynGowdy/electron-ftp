// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import TextField from '../material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import styles from './ConnectionPanel.styles';
import { v, serverAddress, truthy } from '../../validations';

const serverValidation = v(truthy('Server'), serverAddress);
const usernameValidation = v(truthy('Username'));
const passwordValidation = v(truthy('Password'));

export class ConnectionPanel extends Component {

  submit(values) {
    this.props.connectToServer(values.server, values.username, values.password);
  }

  render() {
    const {
      classes,
      handleSubmit, pristine, reset, submitting,
      connectToServer
    } = this.props;
    return (
      <form onSubmit={handleSubmit((values) => this.submit(values))}>
        <Field
          name="server"
          component={TextField}
          label="Server"
          validate={serverValidation}
          className={classes.textField} />
        <Field
          name="username"
          component={TextField}
          label="Username"
          validate={usernameValidation}
          className={classes.textField} />
        <Field
          name="password"
          component={TextField}
          label="Password"
          type="password"
          validate={passwordValidation}
          className={classes.textField} />
        <Button type="submit" disabled={pristine || submitting}>
          Connect!
        </Button>
      </form>
    );
  }
}

const StyledConnectionPanel = withStyles(styles)(ConnectionPanel);

export default StyledConnectionPanel;
