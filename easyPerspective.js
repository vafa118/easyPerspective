(function($){
 
    $.fn.easyPerspective = function(options){

        var settings = $.extend({
            sensitivity: 15,
            translate: false,
            lightEffect: true,
            wrapperSelector: ".wrapper",
        }, options);

        return this.each(function(){
            $(this).css({"perspective": "1000px", 
                         "perspective-origin": "center"});

            var itm = $(this).find(settings.wrapperSelector);

            itm.css({
                "position": "absolute",
                "left"    : "0px",
                "top"     : "0px",
                "width"   : "100%",
                "height"  : "100%",
            });

            if (settings.lightEffect) 
                itm.prepend('<div class="lightEffect" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"></div>')

            itm.mousemove(function(e){

                var offset = itm.offset();

                var xval = (((e.pageX - offset.left) - (itm.width() / 2)) / itm.width());
                var yval = (((itm.height() / 2) - (e.pageY - offset.top)) / itm.height());

                var transform = 'rotateX(' + (yval * settings.sensitivity) + 'deg) ' + 
                                'rotateY(' + (xval * settings.sensitivity) + 'deg) ' + 
                                (settings.translate ? 'translate(' + (xval * -settings.sensitivity) + 'px, ' + 
                                                                     (yval *  settings.sensitivity) + 'px)' : '');

                itm.css({
                    "-moz-transform"    : transform,
                    "-webkit-transform" : transform,
                    "-o-transform"      : transform,
                    "-ms-transform"     : transform
                });

                if (settings.lightEffect){
                    itm.find(".lightEffect").css('background', 'linear-gradient(' + (xval * 180) + 'deg, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%');
                }

            });
        });
 
    };
 
}(jQuery));