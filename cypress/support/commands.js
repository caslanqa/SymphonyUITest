import locators from '../fixtures/locators.json'

Cypress.Commands.add('login', (email, password) => {
    cy.get(locators.loginpage.email).type(email)
    cy.get(locators.loginpage.password).type(password)
    cy.get(locators.loginpage.submitButton).click({force:true})
})

Cypress.Commands.add('sortItems', (sortOption) => {
    cy.get(locators.listingPage.sortContainer).select(sortOption)
})

Cypress.Commands.add('verifyItemsOrderBy', (sortOption) => {
    switch (sortOption) {
        case 'az':
            cy.get(locators.listingPage.itemTitle).then($items => {
                const texts = $items.map((i, el) => Cypress.$(el).text()).get();
                expect(texts).to.deep.equal([...texts].sort());
            })
            break;
        case 'za':
            cy.get(locators.listingPage.itemTitle).then($items => {
                const texts = $items.map((i, el) => Cypress.$(el).text()).get();
                expect(texts).to.deep.equal([...texts].sort().reverse());
            })
    }
})
