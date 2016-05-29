angular.module('app.controllers', [])

.controller('entrainementCtrl', function($scope) {

})

.controller('historiqueCtrl', function($scope, $state) {
	$scope.historique = JSON.parse(localStorage.getItem("historique"));
	console.log($scope.historique);

	$scope.goResum = function(muscle) {
		$state.go('resumehisto', {ex: muscle});
	}

	$scope.deleteEx = function(index) {
		$scope.historique.splice(index, 1);
		localStorage.setItem("historique", JSON.stringify($scope.historique));
	}
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
		if (id < 6) {
			$scope.exercices[id].modification = !$scope.exercices[id].modification;
			localStorage.setItem("biceps", JSON.stringify($scope.exercices));
		}
		else
		{
			$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;	
			localStorage.setItem("triceps", JSON.stringify($scope.triceps));
		}
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
	$scope.upCpt = function() {
		console.log("I : " + $scope.i);
		console.log("J : " + $scope.j);
		if ($scope.ex[$scope.i][$scope.j + 1] == undefined && $scope.ex[$scope.i + 1] == undefined)
			$state.go('resume', { _name: "bras", ex: $scope.ex}); /* Envoyer vers le resumé de la séance */
		else if ($scope.j < $scope.ex[$scope.i].length - 1)
			$scope.j = $scope.j + 1;
		else {
			$scope.i = $scope.i + 1;
			$scope.j = 0;
		}
	};
})

.controller('resumeCtrl', function($scope, $state, $stateParams) {
	$scope._name = $stateParams._name;
	$scope.exercices = [];
	$scope.cpt = 0;
	for(var i = 0; $stateParams.ex[i]; i++) {
		for (var j = 0; $stateParams.ex[i][j]; j++) {
			$scope.exercices[$scope.cpt] = $stateParams.ex[i][j];
			$scope.cpt++;
		}
	}

	$scope.saveHisto = function() {
		$scope.historique = JSON.parse(localStorage.getItem("historique"));
		date = new Date();
		$scope.finseance = {
			"date": (date.getDate()) + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear()),
			"_name": "bras",
			"muscle": $scope.exercices
		};
		$scope.historique.unshift($scope.finseance);
		localStorage.setItem("historique", JSON.stringify($scope.historique));
		$state.go('home');
	};
})


.controller('resumeHistoriqueCtrl', function($scope, $state, $stateParams) {
	$scope.exercices = $stateParams.ex;
})