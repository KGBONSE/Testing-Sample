package dk.danskespil.psp.stepDef;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import dk.danskespil.psp.pageObjects.ResourceLoader;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.file.NoSuchFileException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class StartUpPage {

    public static RemoteWebDriver driver;

    public static final String USERNAME = "danskespil2";
    public static final String AUTOMATE_KEY = "RiuiwqAeV8qV64yVZD2x";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
    public static final String LOCAL_BASE_URL = "http://www.google.com";
    public static final String TEST_BASE_URL =  "https://ww.google.com";
    public static final String STAGING_BASE_URL = "https://town32.danskespil.dk/vinder";
    private ResourceLoader rl;
    private final String propertyFilePath= "application.properties";
    String user_ssn = "userid=1211990003";

    @Before
    public void prepare() throws MalformedURLException {
        rl = new ResourceLoader(propertyFilePath);
        InputStream is;
        String resourceFileContent;
        try {
            is = rl.getResource();
            BufferedReader reader = new BufferedReader(new InputStreamReader(is));
            resourceFileContent = reader.lines().collect(Collectors.joining("\n"));
            Properties props = new Properties();

            if (resourceFileContent.contains("test")) {
                RunLonAllEnvironments(TEST_BASE_URL);
            }

            else if(resourceFileContent.contains("staging")) {
                RunLonAllEnvironments(STAGING_BASE_URL);

            }

            else if(resourceFileContent.contains("local")) {
                RunLonAllEnvironments(LOCAL_BASE_URL);

            }
            else {
                RunInBrowserStack(TEST_BASE_URL);
            }
        } catch (NoSuchFileException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    public void RunLonAllEnvironments(String baseUrl) throws MalformedURLException {

            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.addArguments("disable-infobars");
            DesiredCapabilities capabilities = new DesiredCapabilities();
            capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
            capabilities.setCapability("browser", "chrome");
            capabilities.setCapability("browser_version", "67.0");
//            WebDriver driver = new ChromeDriver();
            capabilities.setCapability("os", "Windows");
            capabilities.setCapability("os_version", "10");
            capabilities.setCapability("resolution", "1024x768");
            driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), capabilities);
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().pageLoadTimeout(90, TimeUnit.SECONDS);
            driver.manage().window().maximize();
            driver.get(baseUrl+user_ssn);
        }


    public void RunInBrowserStack(String baseUrl) throws MalformedURLException {
        ChromeOptions chromeOptions = new ChromeOptions();
        chromeOptions.addArguments("disable-infobars");
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
        capabilities.setCapability("browser", "chrome");
        capabilities.setCapability("browser_version", "62.0");
        capabilities.setCapability("os", "Windows");
        capabilities.setCapability("os_version", "10");
        capabilities.setCapability("resolution", "1024x768");
        capabilities.setCapability("browserstack.local", "true");
        capabilities.setCapability("project", "EBU-PSP");
        capabilities.setCapability("build", "Local");
        driver = new RemoteWebDriver(new URL(URL), capabilities);
        driver.get(baseUrl);
    }

    @After
    public void cleanUp() {
        driver.close();
    }
}

