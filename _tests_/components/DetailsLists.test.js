import React from 'react';
import { render } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import DetailsLists, { GET_JAVA_DEVS } from '../../src/components/DetailsLists';

const mocks = [
  {
    request: {
      query: GET_JAVA_DEVS,
      variables: {
        query: 'location:lagos language:javascript'
      }
    },
    result: {
      data: {
        search: {
          edges: []
        }
      }
    }
  }
];
describe('Test for displaying details lists', () => {
  test('DetailLists component', () => {
    const wrapper = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DetailsLists />
      </MockedProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
