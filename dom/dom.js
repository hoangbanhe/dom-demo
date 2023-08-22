window.onload = function(){
    document.getElementById(id);
}
 
var Sales = $('salas');

function calSalary(Sales){
    if(Sales<8888){
        return Sales*0.07;
    }else if(Sales<=19000){
        return Sales*0.12;
    }else{
        return Sales*0.18;
    }
}

function calTax(salary){
    if(salary>1223){
        return 0.115;
    }else{
        return 0.02;
    }
}

$('myForm').onsubmit = function(){
    event.preventDefault();
    var salary = 0;
}