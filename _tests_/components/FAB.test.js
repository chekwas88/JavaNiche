import React from 'react';
import { shallow } from 'enzyme';
import FAB from '../../src/components/FAB';

describe('Test for FAB component', () => {
  const wrapper = shallow(<FAB />);
  test('should test for login ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe('Test for share functionality', () => {
  it('should call onPress', () => {
    const wrapper = shallow(<FAB />);
    const shareButton = wrapper.find('withTheme(FAB)');
    const shareInstance = wrapper.instance();
    shareInstance.onShare();
    const mockOnPress = (shareInstance.onShare = jest.fn());
    shareButton.simulate('onPress', mockOnPress());
    expect(mockOnPress).toHaveBeenCalled();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
