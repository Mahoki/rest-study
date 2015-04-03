var app = app || {};

//router
(function(app){
  app.TodoRouter = Backbone.Router.extend({
    routes : {
      '' : 'todoLists',
      'todo-lists' : 'todoLists',
      'todo-lists/:id' : 'todoDetail'
    },
    todoLists : function() {
      // Todo一覧表示用ビューにルーティング
      console.log("Todo一覧表示用ビューにルーティング");
      new app.TodoCollectionView();
    },
    todoDetail : function(id) {
      alert('id = ' + id + 'のTODO詳細表示');
    },
  });
})(app);