package dk.danskespil.psp.pageObjects;

import org.openqa.selenium.*;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.*;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertTrue;

public class NemIDPage {                //constructor
    public NemIDPage(WebDriver driver) {
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
//        WebDriverWait wait = new WebDriverWait(driver, 60);
//        wait.until(ExpectedConditions.visibilityOf(loginLink));

    }

    private GetOTOPTokenPage getOTOPTokenPage;
    WebDriver driver;

    public void enterNemIDUsername(String username) throws InterruptedException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(90, TimeUnit.SECONDS); //implicit wait
        driver.get("https://town32.danskespil.dk/vinder#");

        driver.switchTo().defaultContent();
        WebDriverWait wait = new WebDriverWait(driver, 30); //explicit wait
        wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(By.className("ebu-nemid-iframe")));
        List<WebElement> inputElements = driver.findElements(By.cssSelector("input.input"));

//        System.out.println(inputElements.size());
//        inputElements.forEach(webElement -> {
//            if(webElement.isDisplayed()){
//                System.out.println("true");
//            }
//        });

        Optional<WebElement> result = inputElements.stream()
                .filter(s->s.isDisplayed() && s.getAttribute("name").isEmpty()).findFirst();
        result.get().sendKeys(username);


    }

    public void enterNemIDPassword(String password) throws InterruptedException {
        List<WebElement> inputElements = driver.findElements(By.cssSelector("input.input"));
        Optional<WebElement> result = inputElements
                .stream()
                .filter(s->s.isDisplayed() && s.getAttribute("name").contains("password"))
                .findFirst();
        result.get().sendKeys(password);

    }

    public String getTOTPCode(){
    getOTOPTokenPage = PageFactory.initElements(driver,GetOTOPTokenPage.class);
    String text = getOTOPTokenPage.getTotpToken();
    System.out.println(text);
    return text;

}

//    @FindBy(css = "input.input")
//    public WebElement setTOTPCode;
    public void enterTOTPCode(String text){
        List<WebElement> inputElements = driver.findElements(By.cssSelector("input#el3fd8edaa2f099230.otp-input"));
        Optional<WebElement> result = inputElements
                .stream()
                .filter(s->s.isDisplayed() && s.getAttribute("name").contains("password"))
                .findFirst();
        result.get().sendKeys(text);

   }

    @FindBy(css = "button.button.button--submit.spacer")
    public WebElement buttonElement;
    public void clickNextNæste() throws InterruptedException {
        buttonElement.click();

    }

    public void shouldVerifyPageHeader(String titleText) {
        WebDriverWait wait = new WebDriverWait(driver, 60);
        wait.until(ExpectedConditions.titleContains(driver.getTitle()));
        assertTrue("page title not found!" +titleText, driver.getTitle().toLowerCase().contains(titleText.toLowerCase()));
    }

}



