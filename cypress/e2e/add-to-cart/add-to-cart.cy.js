import addToCart from "../../support/pageObject/add-to-cart";

describe('Proceed to Checkout Module', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    });

    // Test script TC001: Add product item to shopping cart
    it('Add product item to shopping cart', () => {
        // Calling custom commands - Login
        cy.login();

        // Visit product page and add item to cart
        cy.visit(addToCart.productUrl);
        cy.get(addToCart.itemSize).should('be.visible').click();
        cy.get(addToCart.itemColor).should('be.visible').click();
        cy.get(addToCart.btnAddToCart).should('be.visible').click();

        // Verify the item was added
        cy.contains(addToCart.addMsg).should('be.visible');
    });

    // Test Script TC002: Remove item in the Shopping Cart
    it('Remove item in the Shopping Cart', () => {
        // Calling custom commands - Login
        cy.login();

        // Open cart and remove the item
        cy.get(addToCart.btnCart).should('be.visible').click();
        cy.get(addToCart.btnRemoveItem).should('be.visible').click();
        cy.contains(addToCart.btnConfirmRemove).should('be.visible').click();

        // Verify the cart is empty
        cy.get(addToCart.cartInfo).should('be.visible');
        cy.contains(addToCart.removeMsg).should('be.visible');
    });

    // Test Script TC003: Update item qty below than 0
    it('Update item qty below than 0', () => {
        // Calling custom commands - Login
        cy.login();

        // Visit product page
        cy.visit(addToCart.productUrl);
        cy.get(addToCart.itemSize).should('be.visible').click();
        cy.get(addToCart.itemColor).should('be.visible').click();

        // Update quantity to an invalid value
        cy.get(addToCart.qtyField).should('be.visible').clear().type('-5');
        cy.get(addToCart.btnAddToCart).should('be.visible').click();

        // Verify the error message
        cy.contains(addToCart.invalidQtyMsg).should('be.visible');
    });

    // Test script TC004: Proceed to checkout with 1 item
    it('Proceed to checkout with 1 item', () => {
        // Calling custom commands - Login
        cy.login();

        // Open cart and handle empty cart scenario
        cy.get(addToCart.btnCart2).should('be.visible').click();
        cy.get('.empty.subtitle')
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                if (text.includes(addToCart.removeMsg)) {
                    // If the cart is empty, add an item
                    cy.visit(addToCart.productUrl);
                    cy.get(addToCart.itemSize).should('be.visible').click();
                    cy.get(addToCart.itemColor).should('be.visible').click();
                    cy.get(addToCart.btnAddToCart).should('be.visible').click();

                    // Verify the item was added
                    cy.contains(addToCart.addMsg).should('be.visible');
                }

                // Open the cart and proceed to checkout
                cy.get(addToCart.btnCart2).should('be.visible').click();
                cy.get(addToCart.btnProceedCheckout, { timeout: 10000 }).click({ force: true });

                // Verify the checkout page
                // cy.url().should('include', addToCart.urlCheckout);
                cy.contains(addToCart.checkoutTitle).should('be.visible');
            });
    });
});
