/*!
 * JavaScript For index.html Canadensys
 * Released under the GPL2 license
 */
 
var Cookies2 = Cookies.noConflict();
var biocacheURL = "http://explorer-ws.canadensys.net";
var collectoryWSUrl = "http://collections.canadensys.net/ws";

$(document).ready(function () {
    /* Languages */
    var savedLanguage = readCookie('language_index');
    if (savedLanguage == 'fr') {
        showlanguage('fr');
        addCurrentDate('fr');
    } else {
        showlanguage('en');
        addCurrentDate('en');
    }
    
    $("#en-lang").click(function() {
        var l = 'en';
        showlanguage(l);
        createCookie('language_index', l, 365);
        addCurrentDate(l);
    });
    $("#fr-lang").click(function() {
        var l = 'fr';
        showlanguage(l);
        createCookie('language_index', l, 365);
        addCurrentDate(l);
    });
    
    $("#en-lang-xs").click(function() {
        var l = 'en';
        showlanguage(l);
        createCookie('language_index', l, 365);
        addCurrentDate(l);
    });
    $("#fr-lang-xs").click(function() {
        var l = 'fr';
        showlanguage(l);
        createCookie('language_index', l, 365);
        addCurrentDate(l);
    });
    
    /* Add information about data */
    totalRecord();
    totalDatasets();
    totalCollections();
    totalInstitutions();
    
    /* set current date */
    
    /* Set tooltip */
    $('[data-toggle="tooltip"]').tooltip();
});

//
// Languages selection
//

function showlanguage(l){
    if (l == 'en') {
        //console.log(l);
        $(".en").show();
        $(".fr").hide();
    }else if (l =='fr') {
        //console.log(l);
        $(".en").hide();
        $(".fr").show();
    }
}

function createCookie(name, value, days) {
    Cookies2.set(name,value, { expires: days, path: '' });
}

function readCookie(name) {
    return Cookies2.get(name);
}

function eraseCookie(name) {
    Cookies2.remove(name);
}


//
//
//

function addCurrentDate(sL) {
    var today = new Date();
    var options = {
        weekday: "long", year: "numeric", month: "long", day: "2-digit"
    };
    if (sL == 'fr') {
        $('.currentdate').text(today.toLocaleDateString("fr-fr", options));
    } else {
        $('.currentdate').text(today.toLocaleDateString("en-en", options));
    }
}

//
// Add information about data
//

function totalRecord(){
    var xhr = new XMLHttpRequest();
    var url = biocacheURL+'/occurrences/search?q=*:*&pageSize=0';
    console.log(url)
    xhr.open('GET', url);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            var response = JSON.parse(xhr.responseText);
            var totalRecord = lisibilite_nombre(response.totalRecords);
            $('#totalRecordEN').append(''+totalRecord);
            $('#totalRecordFR').append(''+totalRecord);
            console.log(totalRecord);
        }
    }, false);
    xhr.send(null);
}

function getTotFromCollectoryWS(url,dest){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            var response = JSON.parse(xhr.responseText);
            var tot = lisibilite_nombre(response.total);
            console.log(tot);
            $(dest).append(tot);
        }
    }, false);
    xhr.send(null);
}

function totalDatasets(){
    var url = collectoryWSUrl+'/dataResource/count';
    var dest = '#totalDatasetsFR';
    getTotFromCollectoryWS(url,dest);
    dest = '#totalDatasetsEN';
    getTotFromCollectoryWS(url,dest);
}

function totalCollections(){
    var url  = collectoryWSUrl+'/collection/count';
    var dest = '#totalCollectionsFR';
    getTotFromCollectoryWS(url,dest);
    dest = '#totalCollectionsEN';
    getTotFromCollectoryWS(url,dest);
}

function totalInstitutions(){
    var url = collectoryWSUrl+'/institution/count';
    var dest = '#totalInstitutionsFR';
    getTotFromCollectoryWS(url,dest);
    dest = '#totalInstitutionsEN';
    getTotFromCollectoryWS(url,dest);
}

function lisibilite_nombre(nbr)
{
    var nombre = ''+nbr;
    var retour = '';
    var count=0;
    for(var i=nombre.length-1 ; i>=0 ; i--)
    {
        if(count!=0 && count % 3 == 0)
            retour = nombre[i]+' '+retour ;
        else
            retour = nombre[i]+retour ;
        count++;
    }
    return retour;
}
