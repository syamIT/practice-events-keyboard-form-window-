//-----windows-Events----//
//--onload-onunload and resize----//
window.addEventListener("click",myfun)
function myfun(){
    document.getElementById("win").innerHTML="This is windows click"
}

//-load event should be return in the body tag-----//
window.addEventListener("load",funn)
function funn(){
    document.getElementById("won").innerHTML="this is loaded"
}

//--resize will display when u change the window size---//
window.addEventListener("resize",funnn)
function funnn(){
    let txt="window size: width=" + window.outerWidth + "height=" + window.outerHeight 
    document.getElementById("sz").innerHTML=txt
}

// window.addEventListener("unload",funnnn)
// function funnnn(){
//     alert("thank you sir")
// }

//-------Keyword-events----------------///
//----onkeydown-onkeyup-onkeypress-------///

function my(){
    alert("pressed key down")
}
function myy(){
    alert("released key up")
}
function myyy(){
    alert("Key is pressing")
}

//------------Form events----------------/////
///------onchange-onfocus-onblur-oninput-onreset-onsubmit---///

function fm(){
    alert("content changed")
}
function fmm(){
    alert("onfocused it")
}
function fmmm(){
    alert("blurred content not filled completelly")
}
function fmmmm(){
    alert("input is changed")
}
function rs(){
    alert("form reseted")
}
