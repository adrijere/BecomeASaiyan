angular.module('app.controllers', [])

.controller('mesExercicesCtrl', function($scope) {
    $scope.exos = JSON.parse(localStorage.getItem("mesExercices"));

    $scope.add = function() {
	var new_ex = { "name": "", "description" : "", "image" : "img/avatar.jpg" };
	new_ex.name = prompt("Nom de l'exercice ?");
	if (new_ex.name.length == 0){
	    alert("Nom invalide.");
	    return ;
	}
	$scope.exos.push(new_ex);
	localStorage.setItem("mesExercices", JSON.stringify($scope.exos));
    }

    $scope.deleteEx = function(id) {
	$scope.exos.splice(id, 1);
	localStorage.setItem("mesExercices", JSON.stringify($scope.exos));
    }

    $scope.edit = function(id) {
	new_ex = $scope.exos[id];
	new_name = prompt("Nom de l'exercice ?");
	if (new_name.length == 0){
	    alert("Nom invalide.");
	    return ;
	}
	new_ex.name = new_name;
	localStorage.setItem("mesExercices", JSON.stringify($scope.exos));
    }
})

.controller('entrainementCtrl', function($scope) {

})

.controller('historiqueCtrl', function($scope, $state) {
	$scope.historique = JSON.parse(localStorage.getItem("historique"));
	console.log($scope.historique);

	$scope.goResum = function(muscle) {
		$state.go('resumehisto', {ex: muscle});
	}

	$scope.deleteEx = function(index) {
		console.log(index);
		$scope.historique.splice(index, 1);
		localStorage.setItem("historique", JSON.stringify($scope.historique));
	}
})

.controller('paramTresCtrl', function($scope) {
	$scope.profile = JSON.parse(localStorage.getItem("profile"));

	$scope.saveProfile = function() {
		console.log($scope.profile);
		localStorage.setItem("profile", JSON.stringify($scope.profile));
	};
})

.controller('informationsEtStatistiquesCtrl', function($scope) {
    $scope.profile = JSON.parse(localStorage.getItem("profile"));
    $scope.prot = 2.2 * ($scope.profile.poids);
})

.controller('chronomTreCtrl', function($scope, $timeout) {
    $scope.timermin = 1;
    $scope.timersec = 0;
    var timer;

    $scope.onTimeout = function(){
        if($scope.timersec == 00)
	{
	    $scope.timermin--;
	    if ($scope.timermin == -1){
		$scope.timermin = 0;
		console.log("STOP");
		return (1);
	    }
	    $scope.timersec = 60;
	}
	$scope.timersec--;
        timer = $timeout($scope.onTimeout,1000);
    }
    
    $scope.start = function() {
	document.getElementById("start").disabled = true;
	document.getElementById("stop").disabled = false;
	timer = $timeout($scope.onTimeout,1000);
    }

    $scope.stop = function() {
	document.getElementById("start").disabled = false;
	$timeout.cancel(timer);
    }

    $scope.reset = function() {
	document.getElementById("start").disabled = false;
	document.getElementById("stop").disabled = true;
	$scope.timermin = 1;
	$scope.timersec = 0;
	$timeout.cancel(timer);
    }

    $scope.params = function() {
	var _min = prompt("Minute(s) :");
	if (!isNaN(_min) && _min >= 0)
	    $scope.timermin = _min;
	else
	    alert("Veuillez rentrer un nombre de minutes.");
	var _sec = prompt("Seconde(s) :");
	if (!isNaN(_sec) && _sec >= 0)
	    $scope.timersec = _sec;
	else
	    alert("Veuillez rentrer un nombre de secondes.");	
    }

    $scope.hiitMode = function() {
    }

})

.controller('aProposDeNousCtrl', function($scope) {})

.controller('brasCtrl', function($scope) {
$scope.exercices = JSON.parse(localStorage.getItem("biceps"));
$scope.triceps = JSON.parse(localStorage.getItem("triceps"));
$scope.modifyValue = function(id) {
	if (id < 6) {
		$scope.exercices[id].modification = !$scope.exercices[id].modification;
		localStorage.setItem("biceps", JSON.stringify($scope.exercices));
	}
	else {
		$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;	
		localStorage.setItem("triceps", JSON.stringify($scope.triceps));
	}
};

	$scope.changeValue = function(id) {
		if (id < 6) {
			$scope.exercices[id].modification = !$scope.exercices[id].modification;
			$scope.exercices[id].serie = new Array($scope.exercices[id].repetition);
			for (var i = 0; i < $scope.exercices[id].serie.length; i++) {
				$scope.exercices[id].serie[i] = "10@" + $scope.exercices[id].poids + "kg";
			}
			localStorage.setItem("biceps", JSON.stringify($scope.exercices));
		}
		else {
			$scope.triceps[id - 6].modification = !$scope.triceps[id - 6].modification;
			$scope.triceps[id - 6].serie = new Array($scope.triceps[id - 6].repetition);
			for (var i = 0; i < $scope.triceps[id - 6].serie.length; i++) {
				$scope.triceps[id - 6].serie[i] = "10@" + $scope.triceps[id - 6].poids + "kg";
			}
			localStorage.setItem("triceps", JSON.stringify($scope.triceps));
		}
	};
})

.controller('dosCtrl', function($scope) {
	$scope.dos = JSON.parse(localStorage.getItem("dos"));
	$scope.modifyValue = function(id) {
			$scope.dos[id].modification = !$scope.dos[id].modification;
			localStorage.setItem("dos", JSON.stringify($scope.dos));
	};
	$scope.changeValue = function(id) {
			$scope.dos[id].modification = !$scope.dos[id].modification;
			$scope.dos[id].serie = new Array($scope.dos[id].repetition);
			for (var i = 0; i < $scope.dos[id].serie.length; i++) {
				$scope.dos[id].serie[i] = "10@" + $scope.dos[id].poids + "kg";
			}
			localStorage.setItem("dos", JSON.stringify($scope.dos));
	};
})

.controller('jambesCtrl', function($scope) {
	$scope.jambes = JSON.parse(localStorage.getItem("jambes"));
	$scope.modifyValue = function(id) {
			$scope.jambes[id].modification = !$scope.jambes[id].modification;
			localStorage.setItem("jambes", JSON.stringify($scope.jambes));
	};
	$scope.changeValue = function(id) {
			$scope.jambes[id].modification = !$scope.jambes[id].modification;
			$scope.jambes[id].serie = new Array($scope.jambes[id].repetition);
			for (var i = 0; i < $scope.jambes[id].serie.length; i++) {
				$scope.jambes[id].serie[i] = "10@" + $scope.jambes[id].poids + "kg";
			}
			localStorage.setItem("jambes", JSON.stringify($scope.jambes));
	};
})

.controller('epaulesCtrl', function($scope) {
	$scope.epaules = JSON.parse(localStorage.getItem("epaules"));
	$scope.modifyValue = function(id) {
			$scope.epaules[id].modification = !$scope.epaules[id].modification;
			localStorage.setItem("epaules", JSON.stringify($scope.epaules));
	};
	$scope.changeValue = function(id) {
			$scope.epaules[id].modification = !$scope.epaules[id].modification;
			$scope.epaules[id].serie = new Array($scope.epaules[id].repetition);
			for (var i = 0; i < $scope.epaules[id].serie.length; i++) {
				$scope.epaules[id].serie[i] = "10@" + $scope.epaules[id].poids + "kg";
			}
			localStorage.setItem("epaules", JSON.stringify($scope.epaules));
	};
})

.controller('pectorauxCtrl', function($scope) {
	$scope.pectoraux = JSON.parse(localStorage.getItem("pectoraux"));
	$scope.modifyValue = function(id) {
			$scope.pectoraux[id].modification = !$scope.pectoraux[id].modification;
			localStorage.setItem("pectoraux", JSON.stringify($scope.pectoraux));
	};pectoraux
	$scope.changeValue = function(id) {
			$scope.pectoraux[id].modification = !$scope.pectoraux[id].modification;
			$scope.pectoraux[id].serie = new Array($scope.pectoraux[id].repetition);
			for (var i = 0; i < $scope.pectoraux[id].serie.length; i++) {
				$scope.pectoraux[id].serie[i] = "10@" + $scope.pectoraux[id].poids + "kg";
			}
			localStorage.setItem("pectoraux", JSON.stringify($scope.pectoraux));
	};
})

    .controller('seanceCtrl', function($scope, $state, $stateParams, $ionicPlatform) {
	$scope.i = 0;
	$scope.j = 0;
	$scope.ex = [];
	$scope._name =[];
	$scope._nameseance = $stateParams._nameseance;
	for (var j = 0; j < $stateParams.ex.length; j++) {
		$scope._name[j] = $stateParams.ex[j];
		$scope.ex[j] = JSON.parse(localStorage.getItem($stateParams.ex[j]));
	}
	for (var k = 0; k < $scope.ex.length; k++) {
		for (var l = 0; l < $scope.ex[k].length; l++) {
			console.log("Name: " + $scope.ex[k][l].exercice);
			console.log("Poids: " + $scope.ex[k][l].poids);
		    console.log("Reps: " + $scope.ex[k][l].repetition);
		    console.log("K: " + k + " && L : " + l);
			if ($scope.ex[k][l].poids <= 0 || $scope.ex[k][l].repetition <= 0)
			{
				console.log("Deleted...");
				$scope.ex[k].splice(l, 1);
				l--;
			}
			console.log("-----------");
		}
	}

    $scope.upCpt = function() {
		console.log("I : " + $scope.i);
		console.log("J : " + $scope.j);
		if ($scope.ex[$scope.i][$scope.j + 1] == undefined && $scope.ex[$scope.i + 1] == undefined)
			$state.go('resume', { _nameseance: $scope._nameseance, ex: $scope.ex}); /* Envoyer vers le resumé de la séance */
		else if ($scope.j < $scope.ex[$scope.i].length - 1)
			$scope.j = $scope.j + 1;
		else {
			$scope.i = $scope.i + 1;
			$scope.j = 0;
		}
	};
    $scope.editRep = function(index, i, j) {
	var _rep = prompt("Nombre de répétitions :");
	var tmp = $scope.ex[i][j].serie[index].split("@");
	if (!isNaN(_rep))
	    $scope.ex[i][j].serie[index] = _rep + '@' + tmp[1];
	else
	    alert("Veuillez rentrer un nombre.");
    };
    $scope.editPoids = function(index, i, j) {
	var _poids = prompt("Poids :");
	var tmp = $scope.ex[i][j].serie[index].split("@");
	if(!isNaN(_poids))
	    $scope.ex[i][j].serie[index] = tmp[0] + '@' + _poids + "kg";
	else
	    alert("Veuillez rentrer un nombre.");
    };

// Handle the back button when you are in a training session
	$ionicPlatform.registerBackButtonAction(function (event) {
	    event.preventDefault();
	    $ionicHistory.goBack();
	}, 100);
})

.controller('resumeCtrl', function($scope, $state, $stateParams) {
	$scope._nameseance = $stateParams._nameseance;
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
			"_name": $scope._nameseance,
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

.controller('createSeanceCtrl', function($scope) {
    $scope.exercices = ["mesExercices"];

    $scope.add_exos = function(name) {
		if ($scope.exercices.indexOf(name) == -1){
	    	$scope.exercices.push(name);
	    }
		else{
	    	$scope.exercices.splice($scope.exercices.indexOf(name), 1);
		}
    }
    
    $scope.ShowGroupes = function(id) {
	if(document.getElementById(id).style.display=="none"){
	    document.getElementById(id).style.display="block";
	}
	else{
	    document.getElementById(id).style.display="none";
	}
    };
})

    .controller('createSeance2Ctrl', function($scope, $state, $stateParams) {
	$scope.mesexos = JSON.parse(localStorage.getItem("mesExercices"));
	$scope.exercices = $stateParams.exercices;
	$scope.exos = [];
	console.log("Exos: " + $scope.exercices);
	for (var i = 0; i < $scope.exercices.length; i++) {
	    if ($scope.exercices[i] == "Fullbody") {
		var tmp = document.getElementsByClassName("Pectoraux");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Grandsdorsaux");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Rhomboides");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Trapezes");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Biceps");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Triceps");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Avantbras");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Deltoides");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Quadriceps");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Ischios");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Mollets");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
		var tmp = document.getElementsByClassName("Abdominaux");
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
	    }
	    else {
		var tmp = document.getElementsByClassName($scope.exercices[i]);
		for (j = 0; j < tmp.length; j++) {
		    tmp[j].style.display = "block";
		}
	    }
	}
	
	$scope.add_exos = function(name) {
	    if ($scope.exos.indexOf(name) == -1){
		$scope.exos.push(name);
	    }
	    else{
		$scope.exos.splice($scope.exos.indexOf(name), 1);
	    }
	};

	$scope.goTimer = function(exos) {
	    if (exos == null || exos.length == 0)
		alert("Vous devez choisir au moins un exercice.");
	    else
		$state.go('createSeance3', {exos: exos});
	};
    })

    .controller('createSeance3Ctrl', function($scope, $state, $stateParams) {
	$scope.exos = $stateParams.exos;
		
	$scope.moveItem = function(item, fromIndex, toIndex) {
	    $scope.exos.splice(fromIndex, 1);
	    $scope.exos.splice(toIndex, 0, item);
	};
    })
		
    .controller('createSeance4Ctrl', function($scope, $state, $stateParams) {
	$scope.exos = $stateParams.exos;
	console.log("Exos : " + $scope.exos);
	$scope.seriemin = 1;
	$scope.exmin = 3;
	$scope.seriesec = 30;
	$scope.exsec = 0;
	
	$scope.timerserie = function() {
	    var _min = prompt("Minute(s) :");
	    if (!isNaN(_min) && _min >= 0)
		$scope.seriemin = _min;
	    else
		alert("Veuillez rentrer un nombre de minutes.");
	    var _sec = prompt("Seconde(s) :");
	    if (!isNaN(_sec) && _sec >= 0)
		$scope.seriesec = _sec;
	    else
		alert("Veuillez rentrer un nombre de secondes.");	
	}
	
	$scope.timerex = function() {
	    var _min = prompt("Minute(s) :");
	    if (!isNaN(_min) && _min >= 0)
		$scope.exmin = _min;
	    else
		alert("Veuillez rentrer un nombre de minutes.");
	    var _sec = prompt("Seconde(s) :");
	    if (!isNaN(_sec) && _sec >= 0)
		$scope.exsec = _sec;
	    else
		alert("Veuillez rentrer un nombre de secondes.");	
	}
    })

    .controller('seancePersoCtrl', function($scope, $state, $stateParams, $timeout, $ionicPopup, $ionicPlatform) {
	$scope.exos = $stateParams.exos;
	$scope.seriemin = $stateParams.seriemin;
	$scope.seriesec = $stateParams.seriesec;
	$scope.exmin = $stateParams.exmin;
	$scope.exsec = $stateParams.exsec;

	$scope.i = 0;
	$scope.j = 0;
	$scope.ex = [];
	$scope.ex[0] = [];
	for (var j = 0; j < $stateParams.exos.length; j++) {
	    $scope.ex[0].push({"repetition" : 0, "exercice" : "", "poids": 0, "serie" : ["10@20kg","10@20kg","10@20kg","10@20kg"]});
	    $scope.ex[0][j].exercice = $stateParams.exos[j];
	    $scope.ex[0][j].repetition = 4;
	    $scope.ex[0][j].poids = 20;
	}

    $scope.upCpt = function() {
		if ($scope.ex[$scope.i][$scope.j + 1] == undefined && $scope.ex[$scope.i + 1] == undefined)
			$state.go('resume', { _nameseance: "personnalisée", ex: $scope.ex}); /* Envoyer vers le resumé de la séance */
	else if ($scope.j < $scope.ex[$scope.i].length - 1) {
	    $scope.timermin = $scope.exmin;
	    $scope.timersec = $scope.exsec;
	    var timer;
	    var myPopup = $ionicPopup.show({
		template: '{{timermin}}:{{timersec}}',
		title: 'Temps de repos avant le prochain exercice',
		scope: $scope,
		buttons: [
		    { text: 'Fermer',
		      onTap: function(e) {
			  $timeout.cancel(timer);
		      }
 },
		    { text: '<b>Lancer</b>',
		    type: 'button-positive lancer',
		      onTap: function(e) {
			  e.preventDefault();
			  document.getElementsByClassName("lancer")[0].disabled = true;
			  timer = $timeout($scope.onTimeout,1000);
		      }
		    }
		]
	    });	
	$scope.j = $scope.j + 1;
	}
		else {
	    $scope.timermin = $scope.exmin;
	    $scope.timersec = $scope.exsec;
	    var timer;
	    var myPopup = $ionicPopup.show({
		template: '{{timermin}}:{{timersec}}',
		title: 'Temps de repos avant le prochain exercice',
		scope: $scope,
		buttons: [
		    { text: 'Fermer',
		      onTap: function(e) {
			  $timeout.cancel(timer);
		      }
		    },
		    { text: '<b>Lancer</b>',
		      type: 'button-positive lancer',
		      onTap: function(e) {
			  e.preventDefault();
			  document.getElementsByClassName("lancer")[0].disabled = true;
			  timer = $timeout($scope.onTimeout,1000);
		      }
		    }
		]
	    });	
		    $scope.i = $scope.i + 1;
		    $scope.j = 0;
		}
    };
	
	$scope.editRep = function(index, i, j) {
	    var _rep = prompt("Nombre de répétitions :");
	    var tmp = $scope.ex[i][j].serie[index].split("@");
	if (!isNaN(_rep))
	    $scope.ex[i][j].serie[index] = _rep + '@' + tmp[1];
	else
	    alert("Veuillez rentrer un nombre.");
    };
    $scope.editPoids = function(index, i, j) {
	var _poids = prompt("Poids :");
	var tmp = $scope.ex[i][j].serie[index].split("@");
	if(!isNaN(_poids))
	    $scope.ex[i][j].serie[index] = tmp[0] + '@' + _poids + "kg";
	else
	    alert("Veuillez rentrer un nombre.");
    };

	$scope.deleteSerie = function(index, i, j) {
	    $scope.ex[i][j].serie.splice(index, 1);
	    $scope.ex[i][j].repetition -= 1;
	}

	$scope.addSerie = function(i, j) {
	    $scope.ex[i][j].serie.push("10@20kg");
	    $scope.ex[i][j].repetition += 1;
	}

 $scope.onTimeout = function(){
        if($scope.timersec == 00)
	{
	    $scope.timermin--;
	    if ($scope.timermin == -1){
		$scope.timermin = 0;
		return (1);
	    }
	    $scope.timersec = 60;
	}
	$scope.timersec--;
     timer = $timeout($scope.onTimeout,1000);
    }
   

	$scope.chronoSerie = function() {
	    $scope.timermin = $scope.seriemin;
	    $scope.timersec = $scope.seriesec;
	    console.log("timermin : " + $scope.timermin);
	    var timer;
	    var myPopup = $ionicPopup.show({
			template: '{{timermin}}:{{timersec}}',
			title: 'Temps de repos avant la prochaine série',
			scope: $scope,
			buttons: [
			    { text: 'Fermer', 
			      onTap: function(e) {
				  $timeout.cancel(timer);
			      } 
			    },
			    { text: '<b>Lancer</b>',
			      type: 'button-positive lancer',
			      onTap: function(e) {
				  e.preventDefault();
				  document.getElementsByClassName("lancer")[0].disabled = true;
				  timer = $timeout($scope.onTimeout,1000);
			      }
			    }
			]
	    });
	}


// Handle the back button when you are in a training session
	$ionicPlatform.registerBackButtonAction(function (event) {
	    event.preventDefault();
	    $ionicHistory.goBack();
	}, 100);

    })