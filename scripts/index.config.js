angular.module('ams').config(function ($stateProvider) {
    let loginState = {
        name: 'login',
        url: '/login',
        templateUrl: 'templates/login.html'
    }
    let studentDashboardState = {
        name: 'student',
        url: '/student',
        templateUrl: 'templates/student/studentDashboard.html'
    }
    let landingState = {
        name: 'landing',
        url: '',
        templateUrl: 'templates/login.html'
    }
    let teacherDashboardState = {
        name: 'teacher',
        url: '/teacher',
        templateUrl: 'templates/teacher/teacherDashboard.html'
    }
    let mySubjectsState = {
        name: 'student.mySubjects',
        url: '/mySubjects',
        templateUrl: 'templates/student/mySubjects.html'
    }
    let myAttendanceState = {
        name: 'student.myAttendance',
        url: '/myAttendance',
        templateUrl: 'templates/student/myAttendance.html'
    }
    let myStduentsState = {
        name: 'teacher.myStudents',
        url: '/myStudents',
        templateUrl: 'templates/teacher/myStudents.html'
    }
    let markAttendanceState = {
        name: 'teacher.markAttendance',
        url: '/markAttendance',
        templateUrl: 'templates/teacher/markAttendance.html'
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
        templateUrl: 'templates/student/studentProfile.html'
    }
    let teacherProfileState = {
        name: 'teacher.profile',
        url:'/profile',
        templateUrl: 'templates/teacher/teacherProfile.html'
    }
    let attendanceOnDateState = {
        name: 'student.attendanceOnDate',
        url: '/attendanceOnDate',
        templateUrl: 'templates/student/attendanceOnDate.html'
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