import React from 'react';
import TextField from 'material-ui/TextField';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
    <TextField
      hintText={label}
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );

export default renderTextField;
