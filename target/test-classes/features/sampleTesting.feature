
  Feature: sample testing
    As a user
    I want to be able to test different website
    So as to be confident of the deployable application

@test
    Scenario Outline: Testing samples
      Given I am on the home page
      When I select domestic polytunnels "<selectLink>"
      Then I should be taken to the next page and verify the page title "<pageTitle>"

      Examples: sample
      |selectLink|pageTitle|
      |    Domestic Polytunnels      |   Polytunnels      |
