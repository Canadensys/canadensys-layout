/*!
 * JavaScript For index.html Canadensys
 * Released under the GPL2 license
 */
 
$(document).ready(function () {
    cleanActive();
    setActive()
});

function cleanActive(){
    var a = ['nav_explorer_ala','nav_collections','nav_datasets','nav_images'];
    var aL = a.length;
    for (var i = 0; i < aL; i++) {
        document.getElementById(a[i]).className =
            document.getElementById(a[i]).className.replace
            ( /(?:^|\s)active(?!\S)/g , '' )
    }
}

function setActive(){
    var l = location.href+ "";
    var b = 0;
    if(l.indexOf("explorer.canadensys.net") > -1) {
        document.getElementById("nav_explorer_ala").className += " active";
        b = 1;
    }
    else if(l.indexOf("collections.canadensys.net/datasets") > -1) {
        document.getElementById("nav_datasets").className += " active";
        b = 1;
    }
    else if(l.indexOf("collections.canadensys.net") > -1) {
        document.getElementById("nav_collections").className += " active";
        b = 1;
    }
    else if(l.indexOf("images.canadensys.net") > -1) {
        document.getElementById("nav_images").className += " active";
        b = 1;
    }
    if (b==1){
        document.getElementById("nav_explorer").className += " active";
    }
}
