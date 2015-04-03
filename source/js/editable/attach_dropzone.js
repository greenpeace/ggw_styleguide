/*
 * HTML5 Sortable jQuery Plugin
 * https://github.com/voidberg/html5sortable
 *
 * Original code copyright 2012 Ali Farhadi.
 * This version is mantained by Alexandru Badiu <andu@ctrlz.ro>
 *
 * Thanks to the following contributors: andyburke, bistoco, daemianmack, drskullster, flying-sheep, OscarGodson, Parikshit N. Samant, rodolfospalenza, ssafejava
 *
 * Released under the MIT license.
 */
'use strict';

(function ($) {
  var dragging, draggingHeight, placeholders = $();
  $.fn.sortable = function (options) {
    var method = String(options);

    options = $.extend({
      connectWith: false,
      placeholder: null,
      dragImage: null
    }, options);

    return this.each(function () {

      var index, items = $(this).children(options.items), handles = options.handle ? items.find(options.handle) : items;

      if (method === 'reload') {
        $(this).children(options.items).off('dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s');
      }
      if (/^enable|disable|destroy$/.test(method)) {
        var citems = $(this).children($(this).data('items')).attr('draggable', method === 'enable');
        if (method === 'destroy') {
          $(this).off('sortupdate');
          $(this).removeData('opts');
          citems.add(this).removeData('connectWith items')
            .off('dragstart.h5s dragend.h5s dragover.h5s dragenter.h5s drop.h5s').off('sortupdate');
          handles.off('selectstart.h5s');
        }
        return;
      }

      var soptions = $(this).data('opts');

      if (typeof soptions === 'undefined') {
        $(this).data('opts', options);
      }
      else {
        options = soptions;
      }

      var startParent, newParent;
      var placeholder = ( options.placeholder === null ) ? $('<' + (/^ul|ol$/i.test(this.tagName) ? 'li' : 'div') + ' class="sortable-placeholder"/>') : $(options.placeholder).addClass('sortable-placeholder');

      $(this).data('items', options.items);
      placeholders = placeholders.add(placeholder);
      if (options.connectWith) {
        $(options.connectWith).add(this).data('connectWith', options.connectWith);
      }

      items.attr('role', 'option');
      items.attr('aria-grabbed', 'false');

      // Setup drag handles
      handles.attr('draggable', 'true').not('a[href], img').on('selectstart.h5s', function() {
        if (this.dragDrop) {
          this.dragDrop();
        }
        return false;
      }).end();

      // Handle drag events on draggable items
      items.on('dragstart.h5s', function(e) {
        var dt = e.originalEvent.dataTransfer;
        dt.effectAllowed = 'move';
        dt.setData('text', '');

        if (options.dragImage && dt.setDragImage) {
          dt.setDragImage(options.dragImage, 0, 0);
        }

        index = (dragging = $(this)).addClass('sortable-dragging').attr('aria-grabbed', 'true').index();
        draggingHeight = dragging.outerHeight();
        startParent = $(this).parent();
        dragging.parent().triggerHandler('sortstart', {item: dragging, startparent: startParent});
      }).on('dragend.h5s',function () {
          if (!dragging) {
            return;
          }
          dragging.removeClass('sortable-dragging').attr('aria-grabbed', 'false').show();
          placeholders.detach();
          newParent = $(this).parent();
          if (index !== dragging.index() || startParent.get(0) !== newParent.get(0)) {
            dragging.parent().triggerHandler('sortupdate', {item: dragging, oldindex: index, startparent: startParent, endparent: newParent});
          }
          dragging = null;
          draggingHeight = null;
        }).add([this, placeholder]).on('dragover.h5s dragenter.h5s drop.h5s', function(e) {
          if (!items.is(dragging) && options.connectWith !== $(dragging).parent().data('connectWith')) {
            return true;
          }
          if (e.type === 'drop') {
            e.stopPropagation();
            placeholders.filter(':visible').after(dragging);
            dragging.trigger('dragend.h5s');
            return false;
          }
          e.preventDefault();
          e.originalEvent.dataTransfer.dropEffect = 'move';
          if (items.is(this)) {
            var thisHeight = $(this).outerHeight();
            if (options.forcePlaceholderSize) {
              placeholder.height(draggingHeight);
            }

            // Check if $(this) is bigger than the draggable. If it is, we have to define a dead zone to prevent flickering
            if (thisHeight > draggingHeight) {
              // Dead zone?
              var deadZone = thisHeight - draggingHeight, offsetTop = $(this).offset().top;
              if (placeholder.index() < $(this).index() && e.originalEvent.pageY < offsetTop + deadZone) {
                return false;
              }
              else if (placeholder.index() > $(this).index() && e.originalEvent.pageY > offsetTop + thisHeight - deadZone) {
                return false;
              }
            }

            dragging.hide();
            $(this)[placeholder.index() < $(this).index() ? 'after' : 'before'](placeholder);
            placeholders.not(placeholder).detach();
          } else if (!placeholders.is(this) && !$(this).children(options.items).length) {
            placeholders.detach();
            $(this).append(placeholder);
          }
          return false;
        });
    });
  };
})(jQuery);

$(function() {

  $('#previews').sortable({
    handle: '.preview',
    items: ':not(.disabled)'
  });

  var previewNode = $("#template");
  previewNode.removeAttr('id');
  var previewTemplate = previewNode.parent().html();
  $(previewNode).remove();

  if( $("body").hasClass("page-type-photo") ){
    var myDropzone = new Dropzone(document.body, {
      url: "http://www.torrentplease.com/dropzone.php",
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      parallelUploads: 20,
      acceptedFiles: "image/*",
      previewTemplate: previewTemplate,
      autoQueue: false, // Make sure the files aren't queued until manually added
      previewsContainer: "#previews", // Define the container to display the previews
     clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
    });

  } else if ( $("body").hasClass("page-type-document") ) {

    var myDropzone = new Dropzone(document.body, {
      url: "http://www.torrentplease.com/dropzone.php",
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      parallelUploads: 20,
      acceptedFiles: ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .odt, .odp, .ods, .pdf",
      previewTemplate: previewTemplate,
      autoQueue: false, // Make sure the files aren't queued until manually added
      previewsContainer: "#previews", // Define the container to display the previews
      clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
    });

    myDropzone.on("addedfile", function(file) {
      var ext = file.name.split('.').pop();
      file.previewElement.querySelector(".image-preview").className += " " + ext;
      file.previewElement.querySelector(".image-preview").innerHTML = "";
    });

  }

  myDropzone.on("addedfile", function(file) {
    $('#previews').sortable('reload');
    $('.dropzone-droparea').addClass('dz-started');

    file.previewElement.querySelector(".start").onclick = function() {
      myDropzone.enqueueFile(file);
    };
  });

  // Update the total progress bar
  myDropzone.on("totaluploadprogress", function(progress) {
    $("#total-progress .progress-bar").css('width', progress + '%');
  });

  myDropzone.on("sending", function(file) {
    // Show the total progress bar when upload starts
    $("#total-progress").css('opacity', '1');
    // And disable the start button
    file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
  });

  // Hide the total progress bar when nothing's uploading anymore
  myDropzone.on("queuecomplete", function(progress) {
    $("#total-progress").css('opacity', '0');
  });

  // Setup the buttons for all transfers
  // The "add files" button doesn't need to be setup because the config
  // `clickable` has already been specified.
  $("#dropzone-actions .start").on('click', function(){
    myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
    $('#previews').sortable('reload');
  });
  $("#dropzone-actions .cancel").on('click', function(){
    myDropzone.removeAllFiles(true);
    $('.dropzone-droparea').removeClass('dz-started');
  });

});
