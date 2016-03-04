module.exports = function() {
    this.Given(/^I have created a landing page with a heading$/, function () {
        // test being able to execute a function on server
        var serverSettings = server.execute(function () {
            return Meteor.settings;
        });
        console.log('server settings:', serverSettings);
    });

    this.When(/^a user navigates to my page$/, function () {
        client.url(process.env.ROOT_URL);
    });

    this.Then(/^they can see the heading$/, function () {
        client.waitForExist('h1');
        var actualHeading = client.getText('h1');
        expect(actualHeading).to.equal('Analog Clock.');
    });
};
