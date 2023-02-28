import BasePage from "@pages/base-page";
import { ElementProps } from "@customTypes/element-props";

/**
 * Search Results Page POM
 */
export default class SearchResultsPage extends BasePage {
    /**
     * Page elements
     */
    private searchResults: ElementProps = { name: 'Search Results', locator: 'tbody[role="rowgroup"] > tr' };

    /**
     * Transaction elements
     */
    private transactionDate: ElementProps = { name: 'Transaction Date', locator: 'td:eq(0)' };
    private transactionTitle: ElementProps = { name: 'Transaction Title', locator: '[data-cy=transaction-title]' };
    private transactionBookingDetails: ElementProps = { name: 'Transaction Booking Details', locator: 'td:eq(3)' };
    private transactionCategory: ElementProps = { name: 'Transaction Category', locator: 'td:eq(4)' };
    private transactionAmount: ElementProps = { name: 'Transaction Amount', locator: 'data[value]' };

    private noSearchResultsText: ElementProps = { name: 'No Search Results Text', locator: '[data-cy=no-search-results]' };

    /**
     * Get transactions from search results and compare them with test data
     * Checks transaction date, title, booking details, category and amount
     * @param testData test data
     */
    public checkTransactions(testData: any) {
        const searchResults = cy.get(this.searchResults.locator);
        // Check size of search results
        searchResults.should('have.length', testData.length);
        // Check each transaction
        searchResults.each((transaction, index) => {
            const transactionData = testData[index];
            cy.wrap(transaction).within(() => {
                cy.get(this.transactionDate.locator).should('contain.text', transactionData.date);
                cy.get(this.transactionTitle.locator).should('contain.text', transactionData.title);
                cy.get(this.transactionBookingDetails.locator).should('contain.text', transactionData.bookingDetails);
                cy.get(this.transactionCategory.locator).should('contain.text', transactionData.category);
                cy.get(this.transactionAmount.locator).should('contain.text', transactionData.amount);
            });
        });
    }

    /**
     * Check if search results are not found
     */
    public noResultsFoundTextIsDisplayed() {
        const noSearchResultsText = cy.get(this.noSearchResultsText.locator);
        noSearchResultsText.should('be.visible');
        noSearchResultsText.should(
            'contain.text',
            "I'm sorry, I could not find what you were searching for. Could you please specify your search criteria?"
        );
    }
}