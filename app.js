'use strict';

// Declare app level module which depends on views, and core components
angular.module('pokeApp', [
  'ngRoute',
  'searchBar',
  'pokemon',
  'items',
  'itemDetails',
  'moves'
])
.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "pages/main.html"
  })
  .when("/pokemon",{
    templateUrl: "pages/pokemonPage.html"
  })
  .when("/items", {
    templateUrl: "pages/itemsPage.html"
  })
  .when("/moves", {
    templateUrl: "pages/movesPage.html"
  })
}
)