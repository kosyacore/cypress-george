/**
 * Base Page class
 */
abstract class BasePage {

  /**
   * Get element from page by name and return it
   * @param elementName element to find
   * @returns found element
   */
  protected getElement(elementName: string): Cypress.Chainable {
    const element = Object.values(this).find((element) => element.name === elementName);
    if (!element) {
      throw new Error(`Element with name ${elementName} not found`);
    }
    return cy.get(element.locator);
  }
}

export default BasePage;