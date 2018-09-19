package dk.danskespil.psp.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class CouponPage {
    public CouponPage(WebDriver driver){
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
//        wait.until(ExpectedConditions.visibilityOf());

    }

    WebDriver driver;
    }

