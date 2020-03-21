$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/smartbear_features/smartbearOrder.feature");
formatter.feature({
  "name": "Smartbear order placing feature",
  "description": "  Agile Story : When user is on the Order page, user should be able to place\n  order after filling out the form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.step({
  "name": "User selects \"\u003cproduct\u003e\" from product dropdown",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cquantity\u003e\" to quantity input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccustomerName\u003e\" to costumer name input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstreet\u003e\" to street input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccity\u003e\" to city input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cstate\u003e\" to state input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003czip\u003e\" to zip input box",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003ccardType\u003e\" as card type from radio buttons",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003ccardNumber\u003e\" to card number input box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \"\u003cexpirationDate\u003e\" to expiration date into input box",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies \"\u003cexpectedName\u003e\" is in the table",
  "keyword": "Then "
});
formatter.examples({
  "name": "User fills out the form as followed from the table below:",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "customerName",
        "street",
        "city",
        "state",
        "zip",
        "cardType",
        "cardNumber",
        "expirationDate",
        "expectedName"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "Il",
        "60004",
        "Visa",
        "313313133315",
        "12/22",
        "Ken Adams"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "4",
        "Joey Tribbiani",
        "State st",
        "Chicago",
        "Il",
        "60656",
        "Visa",
        "313313133315",
        "11/22",
        "Joey Tribbiani"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "5",
        "Rachel Green",
        "Michigan st",
        "Chicago",
        "Il",
        "60656",
        "Visa",
        "313313133315",
        "11/22",
        "Rachel Green"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "5",
        "Chandler Bing",
        "Erie st",
        "Chicago",
        "Il",
        "60666",
        "Visa",
        "464675855959",
        "10/22",
        "Chandler Bing"
      ]
    },
    {
      "cells": [
        "FamilyAlbum",
        "9",
        "Dr DrakeRamoray",
        "Dale st",
        "Arl Hgths",
        "Il",
        "60452",
        "Visa",
        "137452095511",
        "10/22",
        "Dr DrakeRamoray"
      ]
    },
    {
      "cells": [
        "ScreenSaver",
        "10",
        "Monica Geller",
        "Euclid ave",
        "Arl Hgths",
        "Il",
        "60312",
        "Visa",
        "874576638100",
        "10/22",
        "Monica Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "3",
        "Ross Geller",
        "River rd",
        "Des Plaines",
        "Il",
        "60666",
        "Visa",
        "383494859454",
        "10/22",
        "Ross Geller"
      ]
    },
    {
      "cells": [
        "MyMoney",
        "1",
        "Ken Adams",
        "Kinzie st",
        "Chicago",
        "Il",
        "60312",
        "Visa",
        "949586573625",
        "12/22",
        "Ken Adams"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60004\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"4\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Joey Tribbiani\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"State st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Joey Tribbiani\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Rachel Green\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Michigan st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60656\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"313313133315\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"11/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Rachel Green\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"5\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chandler Bing\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Erie st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60666\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"464675855959\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Chandler Bing\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"FamilyAlbum\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"9\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dr DrakeRamoray\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Dale st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60452\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"137452095511\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Dr DrakeRamoray\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"ScreenSaver\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Monica Geller\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Euclid ave\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Arl Hgths\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60312\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"874576638100\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Monica Geller\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"3\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ross Geller\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"River rd\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Des Plaines\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60666\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"383494859454\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"10/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ross Geller\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to place order with different data sets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smartOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is logged into SmartBear Tester account and on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_is_logged_into_SmartBear_Tester_account_and_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"MyMoney\" from product dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_from_product_dropdown(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"1\" to quantity input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_quantity_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Ken Adams\" to costumer name input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_costumer_name_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Kinzie st\" to street input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_street_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Chicago\" to city input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_city_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Il\" to state input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_state_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"60312\" to zip input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_zip_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"Visa\" as card type from radio buttons",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_selects_as_card_type_from_radio_buttons(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"949586573625\" to card number input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_card_number_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"12/22\" to expiration date into input box",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_enters_to_expiration_date_into_input_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks process button",
  "keyword": "And "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_clicks_process_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies \"Ken Adams\" is in the table",
  "keyword": "Then "
});
formatter.match({
  "location": "SBOrder_StepDefs.user_verifies_is_in_the_table(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});