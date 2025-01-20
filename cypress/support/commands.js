import loginPage from "./pageObject/login"
import addToCart from "./pageObject/add-to-cart"
import checkout from "./pageObject/checkout"

// Custom commands login
Cypress.Commands.add('login', () => {
    cy.fixture("loginCredentials.json").then((credentials) => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
      cy.get(loginPage.email).type(credentials.email)
      cy.get(loginPage.password).type(credentials.password)
      cy.get(loginPage.login).click()
    })
})

// Proceed to checkout
Cypress.Commands.add('proceedToCheckout', () => {
  // Visit product page and add the item to the cart
  cy.visit(addToCart.productUrl);
  cy.get(addToCart.itemSize).should('be.visible').click();
  cy.get(addToCart.itemColor).should('be.visible').click();
  cy.get(addToCart.btnAddToCart).should('be.visible').click();

  // Verify the item was added
  cy.contains(addToCart.addMsg).should('be.visible');

  // Open cart and proceed to checkout
  cy.get(addToCart.btnCart2, { timeout: 10000 }).click({ force: true }); // Force click in case of visibility issues
  cy.get(addToCart.btnProceedCheckout, { timeout: 10000 }).click({ force: true }); // Force click to bypass the display: none issue

  // Validate the URL and ensure we're on the checkout page
  cy.url({ timeout: 10000 }).should('include', addToCart.urlCheckout);

  // Fill in shipping details and proceed
  cy.get(checkout.shippingField).should('be.visible').check();
  cy.contains('button', checkout.nextBtn).click();

  // Validate the payment method page
  cy.wait(500); // Optional: Adjust based on application behavior
  cy.contains('Payment Method').should('be.visible');
  cy.contains('button', checkout.orderBtn).should('be.visible').click();

  // Validate the order confirmation
  cy.wait(500); // Optional: Adjust based on application behavior
  cy.contains('Thank you for your purchase!').should('be.visible');
});
