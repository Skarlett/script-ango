var hundredthstimer = 0;
var secondplace = 0;

function addinc(){

    hundredthstimer += 1;
    if (inctimer == 100){
        hundredthstimer = 0;
        secondplace += 1;
    }

}

var clockint = setInterval(addinc, 10);

function init(){
    var bconv1 = document.getElementById("bconverter1");
    var bconv2 = document.getElementById("bconverter2");

    $(bconv2).hide();

    clearInterval(clockint);

    if (inctimer.len !== 2){
        inctimer = "0" + inctimer;
    }
    alert(secondplace + "." + inctimer);
}
onload = init;