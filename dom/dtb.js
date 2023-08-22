"use strict"
var $= function(id){
    return document.getElementById(id);
}

var diemTrungbinh = function(){
    var isValid = true;

    var diemToan = $("diemtoan").value;
    console.log(diemToan);
    diemToan = parseFloat(diemToan);
    var diemTa = $("diemta").value;
    diemTa = parseFloat(diemTa);
    var diemVan = $("diemvan").value;
    diemVan = parseFloat(diemVan);
    var diemHoa = $("diemhoa").value;
    diemHoa = parseFloat(diemHoa);
    var diemLs = $("diemls").value;
    diemLs = parseFloat(diemLs);
    var diemSh = $("diemsh").value;
    diemSh = parseFloat(diemSh);
    var diemDl = $("diemdl").value;
    diemDl = parseFloat(diemDl);

    if(diemToan == "" || diemTa == "" || diemVan == "" || diemHoa == "" || diemLs =="" || diemSh =="" || diemDl==""){
        alert("không được để điểm trống");
        isValid = false;
    }else if(isNaN(diemToan) || isNaN(diemTa) || isNaN(diemVan) || isNaN(diemHoa) || isNaN(diemLs) ||isNaN(diemSh)|| isNaN(diemDl)){
        alert("Bạn phải nhập điểm dạng số");
        isValid = false;
    }else if(diemToan<0 || diemTa<0|| diemVan<0 || diemHoa<0 || diemSh<0 || diemDl<0||diemLs<0){
        alert("điểm phải lớn hơn không");
        isValid=false;
    }else{
        isValid = true;
    }

    var chonkhoi = $("chonkhoi").value;
    var diemTb=0;
    switch(chonkhoi){
        case "Khối A":
            diemTb=(diemToan*2+diemHoa*2+diemSh*2+diemVan+diemTa+diemLs+diemDl)/10;
            console.log(typeof(diemTb));
            alert("bạn chọn khối A và điểm trung bình của bạn là:"+diemTb.toFixed(2));
            break;
        case "Khối C":
            diemTb=(diemToan+diemHoa+diemSh+diemVan*2+diemTa+diemLs*2+diemDl*2)/10;   
            alert("bạn chọn khói C và điểm trung bình của bạn là:"+diemTb.toFixed(2));
            break;
        case "Khối D":
            diemTb=(diemToan*2+diemHoa+diemSh+diemVan*2+diemTa*2+diemLs+diemDl)/10;
            alert("bạn chọn khói D và điểm trung bình của bạn là:"+diemTb.toFixed(2));
            break;
        default:
            return diemTb;
    }

    if(isValid == true){
        $("myForm").submit();
    }
};    

var clearForm = function(){
    $("clear_form").reset();
    $("diemtoan").focus();
};
window.onload = function(){
    $("submid_form").onclick = diemTrungbinh;
    $("clear_form").onclick = clearForm;
    $("diemtoan").focus();
}