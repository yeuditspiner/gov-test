class HomePage {
  visitSearchPage() {
    cy.visit('https://www.gov.il')
  }

  visitBranchesPage() {
    cy.visit('https://www.gov.il/he/government-service-branches')
  }

  visitAppointmentPage() {
    cy.visit('https://govisit.gov.il/he/authorities/authority/262')
  }

  visitPMOPage() {
    cy.visit('https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page')
  }

  visitPublicSecurityPage() {
    cy.visit('https://www.gov.il/he/departments/ministry_of_public_security/govil-landing-page')
  }

  getHeader() {
    return cy.get('header')
  }

  getSearchComponent() {
    return cy.get('input[type="search"]').first()
  }

  getServices() {
    return cy.get('a').filter((i, el) => el.href && el.href.includes('appointment'))
  }

  getMainBanner() {
    return cy.get('[class*="banner"]').first()
  }

  searchFor(text) {
    this.getSearchComponent().clear().type(text + '{enter}')
  }
}

export default HomePage