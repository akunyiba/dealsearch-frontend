adApp_ad.controller('updateController', ['$scope', '$http', '$routeParams', 'services','ad',
    function($scope,$http,$routeParams,services,ad) {
        $scope.currentTime = Date.now();
        services.getCityOptions().then(function(data){
            $scope.cityOptions = data.data;
        });
        services.getCategoryOptions().then(function(data){
            $scope.categoryOptions = data.data;
        });
        var original = ad.data;
        $scope.ad = angular.copy(original);
        $scope.isClean = function() {
            return angular.equals(original, $scope.ad);
        };
        $scope.updateAd = function(ad) {
            var results = services.updateAd(ad)
                .then(services.showNotification('success','Объявление '+ad.id+' обновлено'))
                .catch(function(error){
                    services.showNotification('danger','Ошибка! Видимо что-то пошло не так...');
                });
        }
    }]);