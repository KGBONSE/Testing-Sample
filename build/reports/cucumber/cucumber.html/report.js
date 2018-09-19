$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("psp.feature");
formatter.feature({
  "line": 2,
  "name": "EBU validating claim and payout with cpr number",
  "description": "As a customer\nI want to be able to navigate to the Nemid page\nSo that I can login with NemiID and proceed to complete my claim and payout validation",
  "id": "ebu-validating-claim-and-payout-with-cpr-number",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#  EBUP-10-Landing Page, EBUP-5-validate prize, EBUP-12-Claim cash prize"
    }
  ],
  "line": 9,
  "name": "User with CPR login to validate and claim cash out prize",
  "description": "",
  "id": "ebu-validating-claim-and-payout-with-cpr-number;user-with-cpr-login-to-validate-and-claim-cash-out-prize",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@cucumberTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I choose to login to the site",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\t\tThen I see a browser title containing \"\u003cPage Title\u003e\""
    }
  ],
  "line": 12,
  "name": "I login with my NemiID \"\u003cBruger-id\u003e\" and \"\u003cAdgangskode\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "comments": [
    {
      "line": 13,
      "value": "#\t\tThen I see a browser title containing \"\u003cNemid Page Title\u003e\""
    },
    {
      "line": 14,
      "value": "#\t\tWhen I enter valid coupon number \"\u003ccoupon number\u003e\" and click to continue to validate the price"
    },
    {
      "line": 15,
      "value": "#\t\tThen I should see the claim amount \"\u003cclaim amount\u003e\""
    },
    {
      "line": 16,
      "value": "#\t\tWhen I decide to claim the prize"
    },
    {
      "line": 17,
      "value": "#\t\tThen I should see the message \"\u003cMessage Title\u003e\""
    }
  ],
  "line": 18,
  "name": "",
  "description": "",
  "id": "ebu-validating-claim-and-payout-with-cpr-number;user-with-cpr-login-to-validate-and-claim-cash-out-prize;",
  "rows": [
    {
      "cells": [
        "Bruger-id",
        "Adgangskode",
        "Page Title",
        "Nemid Page Title",
        "claim amount",
        "Message Title"
      ],
      "line": 19,
      "id": "ebu-validating-claim-and-payout-with-cpr-number;user-with-cpr-login-to-validate-and-claim-cash-out-prize;;1"
    },
    {
      "cells": [
        "1211990003",
        "1234",
        "NemID",
        "NemID",
        "200 kr",
        "You have successfully claimed"
      ],
      "line": 20,
      "id": "ebu-validating-claim-and-payout-with-cpr-number;user-with-cpr-login-to-validate-and-claim-cash-out-prize;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8185043337,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User with CPR login to validate and claim cash out prize",
  "description": "",
  "id": "ebu-validating-claim-and-payout-with-cpr-number;user-with-cpr-login-to-validate-and-claim-cash-out-prize;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@cucumberTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I choose to login to the site",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\t\tThen I see a browser title containing \"\u003cPage Title\u003e\""
    }
  ],
  "line": 12,
  "name": "I login with my NemiID \"1211990003\" and \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "location": "pspStepDefTest.I_choose_to_login_to_the_site()"
});
formatter.result({
  "duration": 152533455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1211990003",
      "offset": 24
    },
    {
      "val": "1234",
      "offset": 41
    }
  ],
  "location": "pspStepDefTest.iEnterMyAndAndClickContinue(String,String)"
});
formatter.result({
  "duration": 102086958,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#current_totp_active\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 64 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Marks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:ccd:f41b:961a:c581%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363), userDataDir\u003d/var/folders/hv/y1b0r4yx1ds45tq_wg6mw74m0000gn/T/.org.chromium.Chromium.6KyMQA}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d67.0.3396.99, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webdriver.remote.sessionid\u003d31df04977427d47f4032f590230b6396, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 31df04977427d47f4032f590230b6396\n*** Element info: {Using\u003dcss selector, value\u003d#current_totp_active}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:501)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\n\tat com.sun.proxy.$Proxy29.getText(Unknown Source)\n\tat dk.danskespil.psp.pageObjects.GetOTOPTokenPage.getTotpToken(GetOTOPTokenPage.java:26)\n\tat dk.danskespil.psp.pageObjects.NemIDPage.getTOTPCode(NemIDPage.java:64)\n\tat dk.danskespil.psp.stepDef.pspStepDefTest.iEnterMyAndAndClickContinue(pspStepDefTest.java:36)\n\tat ✽.When I login with my NemiID \"1211990003\" and \"1234\"(psp.feature:12)\n",
  "status": "failed"
});
formatter.after({
  "duration": 105330274,
  "status": "passed"
});
});