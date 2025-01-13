'use strict';

// Declare app level module which depends on views, and core components
angular.module('pokeApp', [
  'ngRoute',
  'pokemon',
  'searchBar'
])
.config(function($locationProvider, $routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "pages/main.html"
  })
  .when("/pokemon",{
    templateUrl: "pages/pokemonPage/pokemon.html",
    controller : "PokemonCtrl"
  })
  
  $locationProvider.html5Mode({
    enabled:true,
    requireBase:false
  });
});