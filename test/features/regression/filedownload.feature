@MRegression
Feature: Validate file download

    Scenario Outline: Test File download
        Given I open the browser and load the url <pageURL>
        When I click on first file

        Examples:
            | pageURL                                     |
            | https://the-internet.herokuapp.com/download |
