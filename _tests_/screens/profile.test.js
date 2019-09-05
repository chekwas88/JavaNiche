import React from 'react';
import { shallow } from 'enzyme';
import ProfileScreen from '../../src/screens/Profile';

describe('Test for RepoButton component', () => {
  it('should render correctly', () => {
    const props = {
      navigation: {
        navigate: jest.fn(),
        state: {
          params: {
            email: '',
            fullName: '',
            userName: '',
            avatarUrl: '',
            repos: '',
            starredRepos: '',
            reposUrl: ''
          }
        }
      }
    };
    const wrapper = shallow(<ProfileScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
