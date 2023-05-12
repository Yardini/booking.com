/// <reference types="Cypress" />

describe("QA Tool", function () {
  it("Verfiy the tile", function () {
    cy.visit("https://demoqa.com/")
    cy.get("#app [class='card mt-4 top-card']").should('have.length', 6)
    let a = ["Elements", "Forms", "Alerts, Frame & Windows", "Widgets", "Interactions", "Book Store Application"]
    cy.get("#app [class='card mt-4 top-card']").each((ele, index) => {
      // cy.log('inside each')
      let b = ele.text()
      expect(a[index]).to.eq(b)
    })
    cy.get("#app [class='card mt-4 top-card']").first().click()
    // cy.log('clicked')
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    // let name = ["Cierra", "Alden","Kierra"]
    // cy.get('[class="rt-td"]').each(())

  })

})



