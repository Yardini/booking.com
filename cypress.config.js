const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     specPattern : 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
    },
    projectId: "tec2g8",
    defaultCommandTimeout: 10000,
    env:{
      url : "https://www.booking.com/"
    },

  
  },
});
