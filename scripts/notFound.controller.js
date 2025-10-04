ams.controller('notFoundController', ['$scope', '$http', '$state', 'baseUrl', function ($scope, $http, $state,baseUrl) {
    $scope.goToLoginPage = function () {
        $state.go('login');
    }
}]);