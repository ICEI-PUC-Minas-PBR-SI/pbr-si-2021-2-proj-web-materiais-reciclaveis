function RodarYouTubeModal() {
  var triggerOpen = $("body").find('[data-tagVideo]');
  
  triggerOpen.click(function() {
    var modalYt = $(this).data("bs-target"),
      videoSRC = $(this).attr("data-tagVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
    $(modalYt + ' iframe').attr('src', videoSRCauto);
    $(modalYt + ' button.btn-close').click(function() {
      $(modalYt + ' iframe').attr('src', videoSRC);
    });
  });
}


  function RodarYouTubeModal1() {
  var triggerOpen1 = $("body").find('[data-tagVideo]');
  triggerOpen1.click(function() {
    var modalYt1 = $(this).data("bs-target1"),
      videoSRC1 = $(this).attr("data-tagVideo"),
      videoSRCauto1 = videoSRC1 + "?autoplay=1";
    $(modalYt1 + ' iframe').attr('src', videoSRCauto1);
    $(modalYt1 + ' button.btn-close').click(function() {
      $(modalYt1 + ' iframe').attr('src', videoSRC1);
    });
  });

}

