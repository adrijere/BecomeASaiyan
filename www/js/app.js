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
      "serie" : [],
      "poids" : 0,
      "modification" : false,
      "image": "img/avatar.jpg"
    },
    {
     "id" : 1,
     "exercice" : "Curl incliné",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image": "img/avatar.jpg"
   },
   {
     "id" : 2,
     "exercice" : "Curl marteau",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image": "img/avatar.jpg"       
   },
   {
     "id" : 3,
     "exercice" : "Curl concentré",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image": "img/avatar.jpg"
   },
   {
     "id" : 4,
     "exercice" : "Drag curl",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image": "img/avatar.jpg"
   },
   {
     "id" : 5,
     "exercice" : "Pupitre",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image": "img/avatar.jpg"
   }
   ];
   triceps = [
   {
     "id" : 6,
     "exercice" : "Dips",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 7,
     "exercice" : "Barre au front",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 8,
     "exercice" : "Développé couché serré",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 9,
     "exercice" : "Extension nuque",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 10,
     "exercice" : "Poulie haute",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   }
   ];

   dos = [{
     "id" : 0,
     "exercice" : "Traction pronation",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 1,
     "exercice" : "Traction supination",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 2,
     "exercice" : "Rowing pronation",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 3,
     "exercice" : "Rowing supination",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 4,
     "exercice" : "Soulevé de terre",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 5,
     "exercice" : "Tirage horizontal pronation",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 6,
     "exercice" : "Tirage horizontal supination",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   }
   ];

   jambes = [{
     "id" : 0,
     "exercice" : "Squat",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 1,
     "exercice" : "Front squat",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 2,
     "exercice" : "Leg curl",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 3,
     "exercice" : "Leg extension",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 4,
     "exercice" : "Presse",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 5,
     "exercice" : "Fentes",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   }
   ];

   epaules = [{
     "id" : 0,
     "exercice" : "Elévations latérales",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 1,
     "exercice" : "Elévations frontales",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 2,
     "exercice" : "Oiseau",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 3,
     "exercice" : "Shrug",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 4,
     "exercice" : "Développé militaire haltère",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 5,
     "exercice" : "Développé militaire barre",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   }
   ];

   pectoraux = [{
     "id" : 0,
     "exercice" : "Développé couché haltère",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 1,
     "exercice" : "Développé couché barre",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 2,
     "exercice" : "Développé incliné haltère",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 3,
     "exercice" : "Développé incliné barre",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 4,
     "exercice" : "Développé décliné haltère",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 5,
     "exercice" : "Développé décliné barre",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 6,
     "exercice" : "Développé écarté",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   },
   {
     "id" : 7,
     "exercice" : "Dips",
     "repetition" : 0,
     "serie" : [],
     "poids" : 0,
     "modification" : false,
     "image" : "img/avatar.jpg"
   }
   ];

   historique = [{
    "date": "01/01/1970",
    "_name": "Sangoku",
    "muscle": []
  }];

  profile = {
    "prenom": "Sangoku",
    "poids" : 80,
    "taille": "1m80",
    "but": "Prise de masse",
    "objectif": 85,
    "cout" : 0,
    "kcal": 2500,
    "nbrepas": 5
  };

  if(typeof(Storage) != "undefined") {
    if(localStorage.getItem("profile") == undefined)
      localStorage.setItem("profile", JSON.stringify(profile));
    if (localStorage.getItem("biceps") == undefined)
    	localStorage.setItem("biceps", JSON.stringify(biceps));
    if (localStorage.getItem("historique") == undefined)
      localStorage.setItem("historique", JSON.stringify(historique));
    if (localStorage.getItem("triceps") == undefined)
    	localStorage.setItem("triceps", JSON.stringify(triceps));
    if (localStorage.getItem("dos") == undefined)
      localStorage.setItem("dos", JSON.stringify(dos));
    if (localStorage.getItem("jambes") == undefined)
      localStorage.setItem("jambes", JSON.stringify(jambes));
    if (localStorage.getItem("epaules") == undefined)
      localStorage.setItem("epaules", JSON.stringify(epaules));
    if (localStorage.getItem("pectoraux") == undefined)
      localStorage.setItem("pectoraux", JSON.stringify(pectoraux));
  } else {
  	alert("Impossible de sauvegarder les informations sur votre mobile.");
  }
});
})

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url:'/home',
    cache: false,
    templateUrl:'templates/home.html'
  })
	$urlRouterProvider.otherwise('/home')
});
