/*
 *
 * Images fullPlay
 * Author: Join Fisher
 * Version: 1.0 (1-Jun-2016)
 *
 */

(function($) {

    $.fn.fullImages = function(fisher) {

        var fisher = $.extend({
            ImgWidth: null,
            ImgHeight: null,
            autoplay: null,
            fadeTime: null
        },
        fisher)

        var count = $(this).find("img").length; 
        var nValue = 0;
        var oValue = 0;
        var _this = $(this);
       
	    _this.find("img:eq(0)").fadeIn("slow");

        var setIntervalImg = setInterval(function() {

            nValue++
            if (nValue == count) {
                nValue = 0;
            }
            _this.find(" img:eq(" + (nValue) + ")").fadeIn(fisher.fadeTime);
            _this.find(" img:eq(" + (oValue) + ")").fadeOut(fisher.fadeTime);
            oValue = nValue % count;

        },
        fisher.autoplay);

        resizeFun();
        $(window).resize(function(e) {
            resizeFun();
        });

        function resizeFun() {

            /*轮播图全屏*/
            var imgH = fisher.ImgHeight;
            var imgW = fisher.ImgWidth;
            var hValue = imgH / imgW;
            var wValue = imgW / imgH;

            if ($(window).width() / $(window).height() < wValue) {

                _this.find("img").css("width", $(window).height() * wValue);
                _this.find("img").css("margin-left", -(($(window).height() * wValue) - $(window).width()) / 2);
                _this.find("img").css("height", $(window).height());

            } else {

                _this.find("img").css("width", $(window).width());
                _this.find("img").css("margin-left", 0);
                _this.find("img").css("height", $(window).width() * hValue);

            }

        }

    };

} (jQuery));