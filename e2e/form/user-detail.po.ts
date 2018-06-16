import { browser, element, by } from 'protractor';

export class UserPage {
  navigateTo() {
    return browser.get('/admin/user/detail');
  }

  save() {
    return element(by.buttonText('Save')).submit();
  }
}
