import React from 'react';
import { shallow } from 'enzyme';
import AuthScreen from '../../src/screens/AuthLoading';

describe('Test for Login component', () => {
  const wrapper = shallow(<AuthScreen />);
  test('should render header correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
