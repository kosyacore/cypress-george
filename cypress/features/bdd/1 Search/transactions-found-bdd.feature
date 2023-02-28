Feature: Search

    @BDD
    @TRANSACTIONS_FOUND_OUTGOING
    Scenario: Transactions found (outgoing) - BDD
        Given Prepare test data from fixture "search/transactions-found.json"

        When User visit George site
        When User login with username "{username}" and password "{password}"
        When User searches for transactions "{searchTerm}"
        Then User should see transactions "{transactions}"