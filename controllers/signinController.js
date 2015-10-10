angular.module("mainApp").
      .constant("userUrl","http://localhost:5500/dashboard/consumer/")
      .controller("signupCtrl", function ($scope, $resource, userUrl){
          $scope.consumerResource = $resource(userUrl + ":id" ,{id : "@id"});


          $scope.createUser = function (item){
               new $scope.consumerResource(item).$save().then(function (newItem) {
                  $massage = "WelCome " + newItem.Name;
           	});
          }
      });