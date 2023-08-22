"use strict"
var arr = [];
var arrInput = $('aray');

function $(id){
    return document.getElementById(id);
}

window.onload = function(){
    $('input-form').onsubmit= function(event){
        event.preventDefault();
        arr = arrInput.value.slit(',');
    }
}
