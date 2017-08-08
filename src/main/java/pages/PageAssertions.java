package pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PageAssertions {
   public PageAssertions(WebDriver driver){
       this.driver = driver;
       PageFactory.initElements(driver, this);
       WebDriverWait wait = new WebDriverWait(driver, 30);
       wait.until(ExpectedConditions.elementToBeClickable(pageAssertions));
   }
    WebDriver driver;
    @FindBy(xpath = "")
    public WebElement pageAssertions;
}
