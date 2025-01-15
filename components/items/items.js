angular.module('items',[])
    .component('items', {
        templateUrl: 'components/items/items.html',
        controller: function($scope, $http, searchBarService){
            $scope.items = ''

            $scope.$watch(function (){
                return searchBarService.getQuery()
            }, function(newQuery){
    
                $scope.searchValue = newQuery
    
                if(newQuery !== ''){
                    $http.get(`https://pokeapi.co/api/v2/item-attribute/${newQuery}`)
                    .then((response) => {
                        $scope.items = response.data.items;
                        console.log($scope.items)
                    })
                } else {
                    $scope.items = ''
                }
            })

            $scope.selectItem = function(item){
                $scope.selectedItem = item
            }
            
        }
    })