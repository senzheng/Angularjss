angular.module("mainApp",["ngRoute"])
       .config(function ($routeProvider){
           $routeProvider.when("/login",{
                 templateUrl: "/views/login.html"
           });

           $routeProvider.when("/main",{
                 templateUrl: "/views/signin.html"
           });

           $routeProvider.otherwise({
                 redirectTo: "/login"
           });
       })