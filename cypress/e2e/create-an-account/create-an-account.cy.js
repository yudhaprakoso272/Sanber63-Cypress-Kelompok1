describe('Create an Account Tests - Magento', () => {

  const baseUrl = 'https://magento.softwaretestingboard.com';
  const validData = {
       firstName: 'fauzi',
       lastName: 'ahmad',
       email: `test${Date.now()}@example.com`, // Email unik untuk tes positif
       password: 'ValidPassword123!',
       };

  beforeEach(() => {
     cy.visit(`${baseUrl}/customer/account/create/`);
     });

  it('Positive Test - Create account with valid data', () => {
     cy.get('#firstname').type(validData.firstName);
     cy.get('#lastname').type(validData.lastName);
     cy.get('#email_address').type(validData.email);
     cy.get('#password').type(validData.password);
     cy.get('#password-confirmation').type(validData.password);
     cy.get('button[title="Create an Account"]').click();

     // Assert user is redirected to the account dashboard
     cy.url().should('include', '/customer/account/');
     cy.contains('My Account')
     });

  it('Negative Test - Empty first name', () => {
     cy.get('#lastname').type(validData.lastName);
     cy.get('#email_address').type(validData.email);
     cy.get('#password').type(validData.password);
     cy.get('#password-confirmation').type(validData.password);
     cy.get('button[title="Create an Account"]').click();

     //Assert error massage for first name
     cy.contains('This is a required field.').should('be.visible')
    });

    it('Negative Test - Empty Last Name', () => {
      cy.get('#firstname').type(validData.firstName);
      cy.get('#email_address').type(validData.email);
      cy.get('#password').type(validData.password);
      cy.get('#password-confirmation').type(validData.password);
      cy.get('button[title="Create an Account"]').click();
    
      // Assert error message for empty last name
      cy.contains('This is a required field.').should('be.visible')
    });

  it('Negative Test - Invalid email', () => {
     cy.get('#firstname').type(validData.firstName);
     cy.get('#lastname').type(validData.lastName);
     cy.get('#email_address').type('invalid-email');
     cy.get('#password').type(validData.password);
     cy.get('#password-confirmation').type(validData.password);
     cy.get('button[title="Create an Account"]').click();
     //Assert error massage for invalid email
     cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible')
  });

  it('Negative Test - Password and Confirm Password Mismatch', () => {
      cy.get('#firstname').type(validData.firstName);
      cy.get('#lastname').type(validData.lastName);
      cy.get('#email_address').type(validData.email);
      cy.get('#password').type('ValidPassword123!');
      cy.get('#password-confirmation').type('DifferentPassword123!');
      cy.get('button[title="Create an Account"]').click();
      
      //Assert error massage for password mismatch
      cy.contains('Please enter the same value again.').should('be.visible')

    });

  it('Negative Test - Weak Password', () => {
      cy.get('#firstname').type(validData.firstName);
      cy.get('#lastname').type(validData.lastName);
      cy.get('#email_address').type(validData.email);
      cy.get('#password').type('123'); // Weak password
      cy.get('#password-confirmation').type('123');
      cy.get('button[title="Create an Account"]').click();

      //Assert errormassage for weak password
      cy.contains('Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.').should('be.visible')
    });     
});
