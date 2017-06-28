import { MafiaGameAppPage } from './app.po';

describe('mafia-game-app App', () => {
  let page: MafiaGameAppPage;

  beforeEach(() => {
    page = new MafiaGameAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
