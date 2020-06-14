let anchors = Array.from(document.querySelectorAll("ul li a"));
function position (index) {
  anchors[index].classList = "active";
  for (let i = 0; i < anchors.length; i++) {
    if (i !== index) {
      anchors[i].classList = "";
    }
  }
}

function ind (pos1, pos2, pos3) {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollPosition >= 0 && scrollPosition < pos1) {
    position(0);
  } else if (scrollPosition >= pos1 && scrollPosition < pos2) {
    position(1);
  } else if (scrollPosition >= pos2 && scrollPosition < pos3) {
    position(2);
  } else {
    position(3);
  }
}

window.onscroll = function() {
  if (window.location.pathname === "/index.html") {
    ind(590, 1040, 1483);
  } else if (window.location.pathname === "/flexbox.html") {
    ind(559, 1050, 1515);
  }
};
