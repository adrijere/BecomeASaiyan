angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.entrainement', {
    url: '/training',
    views: {
      'tab1': {
        templateUrl: 'templates/entrainement.html',
        controller: 'entrainementCtrl'
      }
    }
  })

  .state('tabsController.historique', {
    url: '/history',
    views: {
      'tab2': {
        templateUrl: 'templates/historique.html',
        controller: 'historiqueCtrl'
      }
    }
  })

  .state('tabsController.paramTres', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/paramTres.html',
        controller: 'paramTresCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
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

$urlRouterProvider.otherwise('/page1/settings')

  

});