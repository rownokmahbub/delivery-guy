let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".nav");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .nav a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  nav.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        
        
        links.classList.remove("active");
        document
          .querySelector("header .nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });
};

// counter

// $(".counting").each(function () {
//   var $this = $(this),
//     countTo = $this.attr("data-count");

//   $({ countNum: $this.text() }).animate(
//     {
//       countNum: countTo,
//     },

//     {
//       duration: 3000,
//       easing: "linear",
//       step: function () {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function () {
//         $this.text(this.countNum);
//         //alert('finished');
//       },
//     }
//   );
// });

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  var i_index = 1;

  setInterval(function () {
    var id_i_index = i_index % 3;
    id_i_index++;
    if (id_i_index == 1) {
      $("#tab-1").trigger("click").change();
      $("#tab-2").removeAttr("checked");
      $("#tab-3").removeAttr("checked");
    } else if (id_i_index == 2) {
      $("#tab-2").trigger("click").change();
      $("#tab-1").removeAttr("checked");
      $("#tab-3").removeAttr("checked");
    } else {
      $("#tab-3").trigger("click").change();
      $("#tab-1").removeAttr("checked");
      $("#tab-2").removeAttr("checked");
    }

    i_index++;
  }, 3000);
});


// testimonial

$(document).ready(function() {
    $("#news-slider").owlCarousel({
      items: 2,
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [720, 1],
      itemsTablet: [768, 1],
      itemsMobile: [479, 1],
      pagination: false,
      navigation: true,
      navigationText: ["", ""],
      autoPlay: 2000
    });
    
});
    
    // //   for an individual element
    // var flkty = new Flickity( '#brandCarousel', {
    //   contain: true,
    //   pageDots: false,
    //   wrapAround: true,
    //   freeScroll: true,
    //   autoPlay: 1600
    // });


    $(document).ready(function () {
        
        $(".counter").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 2000,
                easing: "swing",
                step: function (now) {
                  $(this).text(Math.ceil(now));
                },
              }
            );
        });
      
    });
    

    