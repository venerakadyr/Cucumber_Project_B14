
Feature: Smartbear login feature verifications
  Agile Story: When user is on the login page of SmartBear app user should
  be able to login using correct test data
  A/C:

  1- Only authenticated user should be able to login
  Link: http://secure.smartbearsoftware.com/samples/testcomplete12/WebOrders/login.aspx
  Authenticated test data:
  Username: Test
  Password: tester
  2- User should see "Welcome, Tester!" displayed when logged in.

#  Scenario: Verification of login functionality as a authenticated user
#
#    When User is  on Login page
#    And User enter the username
#    And User enter the password
#    Then User click on login button
#
#
#    Scenario: Verify if welcome message is displayed
#
#      When User is on  home page
#      Then User sees the welcome message is displayed
@positiveLogin
  Scenario: As a user I should be able to login using authenticated test data
    When User is on SmartBear login page
    And User enters correct username
    And User enters correct password
    And User clicks to login button
    Then User should be logged in and be able to verify Welcome text is displayed


  Scenario: When user enters correct username and incorrect password user should see error message
    When User is on SmartBear login page
    And User enters correct username
    And User enters incorrect password
    And User clicks to login button
    Then User should see the error message displayed on the page