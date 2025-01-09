class LoginPage {
    get usernameField() { return $('~username'); }
    get passwordField() { return $('~password'); }
    get loginButton() { return $('~login'); }
    get errorMessage() { return $('~error-message'); }
  
    async login(username, password) {
      await this.usernameField.setValue(username);
      await this.passwordField.setValue(password);
      await this.loginButton.click();
    }
  
    async getErrorMessage() {
      return await this.errorMessage.getText();
    }
  }
  
  module.exports = new LoginPage();