! function($) {
    "use strict";
    $(document).ready(function() {
        $(".dt__frontswitcher-iconcog").on("click", function() {
            "-225px" === $(".dt__frontswitcher").css("right") ? ($(".dt__frontswitcher").animate({
                "right": "0"
            }), $(".dt__frontswitcher-iconcog").animate({  })) : ($(".dt__frontswitcher").animate({
                "right": "-=225"
            }), $(".dt__frontswitcher-iconcog").animate({  }))
        }), $(".dt__frontswitcher-background").on("click", function(o) {
            $(".dt__frontswitcher-background").removeClass("active"),
            $(this).addClass("active"),
            localStorage.setItem("layout", $(this).attr("value")),
            "wide" == $(this).attr("value") ? ($("body").removeClass("background-boxed"),
                $("body").css("backgroundImage", ""),
                $(".background-pattern").hide()) : (localStorage.setItem("layout", $(this).attr("value")),
                $("body").addClass("background-boxed"), $(".background-pattern").show())
        }), $(".dt__frontswitcher-pattern").on("click", function() {
            if ("boxed" == localStorage.getItem("layout")) {
                var o = $(this).css("backgroundImage");
                $("body").css("backgroundImage", o), localStorage.setItem("backgroundImage", o)
            }
        }), $(".custom-color.primary button").on("click", function(o) {
            var a = $(this).attr("id"),
                e = $(this).css("backgroundColor");
            $(".custom-color.primary button").removeClass("active"), $("#" + a).addClass("active"), localStorage.setItem("colorskinsPrimary", e);
            var s = ":root {--dt-pri-color:" + e + " !important;}";
            $("#customCssPrimary").html(s)
        }), $(".custom-color.secondary button").on("click", function(o) {
            var a = $(this).attr("id"),
                e = $(this).css("backgroundColor");
            $(".custom-color.secondary button").removeClass("active"), $("#" + a).addClass("active"), localStorage.setItem("colorskinsSecondary", e);
            var s = ":root {--dt-sec-color:" + e + " !important;}";
            $("#customCssSecondary").html(s)
        }), $("body").each(function() {
            if ("" != localStorage.getItem("colorskinsPrimary") && "undefined" != localStorage.getItem("colorskinsPrimary") && null != localStorage.getItem("colorskinsPrimary")) {
                var o = $(this).attr("id"),
                    a = localStorage.getItem("colorskinsPrimary");
                $("#" + o).addClass("active");
                var e = ":root {--dt-pri-color:" + a + " !important;}";
                $("#customCssPrimary").html(e)
            } else $(".custom-color.primary button").removeClass("active"), $(this).css("backgroundColor", "");
            if ("" != localStorage.getItem("colorskinsSecondary") && "undefined" != localStorage.getItem("colorskinsSecondary") && null != localStorage.getItem("colorskinsSecondary")) {
                var o = $(this).attr("id"),
                    a = localStorage.getItem("colorskinsSecondary");
                $("#" + o).addClass("active");
                var e = ":root {--dt-sec-color:" + a + " !important;}";
                $("#customCssSecondary").html(e)
            } else $(".custom-color.secondary button").removeClass("active"), $(this).css("backgroundColor", "");
            var s = localStorage.getItem("layout");
            if (null == s && ($(".dt__frontswitcher-pattern").removeClass("active"), $("#wide").addClass("active"), $("body").removeClass("background-boxed"), localStorage.setItem("layout", "wide"), $(".background-pattern").hide()), $("#" + s).addClass("active"), "wide" == s ? ($("body").removeClass("background-boxed"), $(".background-pattern").hide()) : "boxed" == s && ($("body").addClass("background-boxed"), $(".background-pattern").show()), "boxed" == localStorage.getItem("layout")) {
                var r = localStorage.getItem("backgroundImage");
                $("body").css("backgroundImage", r)
            }
        }), $(document).on('click', '.dt__frontswitcher-reset', function(e){
            localStorage.clear();
            $('#customCssPrimary').html('');
            $('#customCssSecondary').html('');
            $("body").removeClass("background-boxed");
            $("body").css("backgroundImage", '');
            $(".dt__frontswitcher-background").removeClass("active");
            $(".dt__frontswitcher-background").first().addClass("active");
            $(".custom-color.primary button").removeClass("active");
            $(".custom-color.primary button").first().addClass("active");
            $(".custom-color.secondary button").removeClass("active");
            $(".custom-color.secondary button").first().addClass("active");
            $(".background-pattern").hide();
        })
    })
}(jQuery);