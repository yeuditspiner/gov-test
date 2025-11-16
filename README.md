# Gov.il Testing Project

## Setup
1. Install dependencies: `npm install`
2. Run Cypress: `npm run cypress:open`

## Tests Included
- Header visibility test
- API request interception and status code validation
- Search component functionality (3 tests)
- Services loop with appointment URL check
- Service counting with Hebrew text filtering

## Page Object Model
- HomePage.js contains all page interactions
- Tests are organized in gov-tests.cy.js

## Running Tests
```bash
npm install cypress
npm run cypress:open
```