angular.module("myApp")
    .controller('ReviewController', function (apiFactory, $routeParams) {

        var vm = this

        vm.movie = {}
        vm.movies = []

        vm.maxSize = 8

        vm.query = {
            page: 1,
            pageSize: 8
        }

        vm.getMovies = getMovies

        vm.deleteMovie = function (id) {
            apiFactory.deleteMovie(id).then(function () {
                getMovies()
            })
        }

        apiFactory.getMoviesCount().then(function (count) {
            vm.totalItems = count
        })

        function getMovies() {
            apiFactory.getMovies(vm.query).then(function (movies) {
                vm.movies = movies
            })
        }

        function getMovie(id) {
            apiFactory.getMovieById($routeParams.id).then(function (movie) {
                vm.movie = movie
            })
        }

        if ($routeParams.id) {
            getMovie($routeParams.id)
        } else {
            getMovies()
        }

    })