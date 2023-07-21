// ------------------- NUMBER COUNTING FUNTION ----------------
$(".counter").countUp({});

// ------------------- POP UP VIDEO ----------------

const playButton = document.getElementsByClassName("nutrition__play-button")[0];
const close = document.getElementsByClassName("button__close")[0];
const popUpVideo = document.getElementsByClassName("pop-up-video")[0];
const body = document.getElementsByTagName("body")[0];

playButton.addEventListener("click", () => {
  popUpVideo.classList.remove("d-none");
  body.classList.add("prohibited-scroll");
});

close.addEventListener("click", () => {
  popUpVideo.classList.add("d-none");
  body.classList.remove("prohibited-scroll");
});

// OWL CAROUSEL
  $('.testi__content').owlCarousel({
    loop: false,
    margin: 20,
    nav: false,
    responsive: {
      0: {
        items: 1,
        dots: false
      },
      768: {
        items: 1,
        dots: true
      },
      992: {
        items: 2
      }
    }
  });
// banner 
  $('.banner').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      responsiveClass: true,
      // autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        480: {
          items: 1,
          nav: false
        },
        667: {
          items: 1,
          nav: false
        },
        1000: {
          items: 1,
          nav: false
        }
      }
    })
// SCREEN MODE - LIGHT/DARK
  document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
  };
// window scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = window.matchMedia("(max-width: 991.98px)");
  var styleScrolled = `
    padding: 10px 0;
    height: fit-content;`
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("nav-fixed");
  } else {
    document.getElementById("header").classList.remove("nav-fixed");
  }
}

