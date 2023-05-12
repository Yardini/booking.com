describe("123", function () {
    it("123", function () {
        cy.visit("https://www.amazon.in/")
        cy.get("#nav-search-dropdown-card").click().then((ele)=>{
            cy.log(ele)
            cy.get("#nav-search-dropdown-card select")
            .select('search-alias=stripbooks',{ force: true }).should('have.value','search-alias=stripbooks')
        })
        
        cy.get("#twotabsearchtextbox").click().type('rich dad poor dad')
        cy.get("#nav-search-submit-button").click()
        cy.get

    })

})