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
  $('.owl-carousel').owlCarousel({
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
  })
// SCREEN MODE - LIGHT/DARK
  document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
  };