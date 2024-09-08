Feature: Login using Saucedemo website

Background:
    Given I am in the saucedemo login page

Scenario: Valid username and password
    When I enter the valid username and password
    And click the login button
    Then I should be redirected to the saucedemo dashboard page
    And logout the app