class SaucedemoLoginPage {
    getEmail() {
      return cy.xpath("//input[@id='user-name']");
    }
  
    getPassword() {
      return cy.xpath("//input[@id='password']");
    }
  
    loginBtn() {
      return cy.xpath("//input[@id='login-button']");
    }

    expandBtn() {
      return cy.xpath("//*[@id='menu_button_container']/div/div[3]/div/button")
    }

    logoutBtn() {
      return cy.xpath("//a[@id='logout_sidebar_link']")
    }
  }
  
  module.exports = new SaucedemoLoginPage();