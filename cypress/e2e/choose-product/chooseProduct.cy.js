import chooseProduct from "../../support/pageObject/chooseProduct";

describe("choose product module", ()=> {
    beforeEach(() => {
        // Visit halaman login
        cy.visit("https://magento.softwaretestingboard.com/customer/account/login/");
      });

    //Testing script TC001 : Choose Product and add to Shopping cart 
    it('choose product',()=> {
        cy.login()

        // choose product and add to chart 
        cy.get(chooseProduct.categoryMenu).should('be.visible').click();
        cy.get(chooseProduct.subcategory).should('be.visible').click();
        cy.visit(chooseProduct.productLink);
        cy.get(chooseProduct.sizeOption).should('be.visible').click();
        cy.get(chooseProduct.colorOption).should('be.visible').click();
        cy.get(chooseProduct.quantityField).clear().type("1");
        cy.get(chooseProduct.btnAddToCart).should("be.visible").click();

        // Open cart and verify
        cy.get(chooseProduct.cartButton).should('be.visible').click();
        cy.contains("You added Breathe-Easy Tank to your shopping cart.").should("be.visible");
    })

    //Testing script TC002 : Add product without selecting size and color
    it('Add product without selecting size and color',()=> {
        cy.login()

        // Add product without selecting size and color
        cy.get(chooseProduct.categoryMenu).should('be.visible').click();
        cy.get(chooseProduct.subcategory).should('be.visible').click();
        cy.visit(chooseProduct.productLink);
        cy.get(chooseProduct.quantityField).clear().type("1");
        cy.get(chooseProduct.btnAddToCart).should('be.visible').click();

        // Open cart and verify
        cy.get(chooseProduct.cartButton).should('be.visible').click();
        cy.contains("This is a required field.").should("be.visible");
    })

    //Testing script TC003 : Choose product Select products with quantity below 1
    it('Choose product Select products with quantity below 1',()=> {
        cy.login()

        // Choose product Select products with quantity below 1
        cy.get(chooseProduct.categoryMenu).should('be.visible').click();
        cy.get(chooseProduct.subcategory).should('be.visible').click();
        cy.visit(chooseProduct.productLink);
        cy.get(chooseProduct.sizeOption).should('be.visible').click();
        cy.get(chooseProduct.colorOption).should('be.visible').click();
        cy.get(chooseProduct.quantityField).clear().type('0');
        cy.get(chooseProduct.btnAddToCart).should('be.visible').click();

        // Open cart and verify
        cy.get(chooseProduct.cartButton).should('be.visible').click();
        cy.contains("Please enter a quantity greater than 0.").should("be.visible");
    })

    // Update Shopping Cart
    //Testing script TC004 : Update Shopping Cart
    it('Update Shopping Cart',()=> {
        cy.login()

        // Choose product Select products with quantity below 1
        cy.get(chooseProduct.categoryMenu).should('be.visible').click();
        cy.get(chooseProduct.subcategory).should('be.visible').click();
        cy.visit(chooseProduct.productLink);
        cy.get(chooseProduct.sizeOption).should('be.visible').click();
        cy.get(chooseProduct.colorOption).should('be.visible').click();
        cy.get(chooseProduct.quantityField).clear().type('1');
        cy.get(chooseProduct.btnAddToCart).should('be.visible').click();

        // Open cart and verify
        cy.get(chooseProduct.cartButton).should('be.visible').click();
        cy.get(chooseProduct.editCart).should('be.visible').click();
        cy.get(chooseProduct.editItem).should('be.visible').click();
        cy.get(chooseProduct.sizeOption).should('be.visible').click();
        cy.get(chooseProduct.colorOption).should('be.visible').click();
        cy.get(chooseProduct.quantityField).clear().type('3');
        cy.get(chooseProduct.btnUpCart).should('be.visible').click();
        cy.wait(2000);
        cy.visit(chooseProduct.checkOutCartURL)
        cy.get(chooseProduct.updateButton).should('be.visible').click();


    })

      //Testing script TC005 : remove item in Shopping Cart
      it('remove item Shopping Cart',()=> {
        cy.login()

        // Choose product Select products with quantity below 1
        cy.get(chooseProduct.categoryMenu).should('be.visible').click();
        cy.get(chooseProduct.subcategory).should('be.visible').click();
        cy.visit(chooseProduct.productLink);
        cy.get(chooseProduct.sizeOption).should('be.visible').click();
        cy.get(chooseProduct.colorOption).should('be.visible').click();
        cy.get(chooseProduct.quantityField).clear().type('1');
        cy.get(chooseProduct.btnAddToCart).should('be.visible').click();

        // Open cart and verify
        cy.get(chooseProduct.cartButton).should('be.visible').click();
        cy.get(chooseProduct.editCart).should('be.visible').click();
        cy.get(chooseProduct.removeItemButton).should('be.visible').click();
        cy.get(chooseProduct.updateButton).should('be.visible').click();
    })

})