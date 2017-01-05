	// create the module and name it jobApp
	var jobApp = angular.module('jobApp', ['ngRoute']);

	// configure our routes
	jobApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			// route for the view results page
			.when('/view', {
				templateUrl : 'pages/view.html',
				controller  : 'viewController'
			})
 

			// route for the search controller
			.when('/?search', {
				templateUrl : 'pages/search.html',
				controller  : 'searchController'
			});
	});

	// create the controller and inject Angular's $scope component
	jobApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Lite v0.1';
	});

	jobApp.controller('aboutController', function($scope) {
		$scope.message = 'Insert text here';
	});

	jobApp.controller('contactController', function($scope) {
		/*$scope.message = 'change this to a settings page for notifications etc';*/
	});

	jobApp.controller('viewController', function($scope) { 

		$scope.message = jsonHandler(buildJobView);
	});

	jobApp.controller('searchController', function($scope) {
		// Event listener for the search button clicks
		console.log('hit');
		document.getElementById('mysearchJson').addEventListener("click", linkSearch);
  		$scope.message = linkSearch();
  		// $scope.result = linkSearch();
		/*$scope.message = searchJson();*/
	});

//////////



// Define multiple controllers
jobApp.controller('badCtrl', function($scope) {
var badFeelings = ["Disregarded", "Unimportant", "Rejected", "Powerless"];

$scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});


jobApp.controller('moodController', function($scope) {
var goodFeelings = ["Pleasure", "Awesome", "Lovable", "Inner Peace"];

$scope.good = goodFeelings[Math.floor((Math.random() * 4))];
});

