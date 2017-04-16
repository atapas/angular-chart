'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$http', function($http) {

    // $http is an angular service which is injected above.
    
    // Now making a get call to fetch data from a json file located
    // under data folder
    $http.get("data/importance.json").then(function (response) {
        // Now got a successful response. Lets log it for debug.
        console.log(response);

        // Assigning the response data to a variable to use it later for chart
        var data = response.data;


        // Instantiate a Highchart
        Highcharts.chart('importanceContainer', {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45,
                    beta: 0
                }
            },
            title: {
                text: 'Importance Share of People at Home'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Importance',
                data: data
            }]
        });

       
    });
  
    

}]);