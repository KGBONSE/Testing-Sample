
Feature: EBU validating claim and payout with cpr number
	As a customer
	I want to be able to navigate to the Nemid page
	So that I can login with NemiID and proceed to complete my claim and payout validation

#  EBUP-10-Landing Page, EBUP-5-validate prize, EBUP-12-Claim cash prize
	@cucumberTest
	Scenario Outline: User with CPR login to validate and claim cash out prize
		Given I choose to login to the site
#		Then I see a browser title containing "<Page Title>"
		When  I login with my NemiID "<Bruger-id>" and "<Adgangskode>"
#		Then I see a browser title containing "<Nemid Page Title>"
#		When I enter valid coupon number "<coupon number>" and click to continue to validate the price
#		Then I should see the claim amount "<claim amount>"
#		When I decide to claim the prize
#		Then I should see the message "<Message Title>"
		Examples:
			| Bruger-id | Adgangskode | Page Title | Nemid Page Title | claim amount | Message Title                 |
			| 1211990003  | 1234        | NemID                        | NemID            | 200 kr                        | You have successfully claimed |

## EBUP-13-Claim another prize0
#	Scenario Outline: User with CPR attached login to validate and claim another cash prize
#		Given I choose to login to the site
#		When  I login with my NemiID "<Bruger-id>" and "<Adgangskode>"
#		Then  I should see the page title "<Page Title>"
#		When I enter valid coupon number "<coupon number>" and click to continue to validate the price
#		Then I should see the claim amount "<claim amount>"
#		When I decide to claim the prize
#		Then I should see the message "<Message Title>"
#		When I decide to claim another prize
#		Then I see a browser title containing "<Page Title>"
#		Examples:
#			| Bruger-id | Adgangskode | Page Title | claim amount      | Message Title |
#			| 12345     | 54321       | coupons page   | 200 kr            |       You have successfully claimed        |
#
#<button class="button button--submit spacer" tabindex="51" title="Fortsæt til næste skærmbillede" type="button">Næste</button>
##    No CPR attached
#  EBUP-11-CPR info page
#  Scenario Outline: User with CPR not attached login to validate and claim prize
#	  Given I choose to login to the site
#	  When  I login with my NemiID "<Bruger-id>" and "<Adgangskode>"
#	  Then I see a browser title containing "<Cpr Page Title>"
#	  When I enter my cpr number and decide to continue
#	  Then I see a browser title containing "<Coupons Page Title>"
#	  Then I should see the claim amount "<claim amount>"
#	  When  I decide to proceed to the next page
#	  When I decide to claim the prize
#	  Then I should see the message "<Message Title>"
#
#     Examples:
#        | Bruger-id | Adgangskode | Cpr Page Title |Coupons Page Title |claim amount      | Message Title |
#        | 12345     | 54321       | CPR page       | coupons page      |200 kr            |       You have successfully claimed        |
#
