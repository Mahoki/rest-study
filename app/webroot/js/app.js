var app = app || {};

//開始
(function(app){
  var todoRouter = new app.TodoRouter();
  Backbone.history.start();
})(app);