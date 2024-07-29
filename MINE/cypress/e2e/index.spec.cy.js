import {faker} from '@faker-js/faker'
let priskie
describe('Sign Up Journey', () => {
 beforeEach(() => {
  cy.fixture('element-for-web').then ((wb) => {
    priskie = wb
  })
  cy.visit('/')
})

  it('1st Signup details fully tested', () => {
      cy.get(priskie.homePageSignupButton).should('be.visible').click()
      cy.get(priskie.fullnameField).should('exist').type('Priskie Grace')
      cy.get(priskie.biznameField).type('Evolve')
      cy.get(priskie.bizemailField).type(faker.internet.email({provider: 'yopmail.com'}))
      cy.get(priskie.bizphoneField).type('+2348032456741')
      cy.get(priskie.bizregNumField).type('RC-0513')
      cy.get(priskie.nextButton).click()
      cy.get(priskie.websiteField).should('be.visible').type('https://www.evolve.com')
      cy.get(priskie.instHandleField).type('@Evolve')
      cy.get(priskie.xHandleField).type('@Evolve')
      cy.get(priskie.howYouHeardDropDown).click()
      cy.get(priskie.howYouHeardOption).contains('Webinar/Seminar').should('be.visible').click()
      cy.get(priskie.passwordField).type('P@$$word1!')
      cy.get(priskie.signupButton).click()
      cy.get(priskie.confirmOTP).should('be.visible').and('have.text','Thank you for Signing up with Mima.')
      
    
  }) 

  it('2nd Signup Business Registration Number', () => {
      cy.get(priskie.homePageSignupButton).should('be.visible').click()
      cy.get(priskie.fullnameField).should('exist').type('Priskie Grace')
      cy.get(priskie.biznameField).type('Evolve')
      cy.get(priskie.bizemailField).type(faker.internet.email({provider: 'yopmail.com'}))
      cy.get(priskie.bizphoneField).type('+2348032456741')
      cy.get(priskie.bizregNumField).type('RC-0513')
      cy.get(priskie.nextButton).click()
      cy.get(priskie.howYouHeardDropDown).click()
      cy.get(priskie.howYouHeardOption).contains('Webinar/Seminar').should('be.visible').click()
      cy.get(priskie.passwordField).type('P@$$word1!')
      cy.get(priskie.signupButton).click()
      cy.get(priskie.confirmOTP).should('be.visible').and('have.text','Thank you for Signing up with Mima.')
 
  
  })  


  it('3rd Signup via Website', () => {
      cy.get(priskie.homePageSignupButton).should('be.visible').click()
      cy.get(priskie.fullnameField).should('exist').type('Priskie Grace')
      cy.get(priskie.biznameField).type('Evolve')
      cy.get(priskie.bizemailField).type(faker.internet.email({provider: 'yopmail.com'}))
      cy.get(priskie.bizphoneField).type('+2348032456741')
      cy.get(priskie.nextButton).click()
      cy.get(priskie.websiteField).should('be.visible').type('https://www.evolve.com')
      cy.get(priskie.howYouHeardDropDown).click()
      cy.get(priskie.howYouHeardOption).contains('Webinar/Seminar').should('be.visible').click()
      cy.get(priskie.passwordField).type('P@$$word1!')
      cy.get(priskie.signupButton).click()
      cy.get(priskie.confirmOTP).should('be.visible').and('have.text','Thank you for Signing up with Mima.')
    
    
   
  })
  
  it('4th Signup via Instagram Handle', () => { 
      cy.get(priskie.homePageSignupButton).should('be.visible').click()
      cy.get(priskie.fullnameField).should('exist').type('Priskie Grace')
      cy.get(priskie.biznameField).type('Evolve')
      cy.get(priskie.bizemailField).type(faker.internet.email({provider: 'yopmail.com'}))
      cy.get(priskie.bizphoneField).type('+2348032456741')
      cy.get(priskie.nextButton).click()
      cy.get(priskie.instHandleField).type('@Evolve')
      cy.get(priskie.howYouHeardDropDown).click()
      cy.get(priskie.howYouHeardOption).contains('Webinar/Seminar').should('be.visible').click()
      cy.get(priskie.passwordField).type('P@$$word1!')
      cy.get(priskie.signupButton).click()
      cy.get(priskie.confirmOTP).should('be.visible').and('have.text','Thank you for Signing up with Mima.')

   
   
  })  


    
  it('5th Signup via Twitter Handle', () => {
      cy.get(priskie.homePageSignupButton).should('be.visible').click()
      cy.get(priskie.fullnameField).should('exist').type('Priskie Grace')
      cy.get(priskie.biznameField).type('Evolve')
      cy.get(priskie.bizemailField).type(faker.internet.email({provider: 'yopmail.com'}))
      cy.get(priskie.bizphoneField).type('+2348032456741')
      cy.get(priskie.nextButton).click()
      cy.get(priskie.xHandleField).type('@Evolve')
      cy.get(priskie.howYouHeardDropDown).click()
      cy.get(priskie.howYouHeardOption).contains('Webinar/Seminar').should('be.visible').click()
      cy.get(priskie.passwordField).type('P@$$word1!')
      cy.get(priskie.signupButton).click()
      cy.get(priskie.confirmOTP).should('be.visible').and('have.text','Thank you for Signing up with Mima.')
    







    })








  })