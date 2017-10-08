import React from 'react';
import TextField from 'material-ui/TextField';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      label={(touched && error) || label}
      error={!!(touched && error)}
      {...input}
      {...custom}
    />
  );

export default renderTextField;
