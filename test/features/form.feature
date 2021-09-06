@MainWorkflow
Feature: Test Practise Form
   
    Scenario: Validate form data with json file
    Given I am on form page "https://demoqa.com/automation-practice-form"
    When I enter all mandate fields
    # And submits the form
    # Then I should see "Thanks for submitting the form"

    @Regression
    Scenario Outline: Validate form data with json file
    Given I am on form page "https://demoqa.com/automation-practice-form"
    When I enter all mandate fields from <filename>

    @DEV
    Examples:
        | filename |
        | formdata2.json  |
        | formdata3.json  |
    
    @QA
    Examples:
        | filename |
        | formdata4.json  |