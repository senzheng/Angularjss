angular.module("cart",[])
     .factory("cart", function(){
     	var cartData = [];

     	

     	return {

     		addProduct: function (id, name, price){
                 var itemExisted = false;
                 for(var i = 0; i < cartData.length; i++){
                 	if(cartData[i].id == id){
                 		cartData[i].count++;
                 		itemExisted = true;
                 		break;
                 	}

                 }

                 if(itemExisted == false){
                 	cartData.push({
                       count: 1, id : id, price : price , name : name 
                 	});
                 }
     		},

     		removeProduct: function(id){
                  for(var i = 0; i < cartData.length; i++){
                  	if(cartData[i].id = id){
                  		cartData.splice(id,1);
                  		break;
                  	}
                  }
     		},

     		getProduct: function(){
                      return cartData;
     		}
     	}
     })
     .directive("cartSummary", function (cart){
     	return {
     		restrict: "E",
     		templateUrl: "components/cart/cartSummary.html",
     		controller: function($scope) {
     			var cartData = cart.getProduct();

     			$scope.total = function (){
     				var total = 0;
     				for(var i = 0; i < cartData.length; i++){
                         total = total + ( cartData[i].price * cartData[i].count );
     				}

     				return total;
     			}

     			$scope.itemCount = function(){
     				var total = 0;

     				for(var i = 0; i < cartData.length; i++){
     					total = total + cartData[i].count;
     				}
     				return total;
     			}
     		}
     	};
     });
