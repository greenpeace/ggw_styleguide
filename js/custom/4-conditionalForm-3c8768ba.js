$(function(){"use strict";function conditionalForm(element,selection){switch(selection){case"<":hideBetween(element);break;case">":hideBetween(element);break;case"between":showBetween(element);break;default:hideBetween(element)}}function hideBetween(element){var parent=$(element).parents(".views-exposed-widget");$(parent).find(".min").closest(".form-item").hide(),$(parent).find(".max").closest(".form-item").hide(),$(parent).find(".min").val(""),$(parent).find(".max").val(""),$(parent).find(".selector-value").closest(".form-item").show(),$(parent).find(".separator").hide()}function showBetween(element){var parent=$(element).parents(".views-exposed-widget");$(parent).find(".min").closest(".form-item").show(),$(parent).find(".max").closest(".form-item").show(),$(parent).find(".selector-value").val(""),$(parent).find(".selector-value").closest(".form-item").hide(),$(parent).find(".separator").show()}function toggleSkillsFilter(){var groupType=[];$("#group-type :selected").each(function(i,selected){groupType[i]=$(selected).val()}),"undefined"!=typeof groupType&&(-1!==$.inArray("skills-based",groupType)||0===groupType.length?$("#group-skills").removeAttr("disabled").trigger("chosen:updated"):$("#group-skills").attr("disabled","disabled").trigger("chosen:updated"))}var betweenlabel="and";$('.views-exposed-widget .views-widget [class*="max"]').closest(".form-type-textfield").before('<span class="separator">'+betweenlabel+"</span>"),0!=$(".between").length&&($(".between").on("change",function(){conditionalForm($(this),$(this).val())}),$(".between").each(function(){conditionalForm($(this),$(this).val())})),$("#mygroups").on("click",function(){$("#mygroups").is(":checked")?$("#groups").attr("disabled","disabled").trigger("chosen:updated"):$("#groups").removeAttr("disabled").trigger("chosen:updated")}),0!=$("#group-skills").length&&0!=$("#group-type").length&&$("#group-type").on("change",function(){toggleSkillsFilter()}),toggleSkillsFilter(),$("#landline").hide(),$(".phone-switch").on("click",function(e){$(".phone-wrapper").hide();var currentTab=$(this).attr("href");$(currentTab).show(),e.preventDefault()})});