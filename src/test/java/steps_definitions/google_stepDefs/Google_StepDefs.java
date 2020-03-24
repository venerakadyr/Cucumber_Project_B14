package steps_definitions.google_stepDefs;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.google_pages.GoogleLandingPage;
import utilities.Driver;

public class Google_StepDefs {

    GoogleLandingPage googleLandingPage=new GoogleLandingPage();

    @When("User is on google homepage")
    public void user_is_on_google_homepage() {
      //1- Get the google page
        Driver.getDriver().get("https://www.google.com");

    }

    @Then("User should see title contains Google")
    public void user_should_see_title_contains_Google() {
        //2-compare the actual title vs expected title

        String actualTitle= Driver.getDriver().getTitle();
        String expectedTitle="adadadad";

        Assert.assertTrue("Title verification is PASSED",actualTitle.contains(expectedTitle));


    }
    @When("User types wooden spoon into the search box")
    public void user_types_wooden_spoon_into_the_search_box() {
        googleLandingPage.searchBox.sendKeys("wooden spoon");

    }

    @When("User clicks to search button")
    public void user_clicks_to_search_button() {

        googleLandingPage.searchButton.click();
    }

    @Then("User should see wooden spoon in the title")
    public void user_should_see_wooden_spoon_in_the_title() {
        String actualTitle= Driver.getDriver().getTitle();
        String expectedTitle="wooden spoon";
        Assert.assertTrue("Wooden Spoon verification is Passed",actualTitle.contains(expectedTitle));

    }




}
