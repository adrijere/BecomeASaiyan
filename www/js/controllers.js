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
	$scope.exercices = JSON.parse(localStorage.getItem("biceps"));
	$scope.triceps = JSON.parse(localStorage.getItem("triceps"));
	$scope.modifyValue = function(id) {
		if (id < 6)
			$scope.exercices[id].modification = !$scope.exercices[id].modification;
		else
			$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;	
	};
	$scope.changeValue = function(id) {
		if (id < 6) {
			$scope.exercices[id].modification = !$scope.exercices[id].modification;
			localStorage.setItem("biceps", JSON.stringify($scope.exercices));
		}
		else {
			$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;
			localStorage.setItem("triceps", JSON.stringify($scope.triceps));
		}
	};
})

.controller('seanceCtrl', function($scope, $state, $stateParams) {
	$scope.i = 0;
	$scope.j = 0;
	$scope.ex = [];
	$scope._name =[];
	for (var j = 0; j < $stateParams.ex.length; j++) {
		$scope._name[j] = $stateParams.ex[j];
		$scope.ex[j] = JSON.parse(localStorage.getItem($stateParams.ex[j]));
	}

	console.log($scope.ex);

	$scope.upCpt = function() {
		console.log("I : " + $scope.i);
		console.log("J : " + $scope.j);
		if ($scope.ex[$scope.i][$scope.j + 1] == undefined && $scope.ex[$scope.i + 1] == undefined)
			return; /* Envoyer vers le resumé de la séance */
		if ($scope.j < $scope.ex[$scope.i].length - 1)
			$scope.j = $scope.j + 1;
		else {
			$scope.i = $scope.i + 1;
			$scope.j = 0;
		}
	};
})
