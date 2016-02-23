Meteor.methods({

    'getMeteorSettings': function () {
        return Meteor.settings;
    },

    'setMeteorSettings': function(parentSetting, valObj) {
        return Meteor.settings[parentSetting] = valObj;
    },

    'getMeteorServer': function () {
        return Meteor;
    }

});
