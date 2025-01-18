Cypress.on('uncaught:exception', (err) => {
    // Ignore errors containing 'clone'
    if (err.message.includes('clone')) {
        return false; // Prevent Cypress from failing the test
    }
});

import './commands'