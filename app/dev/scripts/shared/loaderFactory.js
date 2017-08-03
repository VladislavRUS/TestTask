function loaderFactory() {
    var factory = {};

    factory.loaders = {};

    factory.createLoader = function (loaderName) {
        factory.loaders[loaderName] = {
            visible: false
        }
    };

    factory.hideLoader = function (loaderName) {
        setLoaderState(loaderName, false);
    };

    factory.showLoader = function (loaderName) {
        setLoaderState(loaderName, true);
    };

    factory.getLoaderState = function (loaderName) {
        return factory.loaders[loaderName] && factory.loaders[loaderName].visible;
    };

    function setLoaderState(loaderName, state) {
        if (factory.loaders[loaderName]) {
            factory.loaders[loaderName].visible = state;
        }
    }

    return factory;
}