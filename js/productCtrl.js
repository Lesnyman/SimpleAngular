productApp.controller("productCtrl", function ($scope, $http) {
    $http.get("http://localhost/comarch/Zadanie-baza.json")
            .success(function (response) {
                $scope.products = response;
            });
            
    $scope.getProductCtrlScope = function () {
        return $scope;
    };
    
    $scope.displayProductDetails = function (id) {
        for (var i = 0; i < $scope.products.length; i++)
        {
            if ($scope.products[i]._id === id)
            {
                $scope.name = $scope.products[i].name;
                $scope.date = $scope.products[i].registered.slice(0, 10);
                $scope.description = $scope.products[i].description;
                $scope.thumbnail = $scope.products[i].picture;
                $scope.price = $scope.products[i].price;
                $scope.id = id;
                $scope.productChosen = true;
                break;
            }
        }
    };
    
    $scope.addToCart = function () {
        $scope.itemCount += 1;
        $scope.cartCost += $scope.products[$scope.id].price;
    };

    $scope.id = 0;
    $scope.itemCount = 0;
    $scope.cartCost = 0;
    $scope.name = "";
    $scope.thumbnail = "";
    $scope.date = "";
    $scope.description = "";
    $scope.price = 0;
    $scope.productChosen = false;
});