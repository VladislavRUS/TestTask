function slideAnimation() {

    var options = {
        duration: 300,
        slideDown: 'slideDown',
        slideUp: 'slideUp',
        easing: [0.4, 0.0, 0.2, 1]
    };

    return {
        enter: function (element, doneFn) {
            element.velocity(options.slideDown, {
                duration: options.duration,
                easing: options.easing,
                complete: function () {
                    doneFn();
                }
            });
        },

        leave: function (element, doneFn) {
            element.velocity(options.slideUp, {
                duration: options.duration,
                easing: options.easing,
                complete: function () {
                    doneFn()
                }
            });
        }
    }
}