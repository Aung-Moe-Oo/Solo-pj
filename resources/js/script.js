$(window).on("load", function () {
  $("#preloader").fadeOut(1000);
  $("#status").delay(1000).fadeOut(1000);
});
// carousel
$(document).ready(function () {
  $("#team-members").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
// progress bar
$(document).ready(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%",
          },
          2000
        );
      });
      $(this).destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

// responsive tabs services section
$(document).ready(function () {
  $("#services-tab").responsiveTabs({
    animation: "slide",
  });
});

// portfolio item
$(window).on("load", function () {
  // init Isotope
  $(".isotope-container").isotope({
    // options
  });
  // filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $(".isotope-container").isotope({ filter: filterValue });
    // active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

// magnific js
$(document).ready(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
    // other options
  });
});

//  testimonials slider
$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
// counter up
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
//  client slider
$(document).ready(function () {
  $(".client-list").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
// map

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21, lng: 96 },
    zoom: 10,
  });
}

// nav bar
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      // for hide
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./resources/img/logo/logo-dark.png");
      $("#back-to-top ").fadeIn();
    } else {
      // for show
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "./resources/img/logo/logo.png");
      $("#back-to-top ").fadeOut();
    }
  });
});
// nav bar
$(document).ready(function () {
  $("a.smooth-scroll").click(function (e) {
    e.preventDefault();
    var selected_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(selected_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});
