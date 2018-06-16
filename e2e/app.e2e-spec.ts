import { AppPage } from './app.po';
import { browser, protractor } from 'protractor';

describe('angular-test App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Tests');
  });

  it('navigate to "" redirects you to /admin/user/list', () => {
    const expectedCondititons = protractor.ExpectedConditions;
    page.navigateTo();
    browser.wait(
      expectedCondititons.urlContains(browser.baseUrl + '/admin/user/list'),
      1000
    );
    expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/admin/user/list');
  });
});
