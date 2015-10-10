angular.module("sportsstore")
      .controller("checkoutController",function ($scope,cart){
              $scope.cartdata = cart.getProduct();

             $scope.total = function(){
                  var total = 0;

                  for(var i = 0; i < $scope.cartdata.length; i++){
                  	total = total + ($scope.cartdata[i].count * $scope.cartdata[i].price);
                  }
                  return total;
             }

             $scope.remove = function (id){
             	return cart.removeProduct(id);
             }
      });