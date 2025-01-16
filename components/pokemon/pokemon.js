angular.module('pokemon', [])

.component('pokemon', {
    templateUrl: 'components/pokemon/pokemon.html',
    controller: function($scope, $http, searchBarService){ // This is dependency injection
        $scope.pokemons = ""


        $scope.$watch(function (){
            return searchBarService.getQuery()
        }, function(newQuery){

            $scope.searchValue = newQuery

            $http.get(`https://pokeapi.co/api/v2/pokemon/${newQuery}`)
            .then((response) => {
                $scope.pokemons = response.data;
                console.log($scope.pokemons)
            })
        })
        
        $scope.next = function () {
            $http.get(`${$scope.pokemons.next}`)
            .then((response) => {
                $scope.pokemons = response.data;
                console.log($scope.pokemons)
            })
        }

        $scope.previous = function () {
            // $http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${80}&limit=${20}`)
            $http.get(`${$scope.pokemons.previous}`) // SHAME THE TRAINER HE FORGOT TO UPDATE THIS TO PREVIOUS
            .then((response) => {
                $scope.pokemons = response.data;
                console.log($scope.pokemons)
            })
        }
    }
    
})