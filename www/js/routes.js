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
    cache: false,
  	templateUrl: 'templates/historique.html',
  	controller: 'historiqueCtrl'
  })

.state('resumehisto', {
    url: '/history/resume',
    params:
    {
      ex: { array:true }
    },
    templateUrl: 'templates/resumehisto.html',
    controller: 'resumeHistoriqueCtrl'
  })

  .state('paramTres', {
  	url: '/settings',
    cache: false,
  	templateUrl: 'templates/paramTres.html',
  	controller: 'paramTresCtrl'
  })

  .state('informationsEtStatistiques', {
      url: '/infos_stats',
      cache: false,
  	templateUrl: 'templates/informationsEtStatistiques.html',
  	controller: 'informationsEtStatistiquesCtrl'
  })

  .state('chronomTre', {
  	url: '/chronometer',
    cache: false,
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

.state('dos', {
    url: '/dos',
    templateUrl: 'templates/dos.html',
    controller: 'dosCtrl'
  })

.state('jambes', {
    url: '/jambes',
    templateUrl: 'templates/jambes.html',
    controller: 'jambesCtrl'
  })

.state('epaules', {
    url: '/epaules',
    templateUrl: 'templates/epaules.html',
    controller: 'epaulesCtrl'
  })

.state('pectoraux', {
    url: '/pectoraux',
    templateUrl: 'templates/pectoraux.html',
    controller: 'pectorauxCtrl'
  })

  .state('seance', {
  	url: '/seance/{ex}',
    cache: false,
  	params: {
      ex: { array:true },
    _nameseance: {type: String} 
  },
  	templateUrl: 'templates/seance.html',
  	controller: 'seanceCtrl'
  })
    
	.state('resume', {
  	    url: '/seance/resume/',
        cache: false,
  	    params: {
          _nameseance: { type: String },
		ex: { array:true }
	    },
  	    templateUrl: 'templates/resume.html',
  	    controller: 'resumeCtrl'
  })

  .state('createSeance', {
    url: '/createSeance',
    templateUrl: 'templates/createSeance.html',
    controller: 'createSeanceCtrl'
  })

  $urlRouterProvider.otherwise('/page1/settings')
});
