import getToken from '../../src/util/getToken';

describe('Test for Header component', () => {
  let value;
  beforeEach(() => {
    value = getToken();
  });
  test('getToken should be truthy ', () => {
    expect(value).toBeTruthy();
    expect(typeof getToken().then(res => res)).toBe('object');
  });
});
