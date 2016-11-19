angular.module('gingerPaymentsDemo').controller('addPaymentController', function($scope, PaymentService) {

    $scope.addPayment = function(){

        var payment = new PaymentService($scope.payment);
        payment.created = new Date().toString();

        payment.$save()
        .then(function(data, res){
            $scope.success = true;
        })
        .catch(function(err){
            $scope.success = false;          
        });
    };

});