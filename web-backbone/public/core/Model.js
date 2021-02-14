define(['backbone', 'underscore'], function (Backbone, _) {
  'use strict';

  var ParentModel = Backbone.Model.extend({
    /**
     * Ref: https://stackoverflow.com/questions/10118988/whats-the-difference-between-initialize-and-constructor-on-a-backbone-model
     */
    initialize: function () {
      Backbone.Model.prototype.initialize.apply(this, arguments);
    },

  });

  return ParentModel;
});
