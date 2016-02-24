describe('The global helper', function () {
    it("Should provide a value to the template", function () {

        var serverSettings = server.call('settings');
        console.log('server settings:', serverSettings);

        // Setup
        //var expectedTitle = 'Some Header.';
        //Meteor.settings.public.landingPage.header = expectedTitle;

        // Execute
        //var actualTitle = UI._globalHelpers.landingPageHeader();

        // Verify
        //expect(actualTitle).toBe(expectedTitle);

    });
});