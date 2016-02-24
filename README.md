# Meteor Clock (SVG)

This is a simple application created for practice writing unit, integration, and end-to-end tests. The base application was generated using 'meteor create --example clock'

The testing framework used is chimp with mocha (so far).

Changes made to application
* moved clock html to a template
* added bootstrap
* moved style properties to a css file
* TODO - add some server side testable code.


### Error
I am trying to execute the tests in this chapter using Chimp, without velocity. I have not added any testing related packages to my project. From within the tests, I am able to call a server method using server.call('someExistingMethod'). But when trying to execute code on the server using server.execute(), I get an error message stating I need to install xolvio:backdoor in my meteor app. If I add that package to my project, the app crashes. Has anybody else experienced this, and know what I may be doing wrong? Thanks. (I am using Chimp 0.30.0)

Chimp version 0.30.0

Chimp error message:
Error: [chimp] You need to install xolvio:backdoor in your meteor app before you can use server.execute()

Install xolvio:backdoor error (crashes app):

.../.meteor/local/build/programs/server/boot.js:283
}).run();
   ^
TypeError: Object [object Object] has no method 'methods'
    at Package (server.js:3:8)
    ...