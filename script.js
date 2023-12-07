$(document).ready(function () {
  slideshow(1);

  // CTA button effects
  $("#cta").hover(
    function () {
      $(this).animate({ scale: 1.1 }, 300);
    },
    function () {
      $(this).animate({ scale: 1 });
    }
  );

  // Tooltips
  $(".city")
    .hover(
      function (event) {
        let titleText = $(this).attr("data-title");

        $('<p class="tooltip"></p>')
          .text(titleText)
          .appendTo("body")
          .css("top", event.pageY - 20 + "px")
          .css("left", event.pageX + 20 + "px")
          .fadeIn("slow");
      },
      function () {
        $(".tooltip").remove();
      }
    )
    .mousemove(function (event) {
      $(".tooltip")
        .css("top", event.pageY - 20 + "px")
        .css("left", event.pageX + 20 + "px");
    });

  $(".seating-section").hover(
    function () {
      $(this).css("box-shadow", "inset 0 0 0 2px gray");
    },
    function () {
      $(this).css("box-shadow", "none");
    }
  );

  $(".seating-section").on("click", seatingSectionClick);
});

function slideshow(currentPhoto) {
  let numberOfPhotos = $("#slideshow img").length;
  currentPhoto = currentPhoto % numberOfPhotos;

  $("#slideshow img")
    .eq(currentPhoto)
    .fadeOut(function () {
      $("#slideshow img").each(function (i) {
        $(this).css(
          "zIndex",
          (numberOfPhotos - i + currentPhoto) % numberOfPhotos
        );
      });
      $(this).show();
      setTimeout(function () {
        slideshow(++currentPhoto);
      }, 5000);
    });
}

function seatingSectionClick() {
  $(".seating-section").css("background", "#dedede");
  $(this).css("background", "lightblue");

  $("#section-name").text($(this).attr("data-name"));

  const price = $(this).attr("data-price");
  $("#seating-details").text(`$${price}`);
  
  // Fade in seating details
  $("#section-name").css("opacity", 0);
  $("#section-name").animate({ opacity: 1 });
  $("#seating-details").css("opacity", 0);
  $("#seating-details").animate({ opacity: 1 });
}
