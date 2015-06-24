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
      url: "http://www.tubanters.nl/tmp/upload.php",
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      parallelUploads: 20,
      maxFilesize: 3,
      acceptedFiles: "image/*",
      accept: function(file, done) {
        var pixels = 0;
        var reader = new FileReader();
        reader.onload = (function(file) {
          var image = new Image();
          image.src = file.target.result;
          image.onload = function() {
            pixels = this.width * this.height;
            if (pixels < 20000) {
              done("This file is too small");
            } else {
              done();
            }
          };
        });
        reader.readAsDataURL(file);
      },
      previewTemplate: previewTemplate,
      //autoQueue: false, // Make sure the files aren't queued until manually added
      previewsContainer: "#previews", // Define the container to display the previews
     clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
    });

  } else if ( $("body").hasClass("page-type-document") ) {

    var myDropzone = new Dropzone(document.body, {
      url: "http://www.tubanters.nl/tmp/upload.php",
      thumbnailWidth: 80,
      thumbnailHeight: 80,
      parallelUploads: 20,
      maxFilesize: 15,
      acceptedFiles: ".doc, .docx, .xls, .xlsx, .ppt, .pptx, .odt, .odp, .ods, .pdf",
      previewTemplate: previewTemplate,
      //autoQueue: false, // Make sure the files aren't queued until manually added
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

  myDropzone.on("error", function(file) {
    file.previewElement.querySelector(".preview").style.opacity='.5';
    file.previewElement.querySelector(".name").remove();
    file.previewElement.querySelector(".start").remove();
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
