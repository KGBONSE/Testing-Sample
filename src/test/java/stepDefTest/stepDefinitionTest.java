package stepDefTest;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import pages.PageAssertions;
import pages.SelectionAProductPage;

import java.util.concurrent.TimeUnit;

public class stepDefinitionTest {
    public stepDefinitionTest(){
        super();
    }
    WebDriver driver;
    private PageAssertions assertions;
    private SelectionAProductPage selectionAProductPage;
    String baseURL = "http://www.firsttunnels.co.uk/";


    @Before
    public void prepare(){
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
    }

 @After
    public void tearDown(){
     driver.close();
 }

    @Given("^I am on the home page$")
    public void i_am_on_the_home_page() throws Throwable {
     driver.get(baseURL);
    }

    @When("^I select domestic polytunnels \"([^\"]*)\"$")
    public void i_select_domestic_polytunnels(String arg1) throws Throwable {

    }

    @Then("^I should be taken to the next page and verify the page title \"([^\"]*)\"$")
    public void i_should_be_taken_to_the_next_page_and_verify_the_page_title(String arg1) throws Throwable {

    }

}
