import React from 'react';
import { shallow } from 'enzyme';
import ProfileUpper from '../../src/components/ProfileUpper';

describe('Test for profileUpper component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ProfileUpper />);
    expect(
      wrapper
        .find('View')
        .find('Image')
        .exists()
    ).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
