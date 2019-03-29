angular.module("myApp")
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "src/controller/home/home.html",
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .when("/about", {
                templateUrl: "src/controller/about/about.html",
                controller: 'AboutController',
                controllerAs: 'vm'
            })
            .when("/contact", {
                templateUrl: "src/controller/contact/contact.html",
                controller: 'ContactController',
                controllerAs: 'vm'
            })
            .when("/joinus", {
                templateUrl: "src/controller/joinus/joinus.html",
                controller: 'JoinUsController',
                controllerAs: 'vm'
            })
            .when("/review", {
                templateUrl: "src/controller/review/review.html",
                controller: 'ReviewController',
                controllerAs: 'vm'
            })
            .when("/review/:id", {
                templateUrl: "src/controller/review/single.html",
                controller: 'ReviewController',
                controllerAs: 'vm'
            })
            .when("/admin", {
                templateUrl: "src/controller/admin/admin.html",
                controller: 'AdminController',
                controllerAs: 'vm'
            })
            .when("/admin/:id", {
                templateUrl: "src/controller/admin/admin.html",
                controller: 'AdminController',
                controllerAs: 'vm'
            })
    })