import React from 'react';
import { shallow } from 'enzyme';
import WebViewScreen from '../../src/screens/WebView';

describe('Test for webview screen', () => {
  it('should render correctly', () => {
    const props = {
      navigation: {
        navigate: jest.fn(),
        state: {
          params: {
            repoLink: ''
          }
        }
      }
    };
    const wrapper = shallow(<WebViewScreen {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
