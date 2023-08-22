var Task = function(task){
    this.text = task;
};

Task.prototype.isValue = function(){
    if(this.text === ""){
        return false;
    }else{
        return true;
    }
};

Task.prototype.toString = function(){
    var first = this.text.subString(0,1);
    return first.toUpperCase() + this.text.subString(1);
};

