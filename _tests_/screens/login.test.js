import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from '../../src/screens/Login';

describe('Test for Login screen', () => {
  const wrapper = shallow(<LoginScreen />);
  test('should test for login ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe('Test for login action', () => {
  it('should call onPress', () => {
    const wrapper = shallow(<LoginScreen />);
    const touchButton = wrapper
      .find('View')
      .find('View')
      .find('TouchableOpacity');
    const instance = wrapper.instance();
    instance.onPressHandler();
    const mockOnPress = (instance.onPressHandler = jest.fn());
    touchButton.simulate('onPress', mockOnPress());
    expect(mockOnPress).toHaveBeenCalled();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
