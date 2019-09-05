import React from 'react';
import { shallow } from 'enzyme';
import RepoDetails from '../../src/components/RepoDetails';

describe('Test for RepoDetails component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<RepoDetails />);
    expect(
      wrapper
        .find('View')
        .find('View')
        .find('Text')
        .exists()
    ).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
