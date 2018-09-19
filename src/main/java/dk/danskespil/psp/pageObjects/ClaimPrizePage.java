package dk.danskespil.psp.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ClaimPrizePage {
    public ClaimPrizePage (WebDriver driver){
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
        wait.until(ExpectedConditions.titleContains("text"));
    }
    WebDriver driver;
    @FindBy(xpath = "")
    public WebElement enterCoupon;
}
