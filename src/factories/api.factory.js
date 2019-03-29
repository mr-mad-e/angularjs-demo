angular.module("myApp")
    .factory('apiFactory', function ($http, API_URL) {

        function getMovies(query) {
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

        function getMoviesCount() {
            return $http.get(`${API_URL}/mytable?count=true`)
                .then(function (response) {
                    return response.data[0].count
                })
        }

        // create
        function postMovie(movie) {
            return $http.post(`${API_URL}/mytable`, movie)
                .then(function (response) {
                    alert('Added successfully')
                    return true
                })
        }

        function getMovieById(id) {
            return $http.get(`${API_URL}/mytable/${id}`)
                .then(function (response) {
                    return response.data
                })
        }

        // update
        function updateMovie(movie) {
            return $http.put(`${API_URL}/mytable`, movie)
                .then(function (response) {
                    alert('Updated successfully')
                    return response.data
                })
        }

        function deleteMovie(id) {
            return $http.delete(`${API_URL}/mytable/${id}`)
                .then(function (response) {
                    alert('Deleted successfully')
                })
        }

        return {
            postMovie: postMovie,
            updateMovie: updateMovie,
            deleteMovie: deleteMovie,
            getMovies: getMovies,
            getMovieById: getMovieById,
            getMoviesCount: getMoviesCount
        }
    })