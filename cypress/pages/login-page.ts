import { ElementProps } from "@customTypes/element-props";
import BasePage from "./base-page";

/**
 * Login Page POM
 */
export default class LoginPage extends BasePage {
    /**
     * Page elements
     */
    private userNameField: ElementProps = { name: 'Username Field', locator: '[name=j_username]' };
    private passwordField: ElementProps = { name: 'Password Field', locator: '[name=j_password]' };
    private startLoginButton: ElementProps = { name: 'Login Button', locator: '[id=submitButton]' };

    /**
     * Login as user
     * @param username username
     * @param password password
     */
    public loginAs(username: string, password: string) {
        cy.get(this.userNameField.locator).type(username);
        cy.get(this.startLoginButton.locator).click();
        cy.get(this.passwordField.locator).type(password);
        cy.get(this.startLoginButton.locator).click();
    }
}