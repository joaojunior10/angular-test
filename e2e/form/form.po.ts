import { browser, element, by } from 'protractor';

export class FormPage {
  navigateTo() {
    return browser.get('/form');
  }

  save() {
    return element(by.buttonText('Save')).submit();
  }
}
