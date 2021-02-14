define(['backbone', 'underscore'], function (Backbone, _) {
  'use strict';

  return Backbone.View.extend({
    $el: null,

    initialize: function () {
      _.extend(this, this.options);
      Backbone.View.prototype.initialize.apply(this, arguments);
    },

    empty: function () {
      if (!!this.$el) {
        this.$el.empty();
      }
    },

    show: function () {
      if (!!this.$el) {
        this.$el.show();
      }
    },

    hide: function () {
      if (!!this.$el) {
        this.$el.hide();
      }
    },

    isHidden: function () {
      if (!!this.$el) {
        return this.$el.is(':hidden');
      }
    },
  });
});
