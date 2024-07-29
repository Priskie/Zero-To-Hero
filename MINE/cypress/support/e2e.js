// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './page/homepage'
// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach('execute before each test',()=>{
    Cypress.on('uncaught:exception',()=>{
        return false
    })
})


//import {faker} from '@faker-js/faker'
//let priskie
//describe('Sign Up Journey', () => {
 // beforeEach(() => {
    //cy.fixture('element-for-web').then((wb) => {
     // priskie = wb
 
    //})
   // cy.visit('/')
//  })

 // it('1st Signup details fully tested', () => {
   //   cy.clickHomepageSignup()
   //   cy.get(priskie.fullnameField).