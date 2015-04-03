var app = app || {};

// Todoデータ1件を表すモデル
(function(app) {
  app.TodoModel = Backbone.Model.extend({
    urlRoot : '/rest-study/todo_lists',
    parse : function(response) {
      // モデルをパース
      console.log("モデルをパース");
      console.log(response);
      return response.TodoList;
    }
  });
})(app);