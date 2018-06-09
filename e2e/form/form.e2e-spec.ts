import { by, element, browser, protractor } from 'protractor';
import { FormPage } from './form.po';

describe('angular-test Form', () => {
  let page: FormPage;

  beforeEach(() => {
    page = new FormPage();
  });

  it('should send a name', () => {
    const expectedCondititons = protractor.ExpectedConditions;
    page.navigateTo();
    const name = element(by.formControlName('name'));
    name.sendKeys('João Francisco');
    page.save().then(() => {
      browser.wait(
        expectedCondititons.urlContains(browser.baseUrl + '/list'),
        5000
      );
      expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/list');
    });
  });
});
