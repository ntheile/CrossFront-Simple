define(["require", "exports", "models/Todo"], function(require, exports, __Model__) {
    var Model = __Model__;

    var task = new Model.Todo();
    console.log(task.get("content"));
    task.set({
        "content": "First task to do"
    });
    console.log(task.get("content"));
    $(document).ready(function () {
        console.log("dom loaded");
    });
})

