angular.module('app.controllers', [])
     
.controller('entrainementCtrl', function($scope) {

})
   
.controller('historiqueCtrl', function($scope) {

})
   
.controller('paramTresCtrl', function($scope) {

})
      
.controller('informationsEtStatistiquesCtrl', function($scope) {

})
   
.controller('chronomTreCtrl', function($scope) {

})
   
    .controller('aProposDeNousCtrl', function($scope) {
	
    })
   
    .controller('brasCtrl', function($scope) {
	$scope.repetition = 0;
	$scope.poids = 0;
	$scope.modification = false;
	$scope.modifyValue = function() {
	    $scope.modification = !$scope.modification;
	};
	$scope.changeValue = function() {
	    $scope.repetition = $scope.rep;
	    $scope.poids = $scope.p;
	    $scope.modification = false;
	};
})

    .controller('modifyCtrl', function($scope, $stateParams) {
 	$scope.exercice = $stateParams.exercice;
    })
