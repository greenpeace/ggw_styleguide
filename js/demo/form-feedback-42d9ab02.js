$(function(){if(window.location.hash){var hash=window.location.hash.substring(1);"form-saved"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your changes have been saved.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"album-created"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>The album "Photos of induction training" has been published.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"enrolled-for-event"==hash&&$('<div class="form-sent form-success"><i class="icon icon-login"></i> <p>You have succesfully enrolled for "Induction training".</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"friend-request-sent"==hash&&$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>An invitation has been sent to your friend(s).</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"event-created"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>Your event has been created and published.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"confirmed-join-group"==hash&&$('<div class="form-sent form-success"><i class="icon icon-check"></i> <p>You are now a member of Emlyn Gardens local group.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow"),"confirmed-leave-group"==hash&&$('<div class="form-sent form-success"><i class="icon icon-cancel"></i> <p>You are not longer a member of Emlyn Gardens local group.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}$("#send-private-message .form-comment-submit").click(function(){$.magnificPopup.close(),$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>A private message has been sent.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#send-message .form-comment-submit").click(function(){$.magnificPopup.close(),$('<div class="form-sent form-success"><i class="icon icon-comment"></i> <p>A message is sent to the selected attendees.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#send-email .form-comment-submit").click(function(){$.magnificPopup.close(),$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>An email is sent to all selected attendees.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")}),$("#confirm-friend-request").click(function(){$.magnificPopup.close(),$("#button-friend-request").addClass("disabled").text("Friend request has been sent."),$('<div class="form-sent form-success"><i class="icon icon-mail"></i> <p>Your friend request has been sent.</p></div>').insertBefore(".l-main").show().delay(5e3).fadeOut("slow")})});