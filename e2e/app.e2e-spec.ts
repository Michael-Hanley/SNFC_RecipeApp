import { SNFCRecipeAppPage } from './app.po';

describe('snfc-recipe-app App', function() {
  let page: SNFCRecipeAppPage;

  beforeEach(() => {
    page = new SNFCRecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
