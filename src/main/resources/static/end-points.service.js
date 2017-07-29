(function () {

  'use strict';
  
  angular.
    module('app').
    service('endPointsService', [function () {
  
      var ctrl = this;
      
      ctrl.postLogin = '/usuario/login';
      ctrl.postCadastrar = '/usuario/cadastrar';
      ctrl.postAdicionaSerie = '/serieService/adiciona';
      ctrl.postRemoveSerie = '/serieService/remove';
      
      ctrl.statusOk = function (status) {
    	  return (status >= 200 && status <= 299);
      }
      
  }]);
  
})();
