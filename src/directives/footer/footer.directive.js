angular.module("myApp")
    .directive("customFooter", function () {
        return {
            restrict: "A",
            templateUrl: 'src/directives/footer/footer.html'
        }
    })