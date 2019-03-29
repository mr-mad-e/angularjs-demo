angular.module("myApp")
    .controller('AdminController', function (apiFactory, $routeParams) {

        var vm = this

        vm.submit = function () {
            if ($routeParams.id) {
                apiFactory.updateMovie(vm.model).then(function (response) {
                    console.log(response)
                })
            } else {
                apiFactory.postMovie(vm.model).then(function (response) {
                    console.log(response)
                })
            }
        }

        if ($routeParams.id) {
            apiFactory.getMovieById($routeParams.id).then(function (movie) {
                vm.model = movie
            })
        }

    })