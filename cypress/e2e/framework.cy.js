/// <reference types="Cypress" />
import PageObjects from "../support/pageObjects"


describe('booking.com', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('url'), { headers: { "Accept-Encoding": "gzip, deflate", timeout: 100000 } })
        // 
        cy.fixture('booking.json').as('data')

    })


    it('Dafult page', function () {
        const pageObjects = new PageObjects()
        pageObjects.getStay().then((Element) => {
            const a = Element.text()
            if (a.includes('Stays')) {
                expect(a).to.eq('Stays')
            }
        })

        pageObjects.getStay().then((value) => {
            var b = value.attr('aria-current')
            cy.log(b, "value of the dafault page ")
            expect(b).to.eq('page')

        })

        pageObjects.getFlights().click()

        pageObjects.getRoundTrip().should('be.checked').and('have.value', 'ROUNDTRIP')
        cy.customizeCommand(pageObjects.getRoundTripTextElement(), 'Round trip')

        pageObjects.getOneWay().should('not.be.checked').and('have.value', 'ONEWAY')
        cy.customizeCommand(pageObjects.getOneWayTextElement(), 'One way')

        pageObjects.getMultiStop().should('not.be.checked').and('have.value', 'MULTISTOP')
        cy.customizeCommand(pageObjects.getMultiStopTextElement(), 'Multi-city')

    })

    it('abc fight booking', function () {

        cy.get('@data').then((data) => {
            const pageObjects = new PageObjects()
            pageObjects.getFlights().click()
            pageObjects.getOneWay().check().should('be.checked')
            pageObjects.getEconomy().should('be.selected').and('have.value', 'ECONOMY')
            cy.log('default selected is economy verfied')
            pageObjects.getBusniess().select('BUSINESS').should('have.value', 'BUSINESS')
            cy.log('swithced to business class')
            pageObjects.getScopeTraveller().click()
            cy.log('getting in to the scope of number of travelers')
            pageObjects.getAdult()
                .contains('Adult')
            pageObjects.getAdultAddButton()
                .click()
                .click()
            pageObjects.getAdultNoOfPassenger().contains('3')
            pageObjects.getTravellerDoneButton().click()
            pageObjects.getDirectFlight().check().should('be.checked')
            pageObjects.getStartLocationScope().click()
            pageObjects.getLocationPlaceHolder()
                .click()
                .type('{backspace}')
                .type(data.place[0].startPlace)

            pageObjects.getLocationListItem().then((ele) => {
                var aa = ele.text()
                cy.log(aa)
                if (aa.includes(data.place[0].startPlace)) {
                    cy.wrap(ele).click()
                    expect(aa).to.includes(data.place[0].startPlace)
                }
            })

            pageObjects.getEndLocationScope().click()
            pageObjects.getLocationPlaceHolder()
                .click()
                .type('{backspace}')
                .type(data.place[0].endPlace)
            pageObjects.getLocationListItem().then((ele) => {
                var af = ele.text()
                cy.log(af)
                if (af.includes(data.place[0].endPlace)) {
                    cy.wrap(ele).click()
                    expect(af).to.includes(data.place[0].endPlace)
                }
            })




            // data.place[0].startPlace
            // data.place[0].endPlace

            // data[1].place[1].startplace
            // data[1].place[1].endplace


            pageObjects.getCalenderScope().click()
            pageObjects.getDatesSlection().click()
            pageObjects.getSeachButton().click()
            Cypress.config('defaultCommandTimeout',6000)
            pageObjects.getCheapest().click()
            pageObjects.getSelectingCheapest().click()
            pageObjects.getCheckout().click()

        })

    })

})
