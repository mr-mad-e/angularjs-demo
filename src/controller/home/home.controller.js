angular.module("myApp")
    .controller('HomeController', function (apiService) {

        var vm = this

        vm.movies = []

        apiService.getMovies().then(function (data) {
            vm.movies = data
            slider()
        })

        function slider(){
            $(".slider").flexslider({
                controlNav: false,
                prevText: '<i class="fa fa-chevron-left"></i>',
                nextText: '<i class="fa fa-chevron-right"></i>',
            })
        }
    })