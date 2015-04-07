<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>シンプルTODOアプリ</title>
</head>
<body>
	<!-- コンテンツ -->
	<div id="content">
	</div>
	<!-- TODO一覧表示のテンプレート -->
	<script type="text/template" id="list-template">
		<h1>TODOリスト</h1>
		<textarea style="width:300px;height:50px;" id="new-todo" placeholder="Todo?" autofocus></textarea>
		<input type="button" id="addTodo" value="追加">
		<hr>
		<div>
			<table border="1" width="350px">
				<tbody id="todo-lists"></tbody>
			</table>
		</div>
	</script>

	<!-- TODO一行分のテンプレート（上のtbody部分に挿入される） -->
	<script type="text/template" id="item-template">
   <td style="margin:0px">
       <span class="todo-edit" style="margin:0px"><%- todo %></span>
   </td>
  </script>

	<!-- js(library) -->
	<script src="js/lib/jquery-2.1.3.min.js" type="text/javascript"></script>
	<script src="js/lib/underscore-min.js" type="text/javascript"></script>
	<script src="js/lib/backbone-min.js" type="text/javascript"></script>

	<!-- js(application) -->
	<!-- model -->
	<script src="js/models/todo-model.js" type="text/javascript"></script>
	<!-- collection -->
	<script src="js/collections/todo-collection.js" type="text/javascript"></script>
	<!-- view -->
	<script src="js/views/todo-item-view.js" type="text/javascript"></script>
	<script src="js/views/todo-collection-view.js" type="text/javascript"></script>
	<!-- router -->
	<script src="js/routers/router.js" type="text/javascript"></script>

	<!-- entry point -->
	<script src="js/app.js" type="text/javascript"></script>
</body>
</html>
