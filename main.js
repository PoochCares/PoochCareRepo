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
$(".testi__content").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  responsive: {
    0: {
      items: 1,
      dots: false,
    },
    768: {
      items: 1,
      dots: true,
    },
    992: {
      items: 2,
    },
  },
});
// banner
$(".banner").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    480: {
      items: 1,
      nav: false,
    },
    667: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: false,
    },
  },
});
// SCREEN MODE - LIGHT/DARK
// ------code cua THAO-------
// document.getElementById("switchButton").onclick = function () {
//   document.getElementById("myBody").classList.toggle("dark");
// };

// LAY GIA TRI TU COOKIE
function getCookie(theme) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");

    /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
    if (theme == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
}

// SET GIA TRI CHO THEM - MAC DINH LA LIGHT
if (document.cookie) {
  var theme = getCookie("theme");
} else {
  theme = "light";
}

// CHANGE THEME NGAY TAI LUC MOI LOAD LAI TRANG
function changeTheme(theme) {
  if (theme === "dark") {
    document.getElementById("myBody").classList.add("dark");
  } else {
    document.getElementById("myBody").classList.remove("dark");
  }
}

changeTheme(theme);

// CHANGE THEME KHI CLICK
document.getElementById("switchButton").onclick = function () {
  if (document.getElementById("myBody").classList.contains("dark")) {
    document.cookie = "theme=light; path=/; max-age=" + 1 * 24 * 60 * 60;
  } else {
    document.cookie = "theme=dark; path=/; max-age=" + 1 * 24 * 60 * 60;
  }
  document.getElementById("myBody").classList.toggle("dark");
};

// window scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("nav-fixed");
  } else {
    document.getElementById("header").classList.remove("nav-fixed");
  }
}
