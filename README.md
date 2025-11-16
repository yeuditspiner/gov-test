# Gov.il API Testing Suite

This repository contains both Postman and Cypress tests for Israeli government APIs.

## 📁 Files
- `postman_part.postman_collection.json` - Postman collection with API tests
- `cypress/e2e/gov-api-tests.cy.js` - Cypress E2E tests
- `cypress.config.js` - Cypress configuration

## 🚀 Postman Usage
1. Import the collection into Postman
2. Set the `baseURL` variable to `https://www.gov.il`
3. Run the tests

## 🧪 Cypress Usage
```bash
npm install
npm run cypress:open  # Interactive mode
npm run cypress:run   # Headless mode
```

## 🔗 API Endpoints Tested
- `/govil-landing-page-api/he` - Government offices and departments
- `/govilHF/api/GetServices?culture=he` - Government services