let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#menu").style.bottom = "0";
  } else {
    document.querySelector("#menu").style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
