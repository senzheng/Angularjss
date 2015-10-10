angular.module("sportsstoreAdmin",["ngRoute","ngResource"])
       .constant("orderUrl", "http://localhost:5500/orders")
       .constant("authUrl", "http://localhost:5500/users/login")
       .config(function ($routeProvider){
           $routeProvider.when("/adminlogin",{
                 templateUrl: "/views/adminLogin.html"
           });

           $routeProvider.when("/main",{
                 templateUrl: "/views/adminMain.html"
           });

           $routeProvider.otherwise({
                 redirectTo: "/adminlogin"
           });
       })
       .controller("authCtrl", function($scope, $http, $location, authUrl){
            $scope.authenticate = function (user, pass){
                 $http.post(authUrl,{
                 	    username: user,
                 	    password: pass
                 	    },{
                 	    	withCredentials: true
                 	    }).success(function (data){
                            $location.path("/main");
                 	    }).error(function(error){
                 	    	$scope.authenticationError = error;
                 	    });
            }
       })
       .controller("mainCtrl", function($scope){
       	  $scope.screen = ["Products","Orders"];
       	  $scope.current = $scope.screen[0];//init the current item

       	  $scope.setScreen = function(index){
              $scope.current = $scope.screen[index];
       	  };

       	  $scope.getScreen = function(){
       	  	  return $scope.current == "Products" ? "/views/adminProducts.html" : "views/adminOrders.html";
       	  }
       })
       .controller("orderCtrl", function ($scope, $http, orderUrl){
           
            $http.get(orderUrl, { withCredentials: true })
                   .success(function (data){
                      $scope.orders = data;
                   })
                   .error(function (error){
                   	$scope.error = error;
                   });

            $scope.selectedOrder;

            $scope.selectOrder = function (order){
                 $scope.selectedOrder = order;
            };

            $scope.calcTotal = function(order){
                 var total = 0;

                 for(var i = 0; i < order.products.length; i++){
                 	total = total + order.products[i].count * order.products[i].price;
                 }

                 return total;
            }
       });