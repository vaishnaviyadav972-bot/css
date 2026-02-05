/* Student Controller */

// Create AngularJS module
var app = angular.module("myApp", []);

// Create controller
app.controller("StudentCtrl", function ($scope) {

    // Student object (Model)
    $scope.student = {
        name: "Shruti",
        rollNo: 108,
        marks: 80
    };

    // Controller function to display message
    $scope.showMessage = function () {
        alert("Student details loaded successfully!");
    };
});
