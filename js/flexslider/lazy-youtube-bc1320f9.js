$(function(lazyload_youtube){var classPreviewYoutube="preview-youtube",videoratio=.5625,thumbnailurl="";lazyload_youtube.init=function(options){setOptionsYoutube(options),$(document).ready(doload_lly()).ajaxStop(function(){doload_lly()}),"function"==typeof responsiveVideos.init&&$_o.responsive===!0&&responsiveVideos.init(),"function"==typeof $_o.callback&&$_o.callback()};var $_o,setOptionsYoutube=function(options){$_o=$.extend({theme:"dark",colour:"white",controls:!0,loadpolicy:!0,showinfo:!0,relations:!1,buttonstyle:"",preroll:"",postroll:"",videoseo:!1,responsive:!0,thumbnailquality:"0"},options)},doload_lly=function(){$("a.lazy-load-youtube").each(function(index){var that=this,load_embedparms=function(){var embedparms=$(that).attr("href").split("/embed/")[1];return embedparms||(embedparms=$(that).attr("href").split("://youtu.be/")[1]),embedparms||(embedparms=$(that).attr("href").split("v=")[1].replace(/\&/,"?")),embedparms},embedparms=load_embedparms(),loadYouId=function(){return embedparms.split("?")[0].split("#")[0]},youid=loadYouId(),loadYouIdPreroll=function(){var preroll="";return $_o.preroll!==preroll&&void 0!==$_o.preroll?$_o.preroll:embedparms},preroll=loadYouIdPreroll(),start=embedparms.match(/[#&]t=(\d+)s/);start?start=start[1]:(start=embedparms.match(/[#&]t=(\d+)m(\d+)s/),start?start=60*parseInt(start[1])+parseInt(start[2]):(start=embedparms.match(/[?&]start=(\d+)/),start&&(start=start[1])));var emu="//www.youtube.com/embed/"+loadYouIdPreroll(),videoTitle=function(){return void 0!==$(that).attr("video-title")?$(that).attr("video-title"):""!==$(this).html()&&void 0!==$(this).html()?$(this).html():""},youtubeUrl=function(id){return"//www.youtube.com/watch?v="+id},getWidth=function(element){var calc=parseInt(element.css("width"))-4;return calc},getHeight=function(element){var calc=0;if($_o.responsive===!1)calc=parseInt(element.css("height"))-4;else{var width=getWidth(element);calc=Math.round(width*videoratio)}return calc};embedparms=embedparms.split("#")[0],start&&-1===embedparms.indexOf("start=")&&(embedparms+=(-1===embedparms.indexOf("?")?"?":"&")+"start="+start);var itemprop_name="";$_o.videoseo===!0&&(itemprop_name=' itemprop="name"'),$(this).html(-1!==embedparms.indexOf("showinfo=0")?"":'<p><span class="youtube"'+itemprop_name+">"+videoTitle()+"</span></p>"),$(this).prepend('<div style="height:'+getHeight($(this))+"px;width:"+getWidth($(this))+'px;" class="lazy-load-youtube-div"></div>').addClass($_o.buttonstyle);var setThumbnailUrl=function(youid){var $url="//i2.ytimg.com/vi/"+youid+"/"+$_o.thumbnailquality+".jpg";thumbnailurl=$url};setThumbnailUrl(youid);var getThumbnailUrl=function(){return thumbnailurl};$(this).css("background","#000 url("+getThumbnailUrl()+") center center no-repeat"),$_o.videoseo===!0&&($(that).append('<meta itemprop="contentLocation" content="'+youtubeUrl(youid)+'" />'),$(that).append('<meta itemprop="embedUrl" content="'+emu+'" />'),$(this).append('<meta itemprop="thumbnail" content="'+getThumbnailUrl()+'" />'),$.getJSON("http://gdata.youtube.com/feeds/api/videos/"+youid+"?v=2&alt=jsonc&callback=?",function(data){$(that).append('<meta itemprop="datePublished" content="'+data.data.uploaded+'" />'),$(that).append('<meta itemprop="duration" content="'+data.data.duration+'" />'),$(that).append('<meta itemprop="aggregateRating" content="'+data.data.rating+'" />')})),$(this).attr("id",youid+index),$(this).attr("href",youtubeUrl(youid)+(start?"#t="+start+"s":""));var theme="";$_o.theme!==theme&&void 0!==$_o.theme&&"dark"!==$_o.theme&&(theme="&theme="+$_o.theme);var colour="";$_o.colour!==colour&&void 0!==$_o.colour&&"red"!==$_o.colour&&(colour="&color="+$_o.colour);var showinfo="";$_o.showinfo||(showinfo="&showinfo=0");var relations="";$_o.relations||(relations="&rel=0");var controls="";$_o.controls||(controls="&controls=0");var loadpolicy="";$_o.loadpolicy||(loadpolicy="&iv_load_policy=3"),preroll=preroll!==youid?youid+",":"";var postroll="";$_o.postroll!==postroll&&void 0!==$_o.postroll&&(postroll=$_o.postroll);var jsapi="&enablejsapi=1",apiv="&version=3",videoid=$(that).parent().attr("id"),playerapiid="&playerapiid="+videoid;emu+=(-1===emu.indexOf("?")?"?":"&")+"autoplay=1"+theme+colour+controls+loadpolicy+showinfo+relations+jsapi+apiv+playerapiid;var videoFrame='<iframe width="'+parseInt($(this).css("width"))+'" height="'+parseInt($(this).css("height"))+'" class="youtube" style="vertical-align:top;" src="'+emu+'?" frameborder="0" allowfullscreen></iframe>';$(this).on("click",function(){var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];return firstScriptTag.parentNode.insertBefore(tag,firstScriptTag),removePlayerControls(this),$(".flexslider").on("click",".flex-prev, .flex-next",function(){$(".flexslider .youtube").each(function(){$(this).data("player").pauseVideo()})}),$("#"+youid+index).replaceWith(videoFrame),"function"==typeof responsiveVideos.resize&&$_o.responsive===!0&&responsiveVideos.resize(),!1});var removePlayerControls=function(element){$(element).removeClass(classPreviewYoutube)}})};$.fn.bindFirst=function(which,handler){var $el=$(this);$el.unbind(which,handler),$el.bind(which,handler);var events=$._data($el[0]).events,registered=events[which];registered.unshift(registered.pop()),events[which]=registered};var responsiveVideos={config:{container:$(".container-lazyload"),selector:"object, embed, iframe, .preview-lazyload, .lazy-load-youtube-div, .lazy-load-vimeo-div"},init:function(){responsiveVideos.config.container.length>0&&($(window).on("resize",responsiveVideos.resize),$(window).bindFirst("load",function(){responsiveVideos.resize()}),$(window).on("load",function(){responsiveVideos.resize()}))},resize:function(){$(responsiveVideos.config.selector,responsiveVideos.config.container).each(function(){var $this=$(this),width=$this.parent().width(),height=Math.round(width*videoratio);$this.attr("height",height),$this.attr("width",width),$this.css({height:height,width:width})})}}}(window.lazyload_youtube=window.lazyload_youtube||{},jQuery));