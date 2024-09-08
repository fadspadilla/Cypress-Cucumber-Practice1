import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import SaucedemoLoginPage from "../../pages/saucedemo-login.page";

Given("I am in the saucedemo login page", () => {
    cy.visit("https://www.saucedemo.com/v1/");
});

When("I enter the valid username and password", () => {
    cy.wait(100);
    cy.xpath("/html/body/div[2]/div[1]/img").should('be.visible');
    cy.fixture("saucedemo-login.fixture.json").then((loginData) => {
        SaucedemoLoginPage.getEmail().type(loginData.valid_username);
        SaucedemoLoginPage.getPassword().type(loginData.valid_password);
    })
    // SaucedemoLoginPage.getEmail().type("standard_user");
    // SaucedemoLoginPage.getPassword().type("secret_sauce");
});

And("click the login button", () => {
    SaucedemoLoginPage.loginBtn().click();
});

Then("I should be redirected to the saucedemo dashboard page", () => {
    cy.contains("Products").should('exist');
});

And("logout the app", () => {
    cy.wait(500);
    SaucedemoLoginPage.expandBtn().click();
    SaucedemoLoginPage.logoutBtn().click();
    cy.wait(100);
    cy.xpath("/html/body/div[2]/div[1]/img").should('be.visible');
});