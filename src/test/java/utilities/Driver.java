package utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;

import java.util.concurrent.TimeUnit;

public class Driver {

    private  static WebDriver driver;

    private Driver(){

    }
//
//   public static WebDriver getDriver() {
//       if (driver == null) {
//           String browser = Config.getProperty("browser");
//           if ("chrome".equals(browser)) {
//               WebDriverManager.chromedriver().setup();
//               driver = new ChromeDriver();
//           } else if ("firefox".equals(browser)) {
//               WebDriverManager.firefoxdriver().setup();
//               driver = new FirefoxDriver();
//           } else if ("opera".equals(browser)) {
//               WebDriverManager.operadriver().setup();
//               driver = new OperaDriver();
//           }
//           WebDriverManager.chromedriver().setup();
//           driver = new ChromeDriver();
//           driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//           driver.manage().window().maximize();
//
//
//       }
//       return driver;
//   }
//   //===============================================================================================
   public static WebDriver getDriver() {
       if (driver == null) {
           switch (Config.getProperty("browser")) {
               case "chrome":
                   WebDriverManager.chromedriver().setup();
                   driver = new ChromeDriver();
                   break;
               case "firefox":
                   WebDriverManager.firefoxdriver().setup();
                   driver = new FirefoxDriver();
                   break;
               case "opera":
                   WebDriverManager.operadriver().setup();
                   driver = new OperaDriver();
                   break;


           }
           WebDriverManager.chromedriver().setup();
           driver = new ChromeDriver();
           driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
           driver.manage().window().maximize();


       }
   return driver;
   }
////========================================================================================


   public static void closeDriver(){
        if(driver!=null) {
            driver.quit();
           driver=null;
        }
   }
}
