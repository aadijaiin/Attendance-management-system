let ams = angular.module('ams', ['ui.router']);

ams.config(function ($stateProvider) {
    let loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'templates/login.html'
    }
    let studentDashboardState = {
        name: 'student',
        url: '/student',
        templateUrl: 'templates/studentDashboard.html'
    }
    let landingState = {
        name: 'landing',
        url: '',
        templateUrl: 'templates/login.html'
    }
    let teacherDashboardState = {
        name: 'teacher',
        url: '/teacher',
        templateUrl: 'templates/teacherDashboard.html'
    }
    let mySubjectsState = {
        name: 'student.mySubjects',
        url: '/mySubjects',
        templateUrl: 'templates/mySubjects.html'
    }
    let myAttendanceState = {
        name: 'student.myAttendance',
        url: '/myAttendance',
        templateUrl: 'templates/myAttendance.html'
    }
    let myStduentsState = {
        name: 'teacher.myStudents',
        url: '/myStudents',
        templateUrl: 'templates/myStudents.html'
    }
    let markAttendanceState = {
        name: 'teacher.markAttendance',
        url: '/markAttendance',
        templateUrl: 'templates/markAttendance.html'
    }
    let mathsSyllabusState = {
        name: 'student.mathsSyllabus',
        url: '/mathsSyllabus',
        templateUrl: 'templates/syllabus/mathsSyllabus.html'
    }
    let englishSyllabusState = {
        name: 'student.englishSyllabus',
        url: '/englishSyllabus',
        templateUrl: 'templates/syllabus/englishSyllabus.html'
    }
    let hindiSyllabusState = {
        name: 'student.hindiSyllabus',
        url: '/hindiSyllabus',
        templateUrl: 'templates/syllabus/hindiSyllabus.html'
    }
    let scienceSyllabusState = {
        name: 'student.scienceSyllabus',
        url: '/scienceSyllabus',
        templateUrl: 'templates/syllabus/scienceSyllabus.html'
    }
    let csSyllabusState = {
        name: 'student.csSyllabus',
        url: '/csSyllabus',
        templateUrl: 'templates/syllabus/csSyllabus.html'
    }
    let studentProfileState = {
        name: 'student.profile',
        url: '/profile',
        templateUrl: 'templates/studentProfile.html'
    }
    let teacherProfileState = {
        name: 'teacher.profile',
        url:'/profile',
        templateUrl: 'templates/teacherProfile.html'
    }
    let attendanceOnDateState = {
        name: 'student.attendanceOnDate',
        url: '/attendanceOnDate',
        templateUrl: 'templates/attendanceOnDate.html'
    }
    let notFoundState = {
        name: 'otherwise',
        url: '*path',
        templateUrl: 'templates/404.html'
    }
    $stateProvider.state(loginState);
    $stateProvider.state(studentDashboardState);
    $stateProvider.state(teacherDashboardState);
    $stateProvider.state(landingState);
    $stateProvider.state(mySubjectsState);
    $stateProvider.state(myAttendanceState);
    $stateProvider.state(myStduentsState);
    $stateProvider.state(markAttendanceState);
    $stateProvider.state(mathsSyllabusState);
    $stateProvider.state(englishSyllabusState);
    $stateProvider.state(hindiSyllabusState);
    $stateProvider.state(scienceSyllabusState);
    $stateProvider.state(csSyllabusState);
    $stateProvider.state(studentProfileState);
    $stateProvider.state(teacherProfileState);
    $stateProvider.state(attendanceOnDateState);
    $stateProvider.state(notFoundState);
});

ams.constant('baseUrl',{
    url:"http://localhost:3000/"
})
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

ams.controller('studentDashboardController', ['$scope', '$http', '$state','baseUrl', function ($scope, $http, $state, baseUrl) {
    $scope.name = JSON.parse(sessionStorage.getItem('data')).name
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

ams.controller('teacherDashboardController', ['$scope', '$http', '$state', function ($scope, $http,) {
    $scope.subject = JSON.parse(sessionStorage.getItem('data')).subject
    $scope.name = JSON.parse(sessionStorage.getItem('data')).name

    $http.get(`http://localhost:3000/students`).then(function (res) {
        $scope.students = res.data
        console.log($scope.students);
    });
}]);


ams.controller('notFoundController', ['$state','$scope',function($state,$scope){
    $scope.goToLoginPage = function () {
        $state.go('login');
    }
}])