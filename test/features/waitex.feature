Feature: The herokuapp | Dynamic Load - 1

    Scenario: Test Different wait types

        Given I am on dynamic loading <AppURL> page
        When I click on start button
        Then I validate loading icon

        Examples:
            | AppURL                                               |
            | https://the-internet.herokuapp.com/dynamic_loading/1 |