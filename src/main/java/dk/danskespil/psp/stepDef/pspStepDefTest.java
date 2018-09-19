package dk.danskespil.psp.stepDef;

import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import cucumber.runtime.model.CucumberScenario;
import dk.danskespil.psp.pageObjects.*;


import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.PageFactory;

import static org.junit.Assert.assertTrue;


public class pspStepDefTest {


    RemoteWebDriver driver = StartUpPage.driver;

    private NemIDPage nemIDPage; //declare
    private CprInfoPage cprInfoPage;


    @Given("^I choose to login to the site$")
    public void I_choose_to_login_to_the_site() throws Throwable {
        driver.navigate();
    }

    @When("^I login with my NemiID \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iEnterMyAndAndClickContinue(String username, String password) throws Throwable {
        nemIDPage = PageFactory.initElements(driver, NemIDPage.class);// initialising
        String text = nemIDPage.getTOTPCode();
        nemIDPage.enterNemIDUsername(username);
        nemIDPage.enterNemIDPassword(password);
        nemIDPage.clickNextNæste();
//        nemIDPage.enterTOTPCode(text);

    }

    @Then("^I see a browser title containing \"([^\"]*)\"$")
    public void i_see_a_browser_title_containing(String text) throws Throwable {
        nemIDPage.shouldVerifyPageHeader(text);
    }

    @When("^I claim the coupon \"([^\"]*)\"$")
    public void I_claim_the_coupon_number() throws Throwable {

    }

    @Then("^The claim should be successful \"([^\"]*)\"$")
    public void The_claim_should_be_successful() throws Throwable {
    }
}
    //    @Then("^I see a browser title containing \"([^\"]*)\"$")
//    public void i_see_a_browser_title_containing(String text) throws Throwable {
//        nemIDPage = PageFactory.initElements(driver, NemIDPage.class);
//        nemIDPage.shouldVerifyPageHeader(text);
//    }
//

//
//	@When("^I enter valid coupon number \"([^\"]*)\" and click to continue$")
//		public void i_enter_a__valid_coupon_number() throws Throwable {
//
//	}
//
//	@When("^I enter a wrong NemiID \"(.*?)\" and click continue$")
//	public void i_enter_a_wrong_NemiID_and_click_continue(String arg1) throws Throwable {
//
//	}

/*
    @When("^I decide to proceed to the next page$")
        public void I_decide_to_proceed_to_the_next_page()throws Throwable{
        }

        @And("^I decide to claim the prize$")
        public void I_decide_to_claim_the_prize()throws Throwable{

        }

        @Then("^I should see the message \"([^\"]*)\"$")
        public void I_should_see_the_message()throws Throwable{

        }

*/



//	@Then("^I should see an error message displayed \"(.*?)\"$")
//	public void i_should_see_an_error_message_displayed(String arg1) throws Throwable {
//
//
//	}
//
//	@When("^I click continue without entering a NemiID <\"(.*?)\"$")
//	public void i_click_continue_without_entering_a_NemiID(String arg1) throws Throwable {
//
//	}
//
//	@When("^I enter a very long NemiID \"(.*?)\" and click continue$")
//	public void i_enter_a_very_long_NemiID_and_click_continue(String arg1) throws Throwable {
//
//	}
//
//	@When("^I enter my \"([^\"]*)\" and click continue$")
//	public void iEnterMyAndClickContinue(String arg0) throws Throwable {
//
//	}
//
//	@When("^I enter a wrong \"([^\"]*)\" and \"([^\"]*)\" and click continue$")
//	public void iEnterAWrongAndAndClickContinue(String arg0, String arg1) throws Throwable {
//
//	}
//
//	@When("^I enter a \"([^\"]*)\" and a wrong \"([^\"]*)\" and click continue$")
//	public void iEnterAAndAWrongAndClickContinue(String arg0, String arg1) throws Throwable {
//
//	}

//	@When("^I click continue without entering any login details$")
//	public void iClickContinueWithoutEnteringAnyLoginDetails() throws Throwable {
//
//	}
