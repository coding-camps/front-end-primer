define(['backbone', 'underscore'], function (Backbone, _) {
  'use strict';

  return Backbone.Router.extend({
    
    initialize: function (options) {
      _.extend(this, options);
      Backbone.Router.prototype.initialize.apply(this, arguments);
    },

  });
});
