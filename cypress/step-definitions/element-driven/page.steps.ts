import { When } from "@badeball/cypress-cucumber-preprocessor";
import { PageHandler } from "cypress/utils/page-handler";

/**
 * Step definition for set active page
 * @param pageName page name to set active
 */
When("Page {string} is opened", (pageName: string) => {
    PageHandler
        .setActivePage(pageName);
});