function searchFactory($http, $q, $timeout, loaderFactory, constantsFactory, restServiceFactory) {
    var factory = {};

    factory.videos = [];

    factory.search = function (query) {
        var deferred = $q.defer();

        var url = buildUrl(restServiceFactory.videosSearch,  {
            type: 'video',
            maxResults: '20',
            q: query,
            part: 'snippet',
            key: restServiceFactory.key
        });

        loaderFactory.showLoader(constantsFactory.searchLoader);

        $timeout(function() {
            $http.get(url).then(function(resp) {
                loaderFactory.hideLoader(constantsFactory.searchLoader);

                factory.videos = resp.data.items.map(function(item) {
                    return {
                        title: item.snippet.title,
                        imgUrl: item.snippet.thumbnails.default.url,
                        link: restServiceFactory.videosWatch.replace('{id}', item.id.videoId)
                    }
                });

                deferred.resolve();

            }, function (err) {
                loaderFactory.hideLoader(constantsFactory.searchLoader);

                console.log('Error occured', err);
                deferred.reject();
            });
        }, 2000);

        return deferred.promise;
    };

    factory.sortVideos = function (params) {
        factory.videos = factory.videos.sort(function (v1, v2) {
            return params.order === 'asc'
                ? v1.title.localeCompare(v2.title)
                : v2.title.localeCompare(v1.title);
        });
    };

    function buildUrl(url, params) {
        url += '?';

        var keys = Object.keys(params);

        keys.forEach(function(key, idx) {
            url += key + '=' + params[key];

            if (idx !== keys.length - 1) {
                url += '&'
            }
        });

        return url;
    }
    return factory;
}