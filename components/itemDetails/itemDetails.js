angular.module('itemDetails', [])
    .component('itemDetails', {
        templateUrl: 'components/itemDetails/itemDetails.html',
        bindings: {
            item: '<' // '<' is for one-way databinding model & view are direct connected and it replaces value, '=' they're separated and updates to one trigger and update in the other 
        },
        controller: function($scope, $http){
           
            $scope.$watch(
                '$ctrl.item', // first argument/observable action occurs we trigger the subsequent function with the value returned from the previous argument
                function(newItem){
                    $http.get(newItem.url)
                        .then((response) =>{
                            console.log(response.data)
                            let item = response.data;
                            $scope.shortEffect = item.effect_entries[0].short_effect
                            $scope.flavorTextEntries = item.flavor_text_entries[0].text
                            $scope.sprites = item.sprites.default
                        })
            })
        }
    })