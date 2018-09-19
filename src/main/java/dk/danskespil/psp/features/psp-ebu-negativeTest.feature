#
#Feature: EBU validating claim and payout with cpr number
#  As a customer
#  I want to be able to navigate to the Nemid page
#  So that I can login with NemiID and proceed to complete my claim and payout validation
#
##  EBUP-10-Landing Page, EBUP-5-validate prize, EBUP-12-Claim cash prize
#  @cucumberTest
#  Scenario Outline: User with CPR login to validate and claim cash out prize
#    Given I choose to login to the site
# #		Then I see a browser title containing "<Page Title>"
#    When  I login with my NemiID "<Bruger-id>" and "<Adgangskode>"
# #		Then I see a browser title containing "<Nemid Page Title>"
# #		When I enter valid coupon number "<coupon number>" and click to continue to validate the price
# #		Then I should see the claim amount "<claim amount>"
# #		When I decide to claim the prize
# #		Then I should see the message "<Message Title>"
#    Examples:
#      | Bruger-id | Adgangskode | Page Title | Nemid Page Title | claim amount | Message Title                 |
#      | 0802423089  | 9178        | NemID                        | NemID            | 200 kr                        | You have successfully claimed |
#


#Feature: EBU validating claim and payout negative test
#
#  @cucumberTest
# Scenario Outline: Entering a wrong NemiID and trying to proceed to the Cpr info page
#    Given I choose to login to the site
#    Then  I should see the page name "<Page Name>"
#    When  I enter a wrong "<Bruger-id>" and "<Adgangskode>" and click continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    When  I enter a "<Bruger-id>" and a wrong "<Adgangskode>" and click continue
#
#    Then  I should see an error message displayed "<errorMessage>"
#    When  I click continue without entering any login details
#    Then  I should see an error message displayed "<errorMessage>"
#    When  I enter a very long NemiID "<Bruger-id>" and "<Adgangskode>" and click continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    Examples:
#      | Bruger-id                      | Adgangskode         | errorMessage                      | Page Name  |
#      | wrong Bruger-id                | correct Adgangskode | Your Bruger-id  entered is wrong  | NemiIDPage |
#      | correct Bruger-id              | wrong Adgangskode   | Your Adgangskode entered is wrong | NemiIDPage |
#      |                                |                     | Please enter a valid NemiID       | NemiIDPage |
#      | 445555555555555555555555555555 | correct Adgangskode | Please enter a valid NemiID       | NemiIDPage |
#      | correct Bruger-id              | short Adgangskode   | Your Adgangskode entered is wrong | NemiIDPage |
#

##coupon-claim validation page Negative test
# Scenario Outline: coupon-claim validation page Negative test
#  Given I choose to login to the site
#  Then I see a browser title containing "<Page Title>"
##   When  I login with my NemiID "<Bruger-id>" and "<Adgangskode>"
#	When I enter a wrong number of digits(invalid claim error) "<Coupon number>" and click to continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    When I enter a coupon that has been claimed already "<Coupon number>" and i click continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    When I enter a coupon that is over the payout limit "<Coupon number>" and click continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    When I enter a coupon(scratch error coupon) "<Coupon number>" and i click continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    When I enter a coupon(contactUsError)"<Coupon number>" and i click continue
#    Then  I should see an error message displayed "<errorMessage>"
#
#    When I enter a coupon with a 99 error code(scratch error message) "<Coupon number>"
#    Then  I should see an error message displayed "<errorMessage>"
#
#    Examples:
#| Bruger-id | Adgangskode | errorMessage                                                                   |              | Coupon number                 |
#| 12345     | 54321       |                                                                                |              | 9123                          |
#|           |             | WrongAmountOfDigits": "Wrong amount of digits!                                 |              | 9124                          |
#|           |             | PrizeAlreadyPaidError": "Prize already paid - error message goes here.         |              | 9125                          |
#|           |             | PrizeAboveMaxError": "Prize above the maximum limit - error message goes here. |              | 9126                          |
#|           |             | scratch  error message                                                         |              | 9127                          |
#|           |             | ContactUsError": "Contact us - error message goes here."                       |              | 9128                          |
