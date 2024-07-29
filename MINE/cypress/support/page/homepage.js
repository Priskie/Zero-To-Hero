let data
before(() => {
    cy.fixture ('element-for-web').then((wb) => {
        priskie = wb
    })
})

Cypress.Commands.add('clickHomepageSignup', () => {
    cy.get(priskie.homePageSignupButton).should('be.visible').click()
    
})

Cypress.Commands.add('clickHomepageLogin', () => {
    cy.get(priskie.homePageLoginButton).should('be.visible').click()
    
})




