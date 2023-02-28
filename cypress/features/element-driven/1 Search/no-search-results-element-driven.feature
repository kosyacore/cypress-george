Feature: Search

    @ELEMENT-DRIVEN
    @TRANSACTIONS_NOT_FOUND
    Scenario: Transactions not found (no results) - Element-Driven
        * Prepare test data from fixture "search/no-search-results.json"

        * Open George site

        # Login steps
        * Page "Login Page" is opened
        * Type "{username}" into "Username Field"
        * Click on "Login Button"
        * Type "{password}" into "Password Field"
        * Click on "Login Button"

        # Search steps
        * Page "Main Page" is opened
        * Type "{searchTerm}" into "Search Input"
        * Click on "Search Button"

        # Check search results steps
        * Page "Search Results Page" is opened
        * Element "No Search Results Text" should be "visible"
        * Element "No Search Results Text" should "contains" text "{noSearchResultsText}"