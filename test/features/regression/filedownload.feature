@MRegression
Feature: Validate File download

    Scenario Outline: Test File download
        Given I open the browser and load the url <pageURL>
        When I click on first file
        Then I validate downloaded file extension
        
        Examples:
            | pageURL                                     |
            | https://the-internet.herokuapp.com/download |
