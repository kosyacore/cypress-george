import { When } from "@badeball/cypress-cucumber-preprocessor";

/**
 * Step definition for open George site
 * Used in element-driven tests
 */
When("Open George site", () => {
    cy.visit("/");
});

/**
 * Step definition for visit George site
 * Used in BDD tests
 */
When("User visit George site", () => {
    cy.visit("/");
});