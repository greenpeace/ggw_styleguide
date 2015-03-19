$(function() {
  'use strict';

  function conditionalForm(element, selection) {
    switch(selection) {
    case '<':
      hideBetween(element);
      break;

    case '>':
      hideBetween(element);
      break;

    case 'between':
      showBetween(element);
      break;

    default:
      hideBetween(element);
      break;
    }
  }

  // Get text string from the label element
  var betweenlabel = 'and';
  // Set text text in a <span> before the parent element
  $('.views-exposed-widget .views-widget [class*="max"]').closest('.form-type-textfield').before('<span class="separator">' + betweenlabel + '</span>');

  // Function to hide all the Between elements
  function hideBetween(element) {
    var parent = $(element).parents(".views-exposed-widget");
    $(parent).find('.min').closest('.form-item').hide();
    $(parent).find('.max').closest('.form-item').hide();
    // Clean fields when hiding to prevent validation issues.
    $(parent).find('.min').val('');
    $(parent).find('.max').val('');
    $(parent).find('.selector-value').closest('.form-item').show();
    $(parent).find('.separator').hide();
  }

  // Function to show all the Between elements
  function showBetween(element) {
    var parent = $(element).parents(".views-exposed-widget");
    $(parent).find('.min').closest('.form-item').show();
    $(parent).find('.max').closest('.form-item').show();
    // Clean field when hiding to prevent validation issues.
    $(parent).find('.selector-value').val('');
    $(parent).find('.selector-value').closest('.form-item').hide();
    $(parent).find('.separator').show();
  }

  // Add change event on all the selectors with between
  if ($('.between').length != 0) {
    $('.between').on("change", function() {
      conditionalForm($(this), $(this).val());
    });

    // By default we want to show/hide default state so execute conditionalForm
    $('.between').each(function(){
      conditionalForm($(this), $(this).val());
    });
  }


  $('#mygroups').on("click", function() {

    if ($('#mygroups').is(':checked')) {
      $('#groups').attr('disabled', 'disabled').trigger("chosen:updated");
    }

    else {
      $('#groups').removeAttr('disabled').trigger("chosen:updated");
    }

  });


// Skills filter on search group pages.
  if ($('#group-skills').length != 0 && $('#group-type').length != 0) {
    $('#group-type').on("change", function() {
      toggleSkillsFilter();
    });
  }

  // Function that shows and hides the skills filter.
  function toggleSkillsFilter() {
    // If the skills-based group is selected, show the skills filter.

    var groupType = [];
    $('#group-type :selected').each(function(i, selected){
      groupType[i] = $(selected).val();
    });

    // Check if the value actually exists.
    if (typeof groupType !== 'undefined') {
      if ($.inArray('skills-based', groupType) !== -1 || groupType.length === 0) {
        $('#group-skills').removeAttr('disabled').trigger('chosen:updated');
      }
      else {
        // If the skills-based group is not selected, hide the skills filter.
        $('#group-skills').attr('disabled', 'disabled').trigger('chosen:updated');
      }
    }
  }

  // On page load toggle the skills filter.
  toggleSkillsFilter();


  $('#landline').hide();
  $('.phone-switch').on("click", function(e) {
    $('.phone-wrapper').hide();
    var currentTab = $(this).attr('href');
    $(currentTab).show();
    e.preventDefault();
  });

});
