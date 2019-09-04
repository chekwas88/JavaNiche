import React from 'react';
import { shallow } from 'enzyme';
import Details from '../../src/components/Details';

describe('Test for details component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Details />);
    expect(wrapper.find('TouchableOpacity').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
