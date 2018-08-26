angular.module('app', ['ui.grid', 'ui.grid.edit', 'ui.grid.selection', 'ui.select'])
  .controller('MainCtrl', MainCtrl)
  .directive('uiSelectWrap', uiSelectWrap);

MainCtrl.$inject = ['$scope', '$http'];
function MainCtrl($scope, $http) {
  $scope.gridOptions = {
    rowHeight: 38,
    enableFullRowSelection: true,
    multiSelect: true,
		enableSorting: true,
	enableFiltering: true,
	enableGridMenu: true,
	selectedItems: $scope.selectedItem,
	showGridFooter:true,

    columnDefs: [
      { name: 'name' },
      { name: 'age', type: 'number' },
      {
        name: 'gender',
        editableCellTemplate: 'uiSelect',
        editDropdownOptionsArray: [
          'male',
          'female',
          'other'
        ]
      }
    ]
  };

  $http.get('https://cdn.rawgit.com/angular-ui/ui-grid.info/v3.0.7/data/500_complex.json')
    .success(function(data) {
      $scope.gridOptions.data = data;
    });
}

uiSelectWrap.$inject = ['$document', 'uiGridEditConstants'];
function uiSelectWrap($document, uiGridEditConstants) {
  return function link($scope, $elm, $attr) {
    $document.on('click', docClick);
    
    function docClick(evt) {
      if ($(evt.target).closest('.ui-select-container').length === 0) {
        $scope.$emit(uiGridEditConstants.events.END_CELL_EDIT);
        $document.off('click', docClick);
      }
    }
  };
}