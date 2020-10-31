var g = G$('John', 'Doe');

// use our chainable methods
g.greet().setLang('es').greet(true).log();

// let's use our object on the click of the login button
$('#login').click(function () {

  // create a new 'Greetr' object (let's pretend we know the name from the login)
  var loginGrtr = G$('John', 'Doe ');

  // hide the login on the screen
  $('#loginDiv').hide();

  // fire off an HTML greeting, passing the "#greeting" as the selector aswell as the chosen language, and then log the welcome.
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
