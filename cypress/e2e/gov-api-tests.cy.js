describe('Gov.il API Tests', () => {
  
  it('should fetch government offices and departments', () => {
    cy.request('GET', '/govil-landing-page-api/he')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('results')
        expect(response.body.results).to.be.an('array')
        
        // בדיקה שיש פחות מ-100 תוצאות
        expect(response.body.results.length).to.be.lessThan(101)
        
        cy.log(`Found ${response.body.results.length} government offices`)
      })
  })

  it('should fetch government services', () => {
    cy.request('GET', '/govilHF/api/GetServices?culture=he')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('result')
        expect(response.body.result).to.be.an('array')
        
        cy.log(`Found ${response.body.result.length} government services`)
        
        // חיפוש שירותים הקשורים לדיור
        const housingServices = response.body.result.filter(service => 
          service.title && (
            service.title.includes('דירה') || 
            service.title.includes('דיור') || 
            service.title.includes('מגורים')
          )
        )
        
        cy.log(`Found ${housingServices.length} housing-related services`)
      })
  })

  it('should test gov.il homepage', () => {
    cy.visit('/')
    cy.title().should('contain', 'gov.il')
    cy.get('body').should('be.visible')
  })

})