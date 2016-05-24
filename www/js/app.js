// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	cordova.plugins.Keyboard.disableScroll(true);
}
if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    biceps = [{
     "id" : 0,
     "exercice" : "Curl barre",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 1,
     "exercice" : "Curl incliné",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 2,
     "exercice" : "Curl marteau",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 3,
     "exercice" : "Curl concentré",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 4,
     "exercice" : "Drag curl",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 5,
     "exercice" : "Pupitre",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   }
   ];
   triceps = [
   {
     "id" : 6,
     "exercice" : "Dips",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 7,
     "exercice" : "Barre au front",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 8,
     "exercice" : "Développé couché serré",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 9,
     "exercice" : "Extension nuque",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   },
   {
     "id" : 10,
     "exercice" : "Poulie haute",
     "repetition" : 0,
     "poids" : 0,
     "modification" : false
   }
   ];


   if(typeof(Storage) != "undefined") {
    if (localStorage.getItem("biceps") == undefined)
    	localStorage.setItem("biceps", JSON.stringify(biceps));
    if (localStorage.getItem("triceps") == undefined)
    	localStorage.setItem("triceps", JSON.stringify(triceps));
  } else {
  	alert("Impossible de récupérer les informations sur vos exercices.");
  }
});
})

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url:'/home',
		templateUrl:'templates/home.html'
	})
	$urlRouterProvider.otherwise('/home')
});
