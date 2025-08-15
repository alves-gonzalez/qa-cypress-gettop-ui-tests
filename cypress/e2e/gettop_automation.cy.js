describe("Get Top Automation", () => {

    beforeEach(() => {
        cy.visit('https://gettop.us/')
    })


    it('Verify navigation Laptop button', () => {
        cy.contains('Laptops').click()

        cy.get('.woocommerce-breadcrumb').should('contain.text', 'Home / Laptop').then(() => {
            cy.log('Breadcrumb navigation is correct')
            console.log("Test Case Passed")
        })
    })


    it('Test suite 2 Add to cart', () =>{
        // Go to navigation and click on Laptops
        cy.contains('Laptops').click()
        cy.get('.woocommerce-breadcrumb').should('contain.text', 'Home / Laptop')

        // Click on the first product and add to cart
        cy.get('.product').eq(0).click()
        cy.contains('Add to cart').click()

        // Verify the product is added to the cart:
        cy.contains('View cart').click()
        
        // After navigation, verify the product is in cart
        cy.contains('ASUS Chromebook').should('be.visible').then(() => {
            cy.log('Product added to cart successfully')
            console.log("Test Case Passed")
        })

    })

    it.only('Test Product Search', () => {
        cy.get('[aria-label="Search"]').click()
        cy.get('[id="woocommerce-product-search-field-0"]').should('be.visible').type('chromebook')
        cy.wait(2000)
        cy.get('[class="icon-search"]').eq(1).click()

        //Verify search success:
        cy.contains('chromebook').should('be.visible').then(() => {
            cy.log('Product search executed successfully')
            console.log("Test Case Passed")
        })
    })

})