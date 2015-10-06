'use strict';
adApp_ad.factory("services", ['$http','$location','$route','toasty',
    function($http,$location,$route,toasty) {
        var obj = {};
        obj.getAds = function(){
            return $http.get(serviceBase + 'ads');
        };
        obj.createAd = function (ad) {
            return $http.post(serviceBase + 'ads', ad)
                .then(successHandler)
                .catch(errorHandler);
            function successHandler(result)  {
                $location.path('/ad/main');
            }
            function errorHandler(result){
                alert("Error data");
                $location.path('/ad/create');
            }
        };
        obj.getAd = function(adID){
            return $http.get(serviceBase + 'ads/' + adID);
        };

        obj.getCityOptions = function(){
            return $http.get(serviceBase + 'city/');
        };

        obj.getCategoryOptions = function(){
            return $http.get(serviceBase + 'category/');
        };

        obj.updateAd = function (ad) {
            return $http.put(serviceBase + 'ads/' + ad.id, ad )
                .then(successHandler)
                .catch(errorHandler);
            function successHandler(result) {
                $location.path('/ad/main');
            }
            function errorHandler(result){
                alert("Error data");
                $location.path('/ad/update/' + ad.id)
            }
        };
        obj.deleteAd = function (adID) {
            return $http.delete(serviceBase + 'ads/' + adID)
                .then(successHandler)
                .catch(errorHandler);
            function successHandler(result) {
                $route.reload();
            }
            function errorHandler(result){
                alert("Error data");
                $route.reload();
            }
        };
        obj.showNotification = function(type,message) {
            switch(type){
                case 'success':
                    toasty.success({
                        msg: message
                    });
                    break;
                case 'info':
                    toasty.info({
                        msg: message
                    });
                    break;
                case 'warning':
                    toasty.warning({
                        msg: message
                    });
                    break;
                case 'error':
                    toasty.error({
                        msg: message
                    });
                    break;
                case 'wait':
                    toasty.wait({
                        msg: message
                    });
                    break;
                default:
                    toasty({
                        msg: message
                    });
            }
        };
        return obj;
    }]);