angular.module('app', ['pascalprecht.translate', 'angular-ui-grid-translate', 'ngTouch', 'ui.grid', 'ui.grid.pagination']);
angular.module('app')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.gridOptions1 = {
      paginationPageSizes: [25, 50, 75],
      paginationPageSize: 25,
	    enableSorting: true,
                        enableFiltering: true,
     // enableColumnMenus: false,
	  showGridFooter:true,
	  enableRowSelection: true,
      columnDefs: [{
        name: 'name'
      }, {
        name: 'gender'
      }, {
        name: 'company'
      }]
    };

    $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/gh-pages/data/100.json')
      .success(function(data) {
        $scope.gridOptions1.data = data;
      });
  }]);