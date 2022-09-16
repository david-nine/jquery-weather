$(function(){
    
});

function showCep(){

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cellphones.p.rapidapi.com/phones/getbrands",
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "17fd4438a0msh0bc29d9fa7e71e3p1d01c2jsneeda8d3e7fa5",
            "X-RapidAPI-Host": "cellphones.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

}