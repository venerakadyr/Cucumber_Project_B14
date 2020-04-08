package parallel;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/parallel-cucumber4.json"},
        features = "src/test/resources/features/wikipedia_features",
        glue = "step_definitions"
)






public class WikipediaParallelRunner {

}
