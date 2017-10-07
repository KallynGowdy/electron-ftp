import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { FormTest } from '../helpers/form';
import { ConnectionPanel } from '../../app/components/ConnectionPanel/ConnectionPanel';

describe('ConnectionPanel component', () => {
  let test = null;
  let subject = null;
  let connectToServer = null;

  beforeEach(() => {
    connectToServer = spy();
    test = new FormTest(ConnectionPanel, {
      password: '',
      username: '',
      server: ''
    }, {
        connectToServer
      });
  });

  it('calls connectToServer on form submit', () => {
    subject = test.buildSubject();
    subject.find('form').simulate('submit');
    expect(connectToServer.callCount).toBe(1);
  });
});
