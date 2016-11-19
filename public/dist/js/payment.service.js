angular.module('gingerPaymentsDemo').factory('PaymentService', ['$resource',    function ($resource) {
       var getPaymentDetails =  $resource("/payments/:id", { id: '@id' }, { get: { isArray:true }}); 
       return getPaymentDetails;      
    }
]); 
