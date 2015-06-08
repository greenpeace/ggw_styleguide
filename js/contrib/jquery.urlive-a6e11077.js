!function($){var defaults={container:".urlive-container",target:"_blank",imageSize:"auto",render:!0,disableClick:!1,regexp:/((https?:\/\/)?[\w-@]+(\.[a-z]+)+\.?(:\d+)?(\/\S*)?)/i,yqlSelect:"*",callbacks:{onStart:function(){},onSuccess:function(){},onFail:function(){},noData:function(){},onLoadEnd:function(){},imgError:function(){},onClick:function(){}}},xajax=function(ajax){var exRegex=RegExp(window.location.protocol+"//"+window.location.hostname),yql_base_uri="http"+(/^https/.test(window.location.protocol)?"s":"")+"://query.yahooapis.com/v1/public/yql?callback=?",yql_query='select {SELECT} from html where url="{URL}" and xpath="*" and compat="html5"';return function(o){var url=/^https?:\/\//i.test(o.url)?o.url:window.location.protocol+"//"+o.url;return/get/i.test(o.type)&&!/json/i.test(o.dataType)&&!exRegex.test(url)&&/:\/\//.test(url)&&(o.url=yql_base_uri,o.dataType="json",o.data={q:yql_query.replace("{SELECT}",o.yqlSelect).replace("{URL}",url+(o.data?(/\?/.test(url)?"&":"?")+$.param(o.data):"")),format:"xml"},!o.success&&o.complete&&(o.success=o.complete,delete o.complete),o.success=function(success){return function(data){success&&success.call(this,{responseText:(data.results[0]||"").replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi,"")},"success")}}(o.success)),ajax.apply(this,arguments)}}($.ajax),findUrlive=function(){var selector=$(this).data("urlive-container")||$(this);return $(selector).find(".urlive-link")},methods={init:function(options){var opts=$.extend(!0,defaults,options);return this.each(function(){function getData(url){xajax({url:url,type:"GET",yqlSelect:opts.yqlSelect,beforeSend:opts.callbacks.onStart}).done(function(data){$.isEmptyObject(data.results)?(opts.callbacks.noData(),$.error("YQL request succeeded but with empty results",data)):(data=data.results[0],html=$("<div/>",{html:data}),get=function(prop){return html.find('[property="'+prop+'"]').attr("content")||html.find('[name="'+prop+'"]').attr("content")||html.find(prop).html()||html.find(prop).attr("src")},set={image:el.data("image")||get("og:image")||get("img"),title:el.data("title")||get("og:title")||get("title"),description:el.data("description")||get("og:description")||get("description"),url:el.data("url")||get("og:url")||url,type:el.data("type")||get("og:type"),sitename:el.data("site_name")||get("og:site_name")},opts.callbacks.onSuccess(set),opts.render&&draw(set))}).fail(function(jqXHR,textStatus,errorThrown){opts.callbacks.onFail(),$.error("YQL request error: ",textStatus,errorThrown)})}function draw(set){outer=$("<a/>",{"class":"urlive-link",href:set.url,target:opts.target}),imgWrapper=$("<div/>",{"class":"urlive-img-wrapper"}),textWrapper=$("<div/>",{"class":"urlive-text-wrapper"}),$.each(set,function(key,val){val&&("image"==key?(/^(?:[a-z]+:)?\/\//i.test(val)||(val=/^https?:\/\//i.test(set.url)?set.url+val:window.location.protocol+"//"+set.url+val),img=$("<img/>",{src:val}),img.error(opts.callbacks.imgError),img.appendTo(imgWrapper),img.hide().load(function(){var imgW=$(this).width(),outer=$(this).closest(".urlive-link");$(this).addClass("urlive-"+key).show(),"auto"==opts.imageSize?outer.addClass(imgW>=outer.width()?"urlive-img-large":"urlive-img-small"):"large"==opts.imageSize?outer.addClass("urlive-img-large"):"small"==opts.imageSize&&outer.addClass("urlive-img-small"),opts.callbacks.onLoadEnd()})):(elem=$("<span/>",{"class":"urlive-"+key,text:val}),elem.appendTo(textWrapper)))}),outer.append(imgWrapper,textWrapper).appendTo(el.data("urlive-container")),outer.on("click",opts.callbacks.onClick),opts.disableClick&&outer.on("click",function(e){e.preventDefault()})}var el=$(this),url=void 0;if(el.data("urlive-container",opts.container),el.is("a"))url=el.attr("href");else{var text=el.val()||el.text(),regexp=opts.regexp,email=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;url=regexp.exec(text),url=url&&!email.test(url[0])?url[0]:null}if(url)if(/\.(?:jpe?g|gif|png)/.test(url)){var ti=url.substr(url.lastIndexOf("/")+1);draw({image:url,title:ti,url:url})}else getData(url)})},close:function(duration){var urlive=findUrlive.apply(this);urlive.fadeOut(duration)},remove:function(duration){var urlive=findUrlive.apply(this);duration?urlive.fadeOut(duration,function(){urlive.remove()}):urlive.remove()},open:function(duration){var urlive=findUrlive.apply(this);urlive.fadeIn(duration)},disable:function(){var urlive=findUrlive.apply(this);urlive.on("click",function(e){e.preventDefault()})},enable:function(){var urlive=findUrlive.apply(this);urlive.off("click")}};$.fn.urlive=function(method){return methods[method]?methods[method].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof method&&method?void $.error('Method "'+method+'" does not exist on jquery.urlive'):methods.init.apply(this,arguments)}}(jQuery);