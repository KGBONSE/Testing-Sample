$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("sampleTesting.feature");
formatter.feature({
  "line": 2,
  "name": "sample testing",
  "description": "As a user\nI want to be able to test different website\nSo as to be confident of the deployable application",
  "id": "sample-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Testing samples",
  "description": "",
  "id": "sample-testing;testing-samples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select domestic polytunnels \"\u003cselectLink\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be taken to the next page and verify the page title \"\u003cpageTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "sample",
  "description": "",
  "id": "sample-testing;testing-samples;sample",
  "rows": [
    {
      "cells": [
        "selectLink",
        "pageTitle"
      ],
      "line": 14,
      "id": "sample-testing;testing-samples;sample;1"
    },
    {
      "cells": [
        "Domestic Polytunnels",
        "Polytunnels"
      ],
      "line": 15,
      "id": "sample-testing;testing-samples;sample;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3893309930,
  "error_message": "org.openqa.selenium.WebDriverException: org.apache.http.conn.HttpHostConnectException: Connect to localhost:1707 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027Marks-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1084:c33d:8574:208c%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.4\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:91)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat stepDefTest.stepDefinitionTest.prepare(stepDefinitionTest.java:29)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:201)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to localhost:1707 [localhost/127.0.0.1, localhost/0:0:0:0:0:0:0:1] failed: Connection refused\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:159)\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:359)\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:381)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:237)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:185)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:89)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:111)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:185)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:157)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:87)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:343)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\t... 69 more\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:75)\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:142)\n\t... 84 more\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "Testing samples",
  "description": "",
  "id": "sample-testing;testing-samples;sample;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I select domestic polytunnels \"Domestic Polytunnels\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be taken to the next page and verify the page title \"Polytunnels\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitionTest.i_am_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Domestic Polytunnels",
      "offset": 31
    }
  ],
  "location": "stepDefinitionTest.i_select_domestic_polytunnels(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Polytunnels",
      "offset": 62
    }
  ],
  "location": "stepDefinitionTest.i_should_be_taken_to_the_next_page_and_verify_the_page_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 179876,
  "error_message": "java.lang.NullPointerException\n\tat stepDefTest.stepDefinitionTest.tearDown(stepDefinitionTest.java:35)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\n",
  "status": "failed"
});
});