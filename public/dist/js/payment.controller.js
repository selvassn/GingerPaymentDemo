angular.module('gingerPaymentsDemo').controller('paymentsController', ['$scope', '$filter', '$location' ,'PaymentService', function($scope, $filter, $location, PaymentService) {
	
    //Retrieve all the payment details
    $scope.all = function(){
    	PaymentService.query().$promise.then(function(res){
        	$scope.payments = res;
    	});
    };

    $scope.callback = function(){      
        PaymentService.query(function(res){        
            //Added "-" to sort from higher denomination
            $scope.payments = $filter('limitTo')($filter('orderBy')(res, '-amount'), 20);
        });
    };

    $scope.promise = function(){
        PaymentService.get({'merchant': 'Ginger'}).$promise
        .then(function(res){          
            $scope.payments = res;
        });
    };

    $scope.filterPayment = function(paymentMethod){
       
    	if(paymentMethod === ""){
    		return $scope.all();
    	}    
    	PaymentService.query(function(res){            
            $scope.payments = $filter('filter')(res, { method: paymentMethod});
        });
    };

    $scope.navigateToAdd = function(){
         $location.path("/add" );
    }
    // Load all payments on page load
    $scope.all();
}]);