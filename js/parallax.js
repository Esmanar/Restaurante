/// <reference path="../../../typings/globals/jquery/index.d.ts" />

$(document).ready(function(){

    $(window).scroll(function(){
        var anchoVentana = $(window).width();

        if(anchoVentana > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });

            $('#acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 5 + '%)'
            });
        }
    });

    $(window).resize(function(){
        var anchoVentana = $(window).width();

        if(anchoVentana < 800){
            $('#acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }

        if(anchoVentana < 800){
            $('header .textos').css({
                'transform': 'translate(0px, 0px)',
                margin: '30px 50px'
            });
        }
    });
});