import HomePage from '../pages/HomePage'

describe('Gov.il Tests', () => {
  const homePage = new HomePage()

  // Task 1: 3 automated tests for search component in header
  it('Test 1: Search component should be visible', () => {
    homePage.visitSearchPage()
    homePage.getSearchComponent().should('be.visible')
  })

  it('Test 2: Search component should accept input', () => {
    homePage.visitSearchPage()
    homePage.getSearchComponent().type('שירותים')
    homePage.getSearchComponent().should('have.value', 'שירותים')
  })

  it('Test 3: Search should navigate to results', () => {
    homePage.visitSearchPage()
    homePage.searchFor('דירה')
    cy.url().should('include', 'search')
  })

  // Task 2: Intercept 3 requests and check status code 200
  it('Test 4: Should intercept 3 requests and verify status 200', () => {
    cy.intercept('GET', '**/*').as('requests')
    homePage.visitBranchesPage()
    
    for (let i = 0; i < 3; i++) {
      cy.wait('@requests').its('response.statusCode').should('eq', 200)
    }
  })

  // Task 3: Loop on services and check if URL contains 'appointment'
  it('Test 5: Should loop services and check appointment URLs', () => {
    homePage.visitAppointmentPage()
    homePage.getServices().each(($service) => {
      const href = $service.attr('href')
      if (href && href.includes('appointment')) {
        cy.log(`Found appointment URL: ${href}`)
        expect(href).to.include('appointment')
      }
    })
  })

  // Task 4: Modify mainBanner response data
  it('Test 6: Should modify mainBanner response from PMO to Public Security', () => {
    cy.intercept('GET', '**/mainBanner**', (req) => {
      req.continue((res) => {
        res.body = { modified: true, source: 'ministry_of_public_security' }
      })
    }).as('mainBanner')
    
    homePage.visitPMOPage()
    cy.wait('@mainBanner').its('response.body.source').should('eq', 'ministry_of_public_security')
  })
})