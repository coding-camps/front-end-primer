'use strict';
require([
  '../core/View',
  'jquery',
  'underscore',
  'backbone',
  'text',
  'domReady',
  'handlebars',
  'i18n',
  '_str',
  'AppModel',
  'AppView',
], function (
  View,
  $,
  _,
  Backbone,
  text,
  domReady,
  handlebars,
  i18n,
  _str,
  AppModel,
  AppView,
) {

  // print info on console
  var info = {
    'msg': 'loading successfully~!',
    'versions': {
      'require': require.version,
      'jquery': $.fn.jquery,
      'underscore': _.VERSION,
      'backbone': Backbone.VERSION,
      'handlebars': handlebars.VERSION,
      'require-text': text.version,
      'require-i18n': i18n.version,
      'require-domReady': domReady.version,
      'underscore-str': _str.VERSION,
    }
  }
  console.log(info);


  // show app view
  var appModel = new AppModel();
  var appView = new AppView({model: appModel});
  appView.render();


});
