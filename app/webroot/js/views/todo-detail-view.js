var app = app || {};

// 詳細ビュー
(function(app){
  app.TodoDetailView = Backbone.View.extend({
    el : '#content',

    // テンプレート
    template : _.template($('#detail-template').html()),

    // DOMイベントハンドラ
    events : {
      // キャンセルボタンクリック時
      'click #updateCancel' : 'onCancelClick',
    },

    // 初期化
    initialize : function(id) {
      // Routerからidを受け取ってモデル生成
      this.model = new app.TodoModel({
        id : id
      });
      // モデルのサーバーからのデータ取得完了時、描画を行う
      this.listenTo(this.model, 'sync', this.render);
      // モデル破棄(destroy)イベント発生時、Viewを削除
      this.listenTo(this.model, 'destroy', this.remove);
      // サーバーからデータ取得
      this.model.fetch({
        wait : true
      });
    },

    // 描画
    render : function() {
      // テンプレートを使用し、モデルを描画する
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    // キャンセルボタンクリックのイベントハンドラ
    onCancelClick : function() {
      Backbone.history.navigate('#todo-lists', true);
    },
  });
})(app);