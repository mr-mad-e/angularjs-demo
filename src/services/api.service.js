angular.module("myApp")
    .service('apiService', function ($http, API_URL) {

        this.getMovies = function (query) {
            var url = ''

            if (query) {
                if (query.filterYear) {
                    url = `${API_URL}/mytable?Year=${query.filterYear}`
                } else {
                    url = `${API_URL}/mytable?limit=${query.pageSize}&offset=${(query.page -1) * query.pageSize}`
                }
            } else {
                url = `${API_URL}/mytable`
            }


            return $http.get(url)
                .then(function (response) {
                    return response.data
                })
        }

        this.getMoviesCount = function () {
            return $http.get(`${API_URL}/mytable?count=true`)
                .then(function (response) {
                    return response.data[0].count
                })
        }

        // create
        this.postMovie = function (movie) {
            return $http.post(`${API_URL}/mytable`, movie)
                .then(function (response) {
                    alert('Added successfully')
                    return true
                })
        }

        this.getMovieById = function (id) {
            return $http.get(`${API_URL}/mytable/${id}`)
                .then(function (response) {
                    return response.data
                })
        }

        // update
        this.updateMovie = function (movie) {
            return $http.put(`${API_URL}/mytable`, movie)
                .then(function (response) {
                    alert('Updated successfully')
                    return response.data
                })
        }

        this.deleteMovie = function (id) {
            return $http.delete(`${API_URL}/mytable/${id}`)
                .then(function (response) {
                    alert('Deleted successfully')
                })
        }

    })