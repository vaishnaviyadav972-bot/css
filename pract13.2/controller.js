var app = angular.module("myApp", []);

app.controller("StudentCtrl", function ($scope) {

    $scope.students = [
        { name: "Rahul", rollno: 3, marks: 85 },
        { name: "Anita", rollno: 1, marks: 92 },
        { name: "Vikram", rollno: 4, marks: 78 },
        { name: "Neha", rollno: 2, marks: 88 }
    ];

});
