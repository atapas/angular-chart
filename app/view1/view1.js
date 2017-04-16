'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$http', function($http) {
     // $http is an angular service which is injected above.
    
    // Now making a get call to fetch data from a json file located
    // under data folder
    $http.get("data/sales.json").then(function (response) {
        // Now got a successful response. Lets log it for debug.
        console.log(response);

        // Assigning the response data to a variable to use it later for chart
        var data = response.data;

        Highcharts.chart('saleContainer', {
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 10,
                    beta: 25,
                    depth: 70
                }
            },
            title: {
                text: '3D chart with null values'
            },
            subtitle: {
                text: 'Notice the difference between a 0 value and a null point'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            xAxis: {
                categories: Highcharts.getOptions().lang.shortMonths
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            series: data
        });
     });

}]);