import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../../src/screens/Home';

describe('Test for HomeScreen component', () => {
  const wrapper = shallow(<HomeScreen />);
  test('should test for login ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
describe('Test for proper rendering of home screen', () => {
  it('should call onPress', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(
      wrapper
        .find('ScrollViewMock')
        .find('DetailsList')
        .exists()
    ).toBe(true);
  });
});
