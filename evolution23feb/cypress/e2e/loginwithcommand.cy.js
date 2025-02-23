describe('login test with command', () => {
    it('should be login sucessfully', () => {
        
        cy.login("standard_user","secret_sauce")

        cy.url().should("include","/inventory.html")
    });
});