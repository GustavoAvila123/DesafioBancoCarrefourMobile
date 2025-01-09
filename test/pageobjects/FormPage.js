class FormPage {
    get nameField() { return $('~name'); }
    get emailField() { return $('~email'); }
    get submitButton() { return $('~submit'); }
    get successMessage() { return $('~success-message'); }
  
    async fillForm(name, email) {
      await this.nameField.setValue(name);
      await this.emailField.setValue(email);
      await this.submitButton.click();
    }
  
    async getSuccessMessage() {
      return await this.successMessage.getText();
    }
  }
  
  module.exports = new FormPage();  