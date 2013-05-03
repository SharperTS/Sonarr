﻿"use strict";
require(['app', 'Controller'], function (app, controller) {

    NzbDrone.Router = Backbone.Marionette.AppRouter.extend({

        controller: controller,
        appRoutes : {
            ''                           : 'series',
            'series'                     : 'series',
            'series/index'               : 'series',
            'series/add'                 : 'addSeries',
            'series/add/:action(/:query)': 'addSeries',
            'series/details/:query'      : 'seriesDetails',
            'calendar'                   : 'calendar',
            'settings'                   : 'settings',
            'settings/:action(/:query)'  : 'settings',
            'missing'                    : 'missing',
            'history'                    : 'history',
            ':whatever'                  : 'notFound'
        }
    });

    NzbDrone.addInitializer(function () {

        NzbDrone.Router = new NzbDrone.Router();
        Backbone.history.start({ pushState: true });

    });
});

