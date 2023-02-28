import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getTestData } from "@step-definitions/test-data.steps";
import { PageHandler } from "cypress/utils/page-handler";

/**
 * Step definition for type value into element
 * @param value value to type
 * @param element element to type into
 */
When("Type {string} into {string}", (value: string, element: string) => {
    const valueFromData = getTestData(value);
    PageHandler
        .getActivePage()
        .getElement(element)
        .type(valueFromData);
});

/**
 * Step definition for click on element
 * @param element element to click on
 */
When("Click on {string}", (element: string) => {
    PageHandler
        .getActivePage()
        .getElement(element)
        .click();
});