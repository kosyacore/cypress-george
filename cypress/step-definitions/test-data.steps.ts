import { Given } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Step definition for prepare test data from fixture
 * Load test data from fixture and store it in environment variable
 * @param fixture fixture name
 */
Given("Prepare test data from fixture {}", (fixture: string) => {
    const cleanedFixture = fixture.replace(/"/g, "");
    cy.readFile(`cypress/fixtures/${cleanedFixture}`).then((data) => {
        // Store test data in environment variable to use it in other steps
        Cypress.env("testData", data);
    });
});

/**
 * Helper function to get test data from environment variable
 * @param value value to get test data
 * @returns test data
 */
export function getTestData(value: string): any {
    const testData = Cypress.env("testData");
    if (value.startsWith("{") && value.endsWith("}")) {
        const key = value.substring(1, value.length - 1);
        return testData[`${key}`];
    }
    return value;
}