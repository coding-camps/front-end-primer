define(['backbone'], function (Backbone) {
  'use strict';

  return Backbone.Collection.extend({

    initialize: function() {
      Backbone.Collection.prototype.initialize.apply(this, arguments);
    },

    toJSON: function () {
      if(this.size() === 0) {
          return [];
      } else {
          return Backbone.Collection.prototype.toJSON.apply(this, arguments);
      }
    },

  });

});
