$(function() {

      var previewNode = $("#template");
      previewNode.removeAttr('id');
      var previewTemplate = previewNode.parent().html();
      $(previewNode).remove();

      var myDropzone = new Dropzone(document.body, {
        url: "http://www.torrentplease.com/dropzone.php",
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        parallelUploads: 20,
        previewTemplate: previewTemplate,
        autoQueue: false, // Make sure the files aren't queued until manually added
        previewsContainer: "#previews", // Define the container to display the previews
        clickable: ".fileinput-button" // Define the element that should be used as click trigger to select files.
      });

      myDropzone.on("addedfile", function(file) {
        $('#previews').sortable('reload');
        $('.dropzone-droparea').addClass('dz-started');
        // Hookup the start button
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
