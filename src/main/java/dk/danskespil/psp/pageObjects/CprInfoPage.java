package dk.danskespil.psp.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertTrue;

public class CprInfoPage {

    public CprInfoPage(WebDriver driver) {
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
//        wait.until(ExpectedConditions.titleContains("Cucumber"));
    }

    WebDriver driver;

    @FindBy(css = "#wrapper > div > div.container > header > nav > div > div.user-bar > div > ul > li > div > a.accountmenu__item.login-btn.js-login-trigger.desktop-only")
    public WebElement CprPage;
    public  void clickInstallationLink(){
        CprPage.click();
    }

    public void shouldVerifyPageHeader(String titleText) {
        assertTrue("CprInfo page title not found!", driver.getTitle().toLowerCase().contains(titleText.toLowerCase()));

    }




}
