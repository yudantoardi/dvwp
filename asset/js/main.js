$(document).ready(function(){

    //MENU ACTIVE
    $(".menu-bar li a").click(function(){
        $(".menu-bar li a").removeClass("active");
        $(this).addClass("active");
    });
    $(".bt-home").click(function(){
        $(".menu-bar li a").removeClass("active");
        $(".menu-bar li a.bt-home").addClass("active");
        $("#home").show();
        $(".bottoms").show();
    });

    //FILTER CATEGORY
    $(".category li a").click(function(cat){
        cat.preventDefault();

        $(".category li").removeClass("active")
        $(this).parent().addClass("active");
        $(".grid li").removeClass("show");
        $(".grid ." + $(this).attr("data-cat")).addClass("show");
    });

    //ARTICLE BACK BT
    $(".bt-back a, .bt-home").click(function(b){
        b.preventDefault();
        $(".mid-ct-2").removeClass("show");
        $(".mid-ct").addClass("show");
        $(".bottom-ct .text").removeClass("active");
        $(".menu-bar li a").removeClass("active");
        $(".menu-bar li a.bt-home").addClass("active");
    });

    

});