package dk.danskespil.psp.runAllTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty"},
        glue = ("dk.danskespil.psp.stepDef"),
        features="src/main/java/dk/danskespil/psp/features/",
        tags = "@cucumberTest")
public class RunCukeTest {
}

