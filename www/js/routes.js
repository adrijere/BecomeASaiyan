angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('entrainement', {
  	url: '/training',
  	templateUrl: 'templates/entrainement.html',
  	controller: 'entrainementCtrl'
  })

  .state('historique', {
  	url: '/history',
  	templateUrl: 'templates/historique.html',
  	controller: 'historiqueCtrl'
  })

  .state('paramTres', {
  	url: '/settings',
  	templateUrl: 'templates/paramTres.html',
  	controller: 'paramTresCtrl'
  })

  .state('informationsEtStatistiques', {
  	url: '/infos_stats',
  	templateUrl: 'templates/informationsEtStatistiques.html',
  	controller: 'informationsEtStatistiquesCtrl'
  })

  .state('chronomTre', {
  	url: '/chronometer',
  	templateUrl: 'templates/chronomTre.html',
  	controller: 'chronomTreCtrl'
  })

  .state('aProposDeNous', {
  	url: '/aboutus',
  	templateUrl: 'templates/aProposDeNous.html',
  	controller: 'aProposDeNousCtrl'
  })

  .state('bras', {
  	url: '/bras',
  	templateUrl: 'templates/bras.html',
  	controller: 'brasCtrl'
  })

  .state('seance', {
  	url: '/seance/{ex}',
  	params: {ex: { array:true }},
  	templateUrl: 'templates/seance.html',
  	controller: 'seanceCtrl'
  })
    
	.state('resume', {
  	    url: '/seance/resume/',
  	    params: {
          _name: "some default",
		ex: { array:true }
	    },
  	    templateUrl: 'templates/resume.html',
  	    controller: 'resumeCtrl'
  })

  $urlRouterProvider.otherwise('/page1/settings')
});
