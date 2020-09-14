function tinh(){
    let l = parseFloat(document.getElementById("l").value);
    let l12;
    if (l < 10000000) {
        l12 = l*12;
    }else if (l < 50000000){
        l12 = l*12*9/10;
    } else {
        l12 = l*12*72/100;
    }
    let l12_1 = l12*925/1000;
    let l12_2 = l12*875/1000;
    let b = document.getElementById("bl").value;
    if (b == "b1"){
        document.getElementById("hienthi").innerHTML = l12_1;
    }else {
        document.getElementById("hienthi").innerHTML = l12_2;
    }
}
