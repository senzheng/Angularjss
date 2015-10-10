angular.module("sportsstoreAdmin")
      .constant("productUrl", "http://localhost:5500/products/")
      .config(function ($httpProvider){
      	$httpProvider.defaults.withCredentials = true;
      })
      .controller("productsCtrl", function ($scope, $resource, productUrl){
           $scope.productResource = $resource(productUrl + ":id" ,{id : "@id"});

           $scope.listProducts = function (){
           	$scope.products = $scope.productResource.query();
           }

           $scope.deleteProduct = function (product){
           	product.$delete().then(function () {
           		$scope.products.splice($scope.products.indexOf(product), 1);
           	});
           }
           
           $scope.createProduct = function (product){
           	new $scope.productResource(product).$save().then(function (newProduct) {
                  $scope.products.push(newProduct);
                  $scope.editedProduct = null;
           	});
           }

           $scope.updateProduct = function (product){
           	     product.$save();
           	     $scope.editedProduct = null;
           }

            $scope.startProduct = function (product){
            	$scope.editedProduct = product;
            }

           $scope.cancelProduct = function (product){
           	     $scope.editedProduct = null;
           }

           $scope.listProducts();
      });