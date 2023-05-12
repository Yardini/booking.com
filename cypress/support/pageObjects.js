class PageObjects{

    getStay(){
        return cy.get('#accommodations')
    }
    getFlights(){
        return cy.get('#flights')
    }
    getRoundTrip(){
        return cy.get('#basiclayout input[id="search_type_option_ROUNDTRIP"]')
    }
    getRoundTripTextElement(){
        return cy.get('#basiclayout input[id="search_type_option_ROUNDTRIP"]+label')
    }
    getOneWay(){
        return cy.get('#basiclayout input[id="search_type_option_ONEWAY"]')
    }
    getOneWayTextElement(){
        return cy.get('#basiclayout input[id="search_type_option_ONEWAY"]+label')
    }
    getMultiStop(){
        return cy.get('#basiclayout input[id="search_type_option_MULTISTOP"]')
    }
    getMultiStopTextElement(){
        return cy.get('#basiclayout input[id="search_type_option_MULTISTOP"]+label')
    }
    getEconomy(){
        return cy.get('#basiclayout select[title="Cabin class"] option[value="ECONOMY"]')
    }
    getBusniess(){
        return  cy.get('#basiclayout select[title="Cabin class"]')
    }
    getScopeTraveller(){
        return cy.get('#basiclayout button:nth-child(3)>span:nth-child(1)')
    }
    getAdult(){
        return cy.get('[data-ui-name="occupancy_adults"] label')
    }
    getAdultAddButton(){
        return cy.get('[data-ui-name="occupancy_adults"] button:last-child')
    }
    getAdultNoOfPassenger(){
        return cy.get('[data-ui-name="occupancy_adults"] button:first-child+span')
    }
    getTravellerDoneButton(){
        return cy.get('[data-ui-name="button_occupancy_action_bar_done"]')
    }
    getDirectFlight(){
        return cy.get('#basiclayout #direct_flights_input_checkbox')
    }
    getStartLocationScope(){
        return cy.get('#basiclayout button[data-ui-name="input_location_from_segment_0"]')
    }
    getEndLocationScope(){
        return cy.get('#basiclayout button[data-ui-name="input_location_to_segment_0"]')
    }
    getLocationPlaceHolder(){
        return cy.get('input[placeholder="Airport or city"]')
    }
    getLocationListItem(){
        return cy.get('div ul li[data-ui-name="locations_list_item"]')
    }
    getCalenderScope(){
        return cy.get(' button[data-ui-name="button_date_segment_0"]')
    }
    getDatesSlection(){
        return cy.get('[data-ui-name="calendar_body"] [class^="Calendar-module__monthWrapper"]:nth-child(2) table tbody tr:nth-child(2)  td:nth-child(3)')
    }
    getSeachButton(){
        return cy.get('[data-ui-name="button_search_submit"]')
    }
    getCheapest(){
        return cy.get('[data-testid="search_tabs_CHEAPEST"]')
    }
    getSelectingCheapest(){
        return cy.get('#flightcard-0 button')
    }
    getCheckout(){
        return  cy.get('[data-testid="flight_details_inner_modal_select_button"]')
    }
    // get(){
    //     return
    // }
    


}
export default PageObjects;