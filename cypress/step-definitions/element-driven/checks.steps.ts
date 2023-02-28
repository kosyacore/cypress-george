import { When } from "@badeball/cypress-cucumber-preprocessor";
import { getTestData } from "@step-definitions/test-data.steps";
import { PageHandler } from "cypress/utils/page-handler";

/**
 * Step definition for checking element state
 * @param elementName element name to check
 * @param state state to check
 */
When("Element {string} should be {string}", (elementName: string, state: string) => {
    const element = PageHandler.getActivePage().getElement(elementName);
    switch (state) {
        case "visible":
            element.should("be.visible");
            break;
        case "not visible":
            element.should("not.be.visible");
            break;
        default:
            throw new Error(`State ${state} is not supported`);
    }
});

/**
 * Step definition for checking element text
 * @param elementName element name to check
 * @param condition state to check
 * @param value value to check
 */
When("Element {string} should {string} text {string}", (elementName: string, condition: string, value: string) => {
    const element = PageHandler.getActivePage().getElement(elementName);
    const valueFromData = getTestData(value);
    switch (condition) {
        case "have":
            element.should("have.text", valueFromData);
            break;
        case "not have":
            element.should("not.have.text", valueFromData);
            break;
        case "contains":
            element.should("contain.text", valueFromData);
            break;
        default:
            throw new Error(`Condition ${condition} is not supported`);
    }
});