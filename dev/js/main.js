(function($) {
    $(document).ready(function() {

        $(".js-main-nav__trigger").on("click", function(event){
            event.preventDefault;
            if ($(".js-main-nav").css("display") == "block") {
                $(".js-main-nav").slideUp(function(){
                    $(".js-main-nav").css("display", "")
                });
            } else {
                $(".js-main-nav").slideDown();
            }

        });
        
    });
})(jQuery);