ams.controller('teacherDashboardController', ['$scope', '$http', '$state', function ($scope, $http,$state) {
    $scope.subject = JSON.parse(sessionStorage.getItem('data')).subject.toUpperCase()
    $scope.name = JSON.parse(sessionStorage.getItem('data')).name
    $scope.logout = function() {
        $state.go('login');
    };
    $http.get(`http://localhost:3000/students`).then(function (res) {
        $scope.students = res.data
        console.log($scope.students);
    });
}]);