$(function(){$(".node-collapse .node-title").on("click",function(e){e.preventDefault(),$(this).next(".field-name-body").slideToggle(200).end().parent("article").toggleClass("content-visible")})});