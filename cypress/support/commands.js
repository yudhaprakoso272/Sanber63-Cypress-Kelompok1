import loginPage from "./pageObject/login"

// Custom commands login
Cypress.Commands.add("login", () => {
    cy.fixture("loginCredentials.json").then((credentials) => {
      cy.get(loginPage.email).type(credentials.email)
      cy.get(loginPage.password).type(credentials.password)
      cy.get(loginPage.login).click()
    })
})