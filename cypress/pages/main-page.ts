import { ElementProps } from "@customTypes/element-props";
import { getTestData } from "@step-definitions/test-data.steps";
import BasePage from "./base-page";

/**
 * Main Page POM
 */
export default class MainPage extends BasePage {
    /**
     * Page elements
     */
    private searchInput: ElementProps = { name: 'Search Input', locator: '[data-cy=search-keyword]' };
    private searchButton: ElementProps = { name: 'Search Button', locator: '[data-cy=search-trigger-button]' };

    /**
     * Search for operation(s)
     * @param searchTerm search value
     */
    public searchOperations(searchTerm: string) {
        const searchTermFromData = getTestData(searchTerm);
        cy.get(this.searchInput.locator).type(searchTermFromData);
        cy.get(this.searchButton.locator).click();
    };
}