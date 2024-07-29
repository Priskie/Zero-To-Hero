const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://staging.trymima.com',
      chromeWebSecurity: false,
      viewportHeight: 938,
      viewportWidth: 1520,
      defaultCommandTimeout: 10000,
      watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
});
