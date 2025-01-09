const LoginPage = require('../pages/LoginPage');

describe('Error Message Tests', () => {
  it('should show error when username is empty', async () => {
    await LoginPage.login('', 'validPassword');
    const errorMessage = await LoginPage.getErrorMessage();
    
    if (errorMessage !== 'Username cannot be empty') {
      console.error(`Expected: 'Username cannot be empty', but got: '${errorMessage}'`);
    }
    expect(errorMessage).toBe('Username cannot be empty');
  });

  it('should show error when password is empty', async () => {
    await LoginPage.login('validUsername', '');
    const errorMessage = await LoginPage.getErrorMessage();
    
    if (errorMessage !== 'Password cannot be empty') {
      console.error(`Expected: 'Password cannot be empty', but got: '${errorMessage}'`);
    }
    expect(errorMessage).toBe('Password cannot be empty');
  });
});
