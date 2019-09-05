import getToken from '../../src/util/getToken';
import githuSession from '../../src/github/getGithubToken';

describe('getToken method', () => {
  let value;
  beforeEach(() => {
    value = getToken();
  });
  test('getToken should be truthy ', () => {
    expect(value).toBeTruthy();
    expect(typeof getToken().then(res => res)).toBe('object');
  });
});

describe('Test getGithubToken method', () => {
  test('getToken should be truthy ', async () => {
    const value = await githuSession();
    expect(value).toBeTruthy();
    expect(typeof value).toBe('object');
  });
});
