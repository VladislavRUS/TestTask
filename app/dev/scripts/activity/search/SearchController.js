function SearchController($timeout, searchFactory, loaderFactory, constantsFactory) {
    var self = this;

    self.loaderFactory = loaderFactory;
    self.storage = searchFactory;
    self.currentPage = 0;
    self.pages = [0, 1, 2, 3];
    self.videosPerPage = 5;
    self.showOptions = false;
    self.showVideos = true;
    self.searchLoader = constantsFactory.searchLoader;

    loaderFactory.createLoader(self.searchLoader);

    self.search = function () {
        self.searchStr && self.storage.search(self.searchStr);
    };

    self.getVideos = function () {
        var start = self.currentPage * self.videosPerPage;
        var end = start + self.videosPerPage;

        return self.storage.videos.slice(start, end);
    };

    self.setCurrentPage = function (page) {
        self.showVideos = false;

        self.currentPage = page;

        $timeout(function () {
            self.showVideos = true;
        }, 200);
    };

    self.toggleOptions = function () {
        self.showOptions = !self.showOptions;
    };

    self.filter = function (video) {
        return !self.filterStr
            ? true
            : video.title.toLowerCase().includes(self.filterStr);
    };

    self.sort = function (order) {
        searchFactory.sortVideos({ order: order });
    };
}