adApp_ad.controller('createController', ['$scope', '$rootScope', '$http', 'services','ads',
    function($scope, $rootScope, $http,services) {
        $scope.currentTime = Date.now();
        $rootScope.curPath = 'create';
        services.getCityOptions().then(function(data){
            $scope.cityOptions = data.data;
        });
        services.getCategoryOptions().then(function(data){
            $scope.categoryOptions = data.data;
        });
        $scope.createAd = function(ads) {
            var results = services.createAd(ads)
                .then(services.showNotification('success','Объявление добавлено'))
                .catch(function(error){
                    services.showNotification('danger','Ошибка! Видимо что-то пошло не так...');
                });
        }
    }]);