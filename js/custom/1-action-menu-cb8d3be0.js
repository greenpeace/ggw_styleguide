$(function(){function overflowDropdown(){if(0!=$(".action-menu").length&&$(window).width()<900){$("body").once().addClass("with-action-menu"),$(".action-menu .tabs, .action-menu .tabs li").removeAttr("style");var menuWrapper=$(".action-menu"),fullMenu=menuWrapper.children(".tabs"),overFlowMenu=menuWrapper.find(".dropdown ul"),fullHeight=menuWrapper.outerHeight(),triggerWidth=$(".action-menu .tab-overflow-trigger").outerWidth(),handle=menuWrapper.find(".tab-overflow-trigger").addClass("element-invisible");newfullMenu=fullMenu.css("padding-right",triggerWidth),fullMenu.find("li.moved").removeClass("moved"),overFlowMenu.children("li").remove(),fullMenu.children("li:visible").filter(function(){var elementOffset=$(this).position().top;return elementOffset+$(this).height()>fullHeight}).addClass("moved").clone(!0).prependTo(overFlowMenu[0]).children("a");var totalWidth=0;fullMenu.children("li:visible:not(.moved)").each(function(){totalWidth+=$(this).outerWidth(!0)+4}),$(".action-menu .tabs-overflow").css("left",totalWidth),0!==overFlowMenu.children("li").length?handle.removeClass("element-invisible"):($(".action-menu .tabs-overflow").hide(),fullMenu.addClass("flexthis").css({"padding-right":"0"}))}}var resizeTimer;if($(".action-menu li:first").addClass("current"),$("body").hasClass("front")&&($("#content").removeClass("current"),$("#upcoming-events").addClass("current")),window.location.hash){var hash=window.location.hash.substring(1);hash.match("^block")&&($(".action-menu li, .l-main-column .current, .sidebar .current").removeClass("current"),$("#"+hash).addClass("current"),$('.action-menu li a[href="#'+hash+'"]').parent().addClass("current"))}$(".action-menu .tab").click(function(e){$(".action-menu li, .l-main-column .current, .sidebar .current").removeClass("current"),$(this).parent().addClass("current");var currentTab=$(this).attr("href");$(currentTab).addClass("current"),e.preventDefault();var scrollTo=$("body").offset().top-50;$(window).scrollTop(scrollTo),$("input[type=file]").nicefileinput(),0!=$(".block .map").length&&map.invalidateSize(),$(this).closest(".dropdown").hide(),$(window).trigger("resize")}),$(".show-block").click(function(e){$(".action-menu li, .l-main-column .current, .sidebar .current").removeClass("current");var currentTab=$(this).attr("href");$(".action-menu li a").each(function(){var link=$(this).attr("href");link==currentTab&&$(this).parent().addClass("current")}),$(currentTab).addClass("current"),e.preventDefault(),$("html, body").animate({scrollTop:0},300)}),$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(overflowDropdown,250)}),overflowDropdown()});