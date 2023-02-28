import { Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchResultsPage from "@pages/search-results.page";
import { getTestData } from "@step-definitions/test-data.steps";

/**
 * Step definition for checking no results found in search results
 */
Then("User should see message about no results found", () => {
    const searchPage = new SearchResultsPage();
    searchPage.noResultsFoundTextIsDisplayed();
});

/**
 * Step definition for checking transactions in search results
 * @param transactions transactions to check
 */
Then('User should see transactions {string}', (transactions: string) => {
    const transactionsFromData = getTestData(transactions);
    const searchPage = new SearchResultsPage();
    searchPage.checkTransactions(transactionsFromData);
});
