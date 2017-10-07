import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

export class FormTest {
  submitting: boolean = false;
  touched: boolean = false;
  error: any = null;
  reset: any = spy();
  handleSubmit: any;
  defaultValues: any;
  defaultProps: any;
  component: Component;

  constructor(component: Component, defaultValues: any = {}, defaultProps: any = {}) {
    this.component = component;
    this.defaultValues = defaultValues;
    this.defaultProps = defaultProps;
  }

  buildSubmit(values: any) {
    return (fn) => fn(values);
  }

  buildProps(values: any = {}, props: any = {}) {
    values = Object.assign({}, this.defaultValues, values);

    let fields = {};
    for (let key in values) {
      fields[key] = {
        value: values[key],
        touched: this.touched,
        error: this.error
      };
    }

    return Object.assign({}, this.defaultProps, {
      submitting: this.submitting,
      fields,
      handleSubmit: this.buildSubmit(values),
      reset: this.reset,
      classes: {}
    }, props);
  }

  buildSubject(values: any = {}, props: any = {}) {
    const finalProps = this.buildProps(values, props);
    const component = this.component;
    return shallow(React.createElement(component, finalProps));
  };
}
