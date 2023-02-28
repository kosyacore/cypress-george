Feature: Search

    @BDD
    @TRANSACTIONS_NOT_FOUND
    Scenario: Transactions not found (no results) - BDD
        Given Prepare test data from fixture "search/no-search-results.json"

        When User visit George site
        When User login with username "{username}" and password "{password}"
        When User searches for transactions "{searchTerm}"
        Then User should see message about no results found