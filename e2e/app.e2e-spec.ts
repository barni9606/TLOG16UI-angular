import { TLOG16UIPage } from './app.po';

describe('tlog16-ui App', () => {
  let page: TLOG16UIPage;

  beforeEach(() => {
    page = new TLOG16UIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
