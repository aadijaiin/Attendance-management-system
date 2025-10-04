ams.controller('loginController', ['$scope', '$http', '$state', 'baseUrl', function ($scope, $http, $state,baseUrl) {
    $scope.user = 'student';
    $scope.submit = function (id, password) {
        $http.get(`${baseUrl.url}${$scope.user+'s'}/${id}`).then(function (data) {
            if (data.data.password == password) {
                sessionStorage.setItem('data', JSON.stringify(data.data));
                $state.go($scope.user);
            } else alert('wrong credentials');
        }).catch(function (e) {
            alert('something went wrong')
        });
    }
}]);