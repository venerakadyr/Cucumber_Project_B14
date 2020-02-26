package steps_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Driver;

public class Hooks {
    @Before
    public  void setup(){
       Driver.getDriver().get("https://www.google.com");
    }




    @After
    public void tearDown(Scenario scenario){
      if(scenario.isFailed()){
          byte [] screenshot=((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
          scenario.embed(screenshot,"image/png");

      }



    }
}
