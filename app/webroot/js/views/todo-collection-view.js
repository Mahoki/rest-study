var app = app || {};

// Todo一覧表費用ビュー
(function(app){
  app.TodoCollectionView = Backbone.View.extend({
    todoCollection : {},
    initialize : function() {
      console.log("Todo一覧表示用ビュー初期化");
      // コレクションを生成
      this.todoCollection = new app.TodoCollection()
      this.render();
    },
    render : function() {
      console.log("Todo一覧表示用ビュー表示処理");
      // コレクションをフェッチ
      console.log("コレクションをフェッチ");
      this.todoCollection.fetch();
      return this;
    }
  })
})(app);