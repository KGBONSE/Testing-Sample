#What is Cucumber
The gradle cucumber-java plugin provides the ability to run cucumber acceptance tests directly from a gradle build. The plugin utilizes the cucumber cli provided by the cucumber-jvm project, while imposing a few constraints to encourage adopters to use cucumber in a gradle friendly manner. Some of constraints include:

#Selenium PageFactory model is what has been used for the cucumber test

The PageFactory Class in Selenium is an extension to the Page Object design pattern. It is used to initialize the elements of the Page Object or instantiate the Page Objects itself. ... It is used to initialize elements of a Page class without having to use 'FindElement' or 'FindElements'.

A Cucumber test suite should be contained in a single source set.
Glue code should be compiled by gradle and use annotations to glue to the dk.danskespil.psp.pages.features.
Features should be in the resources folder of the source set representing the test suite

#Running cucumber test 

To successfully run a cucumber test, make sure you have your selenium server running;

##Note
Make sure you update the standalone.sh or the standalone.bat file with the right selenium server standalone  and chromedriver version you downloaded on you local pc.
Eg. "selenium-server-standalone-3.7.0.jar" in my case.

Navigate to the server eg. /payment-service-proxy-acceptancetest/seleniumServer or where ever you have the standalone.sh or standalone.bat file configured and saved


Then issue standalone.sh if linux or standalone.bat if on windows

#Running the test in sequence

$ gradle clean build runInSequence
 
#Running the test in parallel

$ gradle clean build runInParallel

# Note: 
The idea behind the parallel testing is mainly because, when you have lots of features you want to run because they run concurrently using threads, it saves lots of time 
compared to running in sequence.  

#Cucumber reports
The parallel testing generates a good report using -http://www.masterthought.net/section/cucumber-reporting

#To view the report:
Add a file://+output in your browser eg. file:///Users/ccproject/payment-service-proxy-acceptancetest/build/reports/cucumber/cucumber-html-reports/overview-dk.danskespil.psp.pages.features.html
Alternatively just navigate to the report file and open with a browser of your choice.

#Prerequisites for running test on browserstack

Before you can start running your Selenium tests with Java:

Download the Selenium Java bindings from the Selenium website (https://www.seleniumhq.org/download/)
Extract the ZIP file you downloaded from the URL above, and add the Selenium Java bindings (a JAR file) and all the dependent libraries (JAR files in the /libs folder) to your classpath.

#Download and run the BrowserStackLocal binary


Download the appropriate binary:
OS X 
Linux 32-bit 
Linux 64-bit (Recommended for your system)
Windows 
Please reference from the link below:
https://www.browserstack.com/automate/java
## starting the browerstack server locally
Navigate to your downladed binary you downloaded as per above and run the command
./BrowserStackLocal RiuiwqAeV8qV64yVZD2x or BrowserStackLocal.exe --key RiuiwqAeV8qV64yVZD2x for windows


# capabilities generator link

https://www.browserstack.com/automate/capabilities

#running your test
gradlew runBrowserStackTest currently runs browserstack test
## Notes
You can view test results on [BrowserStack Automate dashboard](https://www.browserstack.com/automate)

## Browserstack Local
This allows you to test locally and manually by directly adding the url on a device, browser etc. and testing from there.
Follow this link: https://www.browserstack.com/question/507
