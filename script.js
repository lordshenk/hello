const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByClassName("main")[0];
const title = document.getElementsByTagName("h3")[0];
const menu = document.getElementsByClassName("menu")[0];
const about = document.getElementsByClassName("about")[0];
const contact = document.getElementsByClassName("contact")[0];
const skills = document.getElementsByClassName("skills")[0];

// Config particles
const runParticles = () => {
  let color = '#393939';
  if (body.classList.contains('dark')) {
    color = '#eeeeee';
  }

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 299,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": color
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.75,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top-right",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 300,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 350,
          "duration": 0.5
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })
}

runParticles();

// Switch mode
let timeoutId;
body.addEventListener('mousedown', () => {
  timeoutId = setTimeout(() => {
    body.classList.toggle('dark');
    runParticles();
  }, 1500);
});
body.addEventListener('mouseup', () => {
  clearTimeout(timeoutId);
});

// Show page onload
window.onload = () => {
  setTimeout(() => {
    body.style.opacity = 1;
  }, 1000);
}


// Handle content
main.onclick = function(e) {
  if (e.target.className === "particles-js-canvas-el") {
    let children = menu.children;

    menu.classList.remove("show");
    for (let i = 0; i < children.length; ++i) {
      children[i].classList.remove("show");
    }
    about.classList.remove("show");
    contact.classList.remove("show");
    skills.classList.remove("show");
  }
};

title.onclick = function() {
  menu.classList.toggle("show");

  about.classList.remove("show");
  skills.classList.remove("show");
  contact.classList.remove("show");
  for (let i = 0; i < menu.children; ++i) {
    menu.children[i].classList.remove("show");
  }
};

menu.onclick = function(e) {
  let target = e.target.textContent;
  let children = e.currentTarget.children;
  for (let i = 0; i < children.length; ++i) {
    if (children[i].textContent === target) {
      children[i].classList.add("show");
    } else {
      children[i].classList.remove("show");
    }
  }
  if (target === "about") {
    about.classList.add("show");
    skills.classList.remove("show");
    contact.classList.remove("show");
  } else if (target === "contact") {
    contact.classList.add("show");
    skills.classList.remove("show");
    about.classList.remove("show");
  } else if (target === "skills") {
    skills.classList.add("show");
    contact.classList.remove("show");
    about.classList.remove("show");
  }
};