var FE = {

    // elements
    el: {

    },

    // events
    ev: {
        // of the form
        // eventName elQuery: functionInFE.f
    },

    // functions
    f: {

    },

    // messages
    m: {

    }

};

FE.init = function() {

    // add event listeners
    Object.keys(FE.ev).forEach(function(identifier) {
        var eventName = identifier.split(' ')[0],
            selector = identifier.split(' ').splice(1).join(' '),
            fn = FE.f[FE.ev[identifier]];

        FEUtils.eventAdder(selector, eventName, fn);
    });

    // serviceWorker check
    // if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('sw.js').then(function(registration) {
    //         console.log('Service worker registration successful');
    //     }).catch(function(err) {
    //         console.error('Service worker registration failed', err);
    //     });
    // }

    console.info('FE initialized');

};

FE.init();
