angular.module("sportsstore",["customFilters","cart","ngRoute"])
      .constant("dataUrl", "http://localhost:5500/products")
      .constant("orderUrl", "http://localhost:5500/orders")
      .config(function($routeProvider){

                $routeProvider.when("/checkout",{
                  templateUrl: "/views/checkSummary.html"
                });

                $routeProvider.when("/products",{
                  templateUrl: "/views/productList.html"
                })

                $routeProvider.when("/complete", {
                  templateUrl: "/views/thankYou.html"
                })

                $routeProvider.when("/placeorder", {
                  templateUrl: "/views/placeOrder.html"
                })

                $routeProvider.otherwise({
                  templateUrl: "/views/productlist.html"
                });



      })
      .controller("sportsstoreCtrl",function ($scope, $http, dataUrl, cart, $location, orderUrl){
               $scope.data = {};

               $http.get(dataUrl)
                   .success(function (data){
                      $scope.data.products = data;
                   })
                   .error(function (error){
                   	$scope.data.error = error;
                   });

              $scope.sendOrder = function (shippingDetails) {
                var order = angular.copy(shippingDetails);
                order.products = angular.copy(cart.getProduct());
                $http.post(orderUrl, order).success(function (data){
                  $scope.data = data;
                  $scope.showProducts = order.products;
                  cart.getProduct().length = 0;
                })
                .error(function (error){
                    scope.data.orderError = error;
                })
                .finally(function(){
                  //cart.getProduct().length = 0;
                  $location.path("/complete");
                  
                });
              }     
        });