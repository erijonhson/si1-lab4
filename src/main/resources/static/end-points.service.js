(function () {

  'use strict';
  
  angular.
    module('app').
    service('endPointsService', [function () {
  
      var ctrl = this;
  
      ctrl.basePath = 'https://seriesflix.herokuapp.com';
      // ctrl.basePath = '';
      
      ctrl.postLogin = ctrl.basePath + '/usuario/login';
      ctrl.postCadastrar = ctrl.basePath + '/usuario/cadastrar';
      ctrl.postAdicionaSerie = ctrl.basePath + '/serieService/adiciona';
      ctrl.postRemoveSerie = ctrl.basePath + '/serieService/remove';
      
      ctrl.statusOk = function (status) {
    	  return (status >= 200 && status <= 299);
      }
      
  }]);
  
})();
