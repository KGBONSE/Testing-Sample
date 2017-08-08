package pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.xml.ws.WebEndpoint;

public class SelectionAProductPage {
    public SelectionAProductPage(WebDriver driver){
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver,30);
        wait.until(ExpectedConditions.elementToBeClickable(selectAProduct));
    }
    WebDriver driver;

    @FindBy( css= ".level1.active")
    public WebElement selectAProduct;

}
