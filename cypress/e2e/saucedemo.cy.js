/// <reference types="cypress" />

import testData from '../fixtures/testData.json'

describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login(testData.email, testData.password)
    })
  
    it('Items sorted by name as A->Z', () => {
        cy.sortItems('az')
        cy.verifyItemsOrderBy('az')
        cy.sortItems('za')
        cy.verifyItemsOrderBy('za')        
    })
  
  })