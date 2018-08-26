var app = angular.module('plunker', ['ui.grid', 'ui.grid.selection', 'ui.grid.pagination']);

app.controller('MainCtrl', ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {
  $scope.changeColumn2Text = changeColumn2Text;
  
  $scope.gridOptions = {
	 //  enableColumnMenus: false,
   /* enableRowSelection: false,
    enableGroupHeaderSelection: false,
    enableRowHeaderSelection: false,
    enableSorting: true,*/
	//enableSorting: true,
	 paginationPageSizes: [5,25, 50, 75],
      paginationPageSize: 5,
	    enableSorting: true,
                        enableFiltering: true,
						enableGridMenu: true,
						selectedItems: $scope.selectedItem,
     showGridFooter:true,
	 // enableHorizontalScrollbar: 0,
    //enableVerticalScrollbar: 0,
	columnDefs: [
  		{field: 'col1', displayName: 'Column 1', width: 175},
  	  {field: 'col2', displayName: 'Column 2', width: 200},
  	  {field: 'col3', displayName: 'Column 3', width: 120},
	  {field: 'col4', displayName: 'Column 4', width: '*'},
    ],
    data: [
      { col1: "Hello", col2: "World", col3: "tester",col4: "tester"},
      { col1: "Hello 2", col2: "World", col3: "tester",col4: "tester"},
      { col1: "Hello 3", col2: "World", col3: "tester",col4: "tester"},
      { col1: "Hello 4", col2: "World", col3: "tester",col4: "tester"},
      { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
	  { col1: "Hello 5", col2: "World", col3: "tester",col4: "tester"},
    ],
    enableRowSelection: true,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
	   gridApi.selection.on.rowSelectionChanged($scope, function(row) {
                            	$scope.data1 = $scope.gridApi.selection.getSelectedRows();
								$scope.selectedItem = $scope.data1.length;
                               alert(JSON.stringify($scope.selectedItem))
                            });
    }
	};
  
  function changeColumn2Text() {
    if ($scope.gridOptions.columnDefs[1].displayName === 'Column 2') {
      $scope.gridOptions.columnDefs[1].displayName = 'I Changed';
    } else {
      $scope.gridOptions.columnDefs[1].displayName = 'Column 2';
    }
    $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
  }
}]);