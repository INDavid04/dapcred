/*
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks  = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
*/ /// Nu mai stiu ce face asta :))

/// Navbar care apare si dispare la scroll vertical
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}