package pages.vytrack_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver_Utils;

public class LoginPage {
    public LoginPage(){
        PageFactory.initElements(Driver_Utils.getDriver(), this);
    }
    @FindBy(id = "prependedInput")
    public WebElement usernameInput;
    @FindBy(id = "prependedInput2")
    public WebElement passwordInput;
    @FindBy(id = "_submit")
    public WebElement loginButton;



}
