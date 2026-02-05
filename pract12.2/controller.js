var app = angular.module("myApp", []);

/* Parent Controller */
app.controller("ParentCtrl", function ($scope) {
    $scope.college = "KBP";
    $scope.department = "CO";
});

/* Child Controller */
app.controller("ChildCtrl", function ($scope) {
    $scope.studentName = "Shruti";
    $scope.rollNo = 108;
    $scope.marks = 87;
});