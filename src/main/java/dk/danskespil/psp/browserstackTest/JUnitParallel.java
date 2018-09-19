package dk.danskespil.psp.browserstackTest;

import org.apache.commons.io.FileUtils;
import org.junit.After;
import org.junit.runner.RunWith;
import org.openqa.selenium.*;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.LinkedList;

import static org.junit.Assert.assertTrue;

@RunWith(Parallelized.class)
public class JUnitParallel {

   public static final String BASE_URL = "http://www.google.com";
    private String platform;
    private String browserName;
    private String browserVersion;
   WebDriver driver;

    public JUnitParallel(String platform, String browserName, String browserVersion) {
        this.platform = platform;
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
//

    public static void main(String[] args) throws Exception {
        for (String[] e : JUnitParallel.getEnvironments()) {
            JUnitParallel jUnitParallel1 = new JUnitParallel(e[0], e[1], e[2]);
            jUnitParallel1.setUp();
            jUnitParallel1.browserStackTest();

        }

    }

    public static LinkedList<String[]> getEnvironments() throws Exception {
        LinkedList<String[]> env = new LinkedList<String[]>();
        env.add(new String[]{Platform.WINDOWS.toString(), "chrome", "27"});
        env.add(new String[]{Platform.WIN8.toString(),"firefox","20"});
        env.add(new String[]{Platform.WINDOWS.toString(),"ie","9"});
        env.add(new String[]{Platform.WINDOWS.toString(),"opera","12.14"});

        env.add(new String[]{Platform.WINDOWS.toString(),"ie","11"});
        env.add(new String[]{Platform.WINDOWS.toString(),"firefox","60 beta"});
        env.add(new String[]{Platform.WINDOWS.toString(), "edge", "15.0"});
        env.add(new String[]{Platform.MAC.toString(),"safari","10.0"});


//        iph
//        env.add(new  String[]{Platform.ANY.toString(), "iPhone 7", "10.3"});
//        env.add(new  String[]{Platform.ANY.toString(), "iPhone 6S", "9.1"});
//
//      //  ipad
//        env.add(new  String[]{Platform.MAC.toString(), "iPad Air 2", "9.1"});

        return env;
    }

    public void setUp() throws Exception {
        DesiredCapabilities capability = new DesiredCapabilities();
        capability.setCapability("platform", platform);
        capability.setCapability("browser", browserName);
        capability.setCapability("browserVersion", browserVersion);
        capability.setCapability("acceptSslCerts", "true");
        capability.setCapability("build", "EBU-Parallel-Test");
//        capability.setCapability("browserstack.selenium_version", "3.5.2");

        driver = new RemoteWebDriver(
                new URL("https://danskespil2:RiuiwqAeV8qV64yVZD2x@hub-cloud.browserstack.com/wd/hub"),
                capability
        );
        driver.get(BASE_URL);

    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }


    public void browserStackTest() throws Exception {
        String title = driver.getTitle();
        System.out.println("Page title is: " + title);
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys("BrowserStack");
        element.submit();
        driver = new Augmenter().augment(driver);
        File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(srcFile, new File("Screenshot.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
