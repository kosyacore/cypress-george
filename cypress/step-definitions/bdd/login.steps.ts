import { When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "@pages/login-page";
import { getTestData } from "@step-definitions/test-data.steps";

/**
 * Step definition for login
 * @param username username to login
 * @param password password to login
 */
When("User login with username {string} and password {string}", (username: string, password: string) => {
    const usernameFromData = getTestData(username);
    const passwordFromData = getTestData(password);
    const loginPage = new LoginPage();
    loginPage.loginAs(usernameFromData, passwordFromData);
});