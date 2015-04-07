var app = app || {};

Todo一覧の1件表示用ビュー
(function(app) {
  app.TodoItemView = Backbone.View.extend({
    // DOMに要素追加のタグ名
    tagName : 'tr',

    // テンプレート
    template : _.template($('#item-template').html()),

    initialize : function() {
    },
    render : function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
  });
})(app);