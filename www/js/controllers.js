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
	$scope.exercices = [{
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
	$scope.triceps = [
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

	$scope.modifyValue = function(id) {
	    if (id < 6)
		$scope.exercices[id].modification = !$scope.exercices[id].modification;
	    else
		$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;	
	};
	$scope.changeValue = function(id) {
	    if (id < 6)
		$scope.exercices[id].modification = !$scope.exercices[id].modification;
	    else
		$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;
	};
})

    .controller('modifyCtrl', function($scope, $stateParams) {
 	$scope.exercice = $stateParams.exercice;
    })
