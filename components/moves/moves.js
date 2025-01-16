angular.module('moves',[])
    .component('moves', {
        templateUrl: 'components/moves/moves.html',
        controller: function MovesCtrl($scope, $http, searchBarService){
            let url = "https://pokeapi.co/api/v2/move"

            // pub-sub design, entry point as it's a 1-1 relationship, typical pub-sub design is one publish and many subscribers
            $scope.$watch(function(){
                return searchBarService.getQuery()
            }, function(newQuery){
                $http.get(`${url}/${newQuery}`)
                    .then((response) => {
                        let data = response.data
                        $scope.moves = data.results
                        $scope.queryMove = data
                    })

            })
        }
    })