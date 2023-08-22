    var $ = function(id){
        return document.getElementById(id);
    }

    var addToTaskList = function(){
        var taskTextbox = $("task");
        var newTask = new Task(taskTextbox.value);
        if(newTask.isValid()){
            taskList.add(newTask);
            taskList.save();
            taskList.display();
            taskTextbox.value= "";
        }else{
            alert("please enter a task.");
        }
        taskTextbox.focus();
    };

    var deleteFromTaskList = function(){
        taskList.delete(this.title);
        taskList.save();
        taskList.display();
        $("task").focus();
    }

    var clearTaskList = function(){
        taskList.clear();
        $("task").focus();
    };

    window.onload = function(){
        $("add_task").onclick = addToTaskList;
        $("clear_task").onclick = clearTaskList;
        
        tasklist.deleteClickHandler = deleteFromTaskList;
        tasklist.displayDiv = $("task");

        tasklist.load();
        tasklist.display();
        $("task").focus();
    }