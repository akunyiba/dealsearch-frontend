adApp_ad.controller('mainController', ['$scope', '$rootScope', '$http', 'services',
    function($scope, $rootScope, $http, services) {
        $rootScope.curPath = 'main';
        services.getAds().then(function(data){
            $scope.ads = data.data;
        });
        $scope.getTrClass = function(adsType) {
            var trClass;
            adsType == 'компания' ? trClass = 'warning' : '';
            return trClass;
        };
        $scope.deleteAd = function(adsID, isLast) {
            if(confirm("Вы действительно хотите удалить объявление: " + adsID)==true && adsID>0){
                services.deleteAd(adsID)
                    .then(services.showNotification('warning','Объявление '+adsID+' удалено'))
                    .then(function(){
                        if(isLast) {
                            services.showNotification('warning','Все объявления удалены из базы');
                        }
                    })
                    .catch(function(error){
                        services.showNotification('danger','Ошибка! Видимо что-то пошло не так...');
                    });
            }
        };
    }]);