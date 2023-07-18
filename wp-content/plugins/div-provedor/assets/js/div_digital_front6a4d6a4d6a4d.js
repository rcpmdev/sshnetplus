function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

//Gerencia as filiais
jQuery(function($) {
    $( document ).ready(function() {
        if(readCookie('ispsites-id-filial') == null && readCookie('ispsites-id-popup')){
            elementorProFrontend.modules.popup.showPopup({id: readCookie('ispsites-id-popup')});
        }

        $('.select_cidade').on('change', function () {
            createCookie('ispsites-id-filial', this.value, 5);
            location.reload();
        });

        $('#myInput').click(function(){
                createCookie('ispsites-id-filial', $('.input_cidade').val(), 2);
                location.reload();
            });

        $('.remove_cidade').click(function(){
            eraseCookie('ispsites-id-filial');
            location.reload();
        });
    });
});