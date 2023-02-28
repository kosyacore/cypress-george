import * as pages from "cypress/pages";

/**
 * This class is used to create a instance of the page class
 */
export class PageHandler {
    private static activePageName: string;
    private static activePage: any;

    /**
     * Set the active page
     * @param pageName name of the page
     */
    public static setActivePage(pageName: string) {
        if (this.activePageName === pageName) {
            return this.activePage;
        }
        return this.activePage = this.createInstance(pageName);
    }

    /**
     * Returns the active page
     * @returns active page
     */
    public static getActivePage() {
        return this.activePage;
    }

    /**
     * Create a instance of the page class
     * @param className name of the page class
     * @returns instance of the page class
     */
    private static createInstance(className: string) {
        className = this.correctPageName(className);
        return new (<any>pages)[className];
    }

    /**
     * Helper method to correct the page name
     * @param pageName name of the page
     * @returns corrected page name
     */
    private static correctPageName(pageName: string) {
        return pageName.replace(/ /g, "");
    }
}