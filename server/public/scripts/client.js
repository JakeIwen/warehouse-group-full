var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/warehouse' ,{
      templateUrl: '/views/templates/warehouse.html',
      controller: 'WarehouseController',
      controllerAs: 'warehouse'
    })
    .when('/orders' ,{
      templateUrl: '/views/templates/orders.html',
      controller: 'OrdersController',
      controllerAs: 'orders'
    })
    .when('/customers' ,{
      templateUrl: '/views/templates/customers.html',
      controller: 'CustomersController',
      controllerAs: 'customers'
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
// Home controller
app.controller('HomeController', function() {
  console.log('home controller running');
  var self = this;
  self.message = "Home controller is the bestest!";

});
// Warehouse controller
app.controller('WarehouseController', ["$http", function($http) {
  console.log('warehouse controller running');
  var self = this;
  self.message = "Warehouse controller is the best!";
  $http.get('/tables/warehouse')
  .then(function(response) {
    console.log(response.data);
    self.data = response.data;
  });

  function searchReturn(product){
    $http.get('/tables/search/' + product)
    .then(function(response) {
      console.log(response.data);
      self.data = response.data;
    });


  }
}]);
// Orders Controller
app.controller('OrdersController', function() {
  console.log('orders controller running');
  var self = this;
  self.message = "Orders controller is the best!";

});
// Customers controller
app.controller('CustomersController', ["$http", function($http) {
  console.log('customers controller running');
  var self = this;
  self.message = "Customers controller is the best!";

  $http.get('/tables/customers')
   .then(function(response) {
     console.log(response.data);
     self.data = response.data;
   });

}]);


// Orders controller
app.controller('OrdersController', ["$http", function($http) {
  console.log('orders controller running');
  var self = this;
  self.message = "Orders controller is the best!";

  $http.get('/tables/orders')
   .then(function(response) {
     console.log(response.data);
     self.data = response.data;
   });

}]);
