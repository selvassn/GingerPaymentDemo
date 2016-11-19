angular.module('gingerPaymentsDemo', ['ngRoute', 'ngResource'])
	.config(function($routeProvider) {   

	    $routeProvider
	    .when("/add", {
	        templateUrl: 'add-payment.html',
	        controller: 'addPaymentController'
	    })	    
	    .otherwise({	       
	        templateUrl: 'payments.html',
	        controller: 'paymentsController'
	    });
});