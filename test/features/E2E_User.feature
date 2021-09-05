@MainWorkflow
Feature: Test End to End User

    # Running through tags 
    # npm test -- --cucumberOpts.tagExpression='@Regression'
    # Part7: WebdriverIO with TypeScript - E2E Test: API GET Call
    # https://www.youtube.com/watch?v=VLT2ADD1WHw
    @GETCall
    Scenario Outline: Validate End to End Get Single User

        Given I am on page <PageURL>
        When I perform <EndPoint> user search
        And I make GET <EndPoint> api call
        Then I validate the search result

        Examples:
            | PageURL                   | EndPoint     |
            | https://resttesttest.com/ | /api/users/2 |

    # https://reqres.in/

    # Part8: WebdriverIO with TypeScript - E2E Test: API POST Call
    # https://www.youtube.com/watch?v=kbvJMBWI92Y
    @Regression @POSTCall
    Scenario Outline: Validate End to End POST Create User
        Given I am on page <PageURL>
        When I perform create user search for api <EndPoint>
        And I make POST <EndPoint> api call
        Then I validate the create user search result

        Examples:
            | PageURL                   | EndPoint   |
            | https://resttesttest.com/ | /api/users |

