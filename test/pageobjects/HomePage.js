class HomePage {
    get profileButton() { return $('~profile'); }
    get menuButton() { return $('~menu'); }
  
    async navigateToProfile() {
      await this.profileButton.click();
    }
  
    async openMenu() {
      await this.menuButton.click();
    }
  }
  
  module.exports = new HomePage();