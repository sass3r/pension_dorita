import { Template2Page } from './app.po';

describe('template2 App', () => {
  let page: Template2Page;

  beforeEach(() => {
    page = new Template2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
