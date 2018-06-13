import { by, element, browser, protractor } from 'protractor';
import { FormPage } from './form.po';

describe('angular-test Form', () => {
  let page: FormPage;

  beforeEach(() => {
    page = new FormPage();
  });

  it('should complete the form and save', () => {
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
      browser.pause();
      browser.wait(
        expectedCondititons.urlContains(browser.baseUrl + '/list'),
        5000
      );
      expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/list');
    });
  });
});
