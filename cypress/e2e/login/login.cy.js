describe('Login an Account Tests - Magento', () => {

    const baseUrl = 'https://magento.softwaretestingboard.com';
    const validData = {
         firstName: 'melissa',
         lastName: 'elisabeth',
         email: `melissa@example.com`, // Email untuk tes positif
         password: 'ValidPassword123!',
         };
  
    beforeEach(() => {
       cy.visit(`${baseUrl}/customer/account/login/`);
       });
  
    it('Positive Test - Login with valid data', () => {
       cy.get('#email').type(validData.email);
       cy.get('#pass').type(validData.password);
       cy.get('button[class="action login primary"]').click();
  
       // Assert user is redirected to the account dashboard
       cy.url().should('include', '/customer/account/');
       cy.contains('My Account')
       });
  
    it('Negative Test - Invalid email', () => {
        cy.get('#email').type('invalid-email');
       cy.get('#pass').type(validData.password);
       cy.get('button[class="action login primary"]').click();
  
       //Assert error massage for invalid email
       cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
      });
  
    it('Negative Test - Invalid Pass', () => {
        cy.get('#email').type(validData.email);
        cy.get('#pass').type('invalid-pass');
        cy.get('button[class="action login primary"]').click();
      
        // Assert error message for invalid pass
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible')
      });     
  });
  