package dk.danskespil.psp.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class GetOTOPTokenPage {
    WebDriver driver;

    public GetOTOPTokenPage(WebDriver driver) {
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 30);
//        wait.until(ExpectedConditions.titleContains("DanID Development Tools"));
    }

   @FindBy(css = "#current_totp_active")
   public WebElement totpToken;
    public String getTotpToken() {
        WebElement name = totpToken;
        return name.getText();

    }
}
