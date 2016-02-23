describe('The global helper', function () {
    it("Should provide a value to the template", function () {

        // Testing
        var testSettings = {
            "landingPage": {
                "header": "Another setting."
            }
        };
        server.call('setMeteorSettings', 'public', testSettings);

        var serverSettings = server.call('getMeteorSettings');
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