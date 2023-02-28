import { When } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "@pages/main-page";

When('User searches for transactions {string}', (transaction: string) => {
    const mainPage = new MainPage();
    mainPage.searchOperations(transaction);
});