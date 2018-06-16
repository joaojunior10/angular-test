import { by, element, browser, protractor } from 'protractor';
import { UserPage } from './user-detail.po';

describe('angular-test User', () => {
  let page: UserPage;

  beforeEach(() => {
    page = new UserPage();
  });

  it('should create a user', () => {
    const expectedCondititons = protractor.ExpectedConditions;
    page.navigateTo();
    const name = element(by.formControlName('name'));
    name.sendKeys('João Francisco');
    const genders = element(by.formControlName('gender'));
    genders.click();
    const gender = element(by.cssContainingText('li > span', 'Male'));
    gender.click();
    const activated = element(by.formControlName('activated'));
    activated.click();
    page.save().then(() => {
      browser.wait(
        expectedCondititons.urlContains(browser.baseUrl + '/list'),
        5000
      );
      expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/list');
    });
  });
});
