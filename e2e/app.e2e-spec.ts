import { ArduinoAutomationPage } from './app.po';

describe('arduino-automation App', () => {
  let page: ArduinoAutomationPage;

  beforeEach(() => {
    page = new ArduinoAutomationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
