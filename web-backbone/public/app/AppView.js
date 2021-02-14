define([
    '../core/View',
    'jquery',
    'backbone',
    'underscore',
    'handlebars',
    'AppModel',
    'text!AppView.html'
  ], function (View, $, Backbone, _, Handlebars, AppModel, template) {

    'use strict';
    return View.extend({

        el : '#root',

        template: Handlebars.compile(template),

        events: {
          'click #btn': 'clickBtn',
          'keyup #uinput': 'changeInput',
          'click #cls': 'clsMsg',
        },

        initialize: function(options) {
          // this.$el.html(this.template(this.model.toJSON()));
          View.prototype.initialize.apply(this, arguments);
        },

        render: function() {
          this.$el.html(this.template(this.model.toJSON()));
          // View.prototype.render.apply(this, arguments);
        },

        clickBtn: function(e) {
          $('#msg').html('点击了按钮' + new Date().getTime())
        },

        changeInput: function(e) {
          $('#msg').html($('#uinput').val());
        },

        clsMsg: function(e) {
          $('#msg').html('');
          $('#uinput').val('');
        }

    });
  });
  