angular.module("sportsstore")
        .constant("productlistActive","btn-primary")
        .constant("productlistPageCount",3)
        .controller("producListContrl", function ($scope, $filter, productlistActive, productlistPageCount, cart){
                 var selectCategory = null;

                 $scope.selectedPage = 1;
                 $scope.pageSize = productlistPageCount;
 

                 $scope.selectCategory = function(newCategory){
                 	selectCategory = newCategory;
                 	$scope.selectedPage = 1;
                 }

                 $scope.selectPage = function(newPage){
                 	$scope.selectedPage = newPage;
                 }

                 $scope.productListCtrl = function(item){
                 	return selectCategory == null || 
                 	       item.category == selectCategory;
                 }

                 $scope.getSelectCategory = function(category){
                 	return selectCategory == category ? productlistActive : ""; 
                 }

                 $scope.getPageClass = function (page){
                 	return $scope.selectedPage == page ? productlistActive : "";
                 }

                 $scope.addProductTocart = function (product) {
                        cart.addProduct (product.id, product.name, product.price);
                 }
});