var m1=angular.module("DigitalLibraryModule",["usermodule","bookmodule","ngRoute"]);

		m1.config(function($routeProvider){
			$routeProvider.when("/home",{templateUrl:"home.html"})
			$routeProvider.when("/contact",{templateUrl:"contact.html"})
			$routeProvider.when("/about",{templateUrl:"about.html"})
			$routeProvider.when("/register",{
				templateUrl:"registration.html",
				controller:"regcontroller"})

			$routeProvider.when("/addbook",{
				templateUrl:"addbook.html",
				controller:"addbookcontroller"})

			$routeProvider.when("/showusers",{
				templateUrl:"showusers.html",
				controller:"showusercontroller"})

			$routeProvider.when("/showbooks",{
				templateUrl:"showbooks.html",
				controller:"showbookcontroller"})


			$routeProvider.otherwise({templateUrl:"home.html"})
			

		})

		var um=angular.module("usermodule",[]);
		um.controller("regcontroller",function($scope,$http){
			$scope.u1={};

			$scope.save=function(){
				$http.post("http://localhost:3000/users",$scope.u1).then((response)=>{
					alert("success");
				});
			}
		});

		um.controller("showusercontroller",function($scope,$http){
			$scope.users=[];

			$http.get("http://localhost:3000/users").then(function(response){
				$scope.users=response.data;
			});
		});


		var bm=angular.module("bookmodule",[]);
		bm.controller("addbookcontroller",function($scope,$http){
			$scope.books={};

			$scope.addBook=function(){
				$http.post("http://localhost:3000/books",$scope.books).then((response)=>{
					alert("success");
				});
			}
		});

		bm.controller("showbookcontroller",function($scope,$http){
			$scope.books=[];

			$http.get("http://localhost:3000/books").then(function(response){
				$scope.books=response.data;
			});
		});