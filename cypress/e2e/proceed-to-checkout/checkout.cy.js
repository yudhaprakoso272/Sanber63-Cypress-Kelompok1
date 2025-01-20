// Importing Checkout POM
import checkout from "../../support/pageObject/checkout"
import addToCart from "../../support/pageObject/add-to-cart"

describe('Checkout', () => {
  beforeEach(() => {
    // cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
  })
})

// Test Script TC005
it('Checkout with compoulsary data existing (Shipping detail)', () => {
  
    // Calling Login command
    cy.login()
    //Proceed to Checkout page
    cy.proceedToCheckout()

})

// Test Script TC006
it('Checkout with empty street address', () => {
  
  // Calling Login command
  cy.login()
  //Proceed to Checkout page
  cy.proceedToCheckout()

  // Validating if the page is correct
  cy.wait(500)
  cy.url()
    .should('include', addToCart.urlCheckout)

  // Insert the values into each fields
  cy.get('.new-address-popup button[type="button"]').click()
  cy.get(checkout.companyField).type(checkout.companyInput)
  // cy.get(checkout.addressField).type(checkout.addressInput)
  cy.get(checkout.cityField).type(checkout.cityInput)
  cy.get(checkout.stateField).select(checkout.stateInput)
  cy.get(checkout.zipField).type(checkout.zipInput)
  cy.get(checkout.countryField).select(checkout.countryInput)
  cy.get(checkout.phoneField).type(checkout.phoneInput)
  // cy.get(checkout.shippingField).check()

  // Click onto the Next button
  cy.contains('button', checkout.shipBtn).click()

  cy.contains(checkout.addressEmptyMsg).should('be.visible')

})

// Test Script TC007
it('Select Flat Rate shipping method', () => {
  
  // Calling Login command
  cy.login()
  //Proceed to Checkout page
  cy.proceedToCheckout()

  // Validating if the page is correct
  cy.wait(500)
  cy.url()
    .should('include', addToCart.urlCheckout)

  // Insert the values into each fields
  cy.get(checkout.shippingField).check()

  // Click onto the Next button
  cy.contains('button', checkout.nextBtn).click()

  // Validating if the direction page is correct
  cy.wait(500)
  cy.contains('Payment Method').should('be.visible')
  cy.get('span.price[data-th="Shipping"]').should('have.text', '$0.00')

  cy.contains('button', checkout.orderBtn).should('be.visible').click()

  // Validating the order is created
  cy.wait(500)
  cy.contains('Thank you for your purchase!').should('be.visible')

})