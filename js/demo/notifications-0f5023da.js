$(function(){function notificationTrigger(){$(window).width()<=899?($("#notifications-trigger").attr("href","#notifications-panel"),$("#messages-trigger").attr("href","./my-messages.html"),$(".attention-trigger").removeAttr("data-dropdown"),$("#notifications-trigger").addClass("modal-inline"),$(".attention-panel").removeClass("dropdown dropdown-tip dropdown-anchor-right").addClass("mfp-hide").removeAttr("style")):$(window).width()>900&&($(".attention-trigger").removeClass("modal-inline"),$("#notifications-trigger").attr("data-dropdown","#notifications-panel").attr("href","#"),messages>0&&$("#messages-trigger").attr("data-dropdown","#messages-panel").attr("href","#"),$(".attention-panel").addClass("dropdown dropdown-tip dropdown-anchor-right"),$("#notifications-panel").removeClass("mfp-hide"))}var resizeTimer;if(0!==$(".logged-in").length){var date=new Date,minutes=1;date.setTime(date.getTime()+60*minutes*1e3);var notiValue=$.cookie("notifications");if(void 0==notiValue){$.cookie("notifications","6",{expires:date});var notifications="6"}else var notifications=notiValue;$("#notifications-number").text(notifications),"0"==notiValue&&$("#notifications-number").hide(),$("#notifications-trigger").click(function(){$("#notifications-number").text("2"),"6"==notiValue&&$.cookie("notifications","2",{expires:date}),$(".tab:last-child").click(function(){$("#notifications-number").hide(),"2"==notiValue&&$.cookie("notifications","0",{expires:date})})});var messagesValue=$.cookie("messages");if(void 0==messagesValue){$.cookie("messages",2,{expires:date});var messages=2}else var messages=messagesValue;if($("#messages-number").text(messages),0==messages&&($("#messages-trigger").attr("href","./my-messages.html").removeAttr("data-dropdown"),$("#messages-number").hide()),messages>0&&$("#messages-panel .media").click(function(){messages--,$("#messages-number").text(messages),$.cookie("messages",messages,{expires:date}),0==messages&&($("#messages-number").hide(),$("#messages-trigger").attr("href","./my-messages.html").removeAttr("data-dropdown"))}),$("#showallnotifications").click(function(e){var extraalerts=$("#hidden-notifications").html();$("#notialerts .notifications-section").append(extraalerts),$("#notialerts .notifications-section").animate({scrollTop:518}),$(this).addClass("disabled"),e.preventDefault()}),$.isNumeric(combinedNotifications)){var combinedNotifications=parseInt($("#notifications-number").text())+parseInt($("#messages-number").text());$("#combined-number").text(combinedNotifications),0==combinedNotifications&&$("#combined-number").hide()}}$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(notificationTrigger,250)}),notificationTrigger()});