ams.controller('studentDashboardController', ['$scope', '$http', '$state','baseUrl', function ($scope, $http, $state, baseUrl) {
    $scope.name = JSON.parse(sessionStorage.getItem('data')).name
    $scope.date='2025-10-04'
    // $scope.submit=()
    $http.get(`${baseUrl.url}teachers`).then(function (res) {
        $scope.teachers = res.data
        console.log($scope.teachers);
    });
    let id = JSON.parse(sessionStorage.getItem('data')).id;
    $http.get(`${baseUrl.url}attendance/${id}`).then(function (res) {
        $scope.attendance = res.data.attendance;
    });
    $scope.logout = function() {
        $state.go('login');
    };
}]);