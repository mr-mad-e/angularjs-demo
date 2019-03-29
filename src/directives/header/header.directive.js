angular.module("myApp")
    .directive("customHeader", function () {
        return {
            restrict: "E",
            templateUrl: 'src/directives/header/header.html'
        }
    })