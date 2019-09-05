import React from 'react';
import { shallow } from 'enzyme';
import RepoButton from '../../src/components/RepoButton';

describe('Test for RepoButton component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<RepoButton />);
    expect(
      wrapper
        .find('View')
        .find('TouchableOpacity')
        .exists()
    ).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
