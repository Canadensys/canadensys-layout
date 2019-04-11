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
    
    if(l.indexOf("data.canadensys.net/explorer-ws") > -1) {
        document.getElementById("nav_explorer_ala_ws").className += " active";
        b = 1;
    }
    else if(l.indexOf("data.canadensys.net/explorer") > -1) {
        document.getElementById("nav_explorer_ala").className += " active";
        b = 1;
    }
    else if(l.indexOf("data.canadensys.net/collections/ws") > -1) {
        document.getElementById("nav_collections_ws").className += " active";
        b = 1;
    }
    else if(l.indexOf("data.canadensys.net/collections/datasets") > -1) {
        document.getElementById("nav_datasets").className += " active";
        b = 1;
    }
    else if(l.indexOf("data.canadensys.net/collections") > -1) {
        document.getElementById("nav_collections").className += " active";
        b = 1;
    }
    else if(l.indexOf("data.canadensys.net/images") > -1) {
        document.getElementById("nav_images").className += " active";
        b = 1;
    }
    else if(l.indexOf("data.canadensys.net/ipt") > -1) {
        document.getElementById("nav_repository").className += " active";
        b = 0;
    }
    else if(l.indexOf("data.canadensys.net/vascan") > -1) {
        document.getElementById("nav_vascan").className += " active";
        b = 0;
    }
    else if(l.indexOf("data.canadensys.net/tools") > -1) {
        document.getElementById("nav_tools").className += " active";
        b = 0;
    }

    if (b==1){
        document.getElementById("nav_explorer").className += " active";
    }

}
