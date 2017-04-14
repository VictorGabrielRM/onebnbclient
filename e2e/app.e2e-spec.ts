import { OnebnbclientPage } from './app.po';

describe('onebnbclient App', () => {
  let page: OnebnbclientPage;

  beforeEach(() => {
    page = new OnebnbclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
