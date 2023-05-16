// Create Element function - [Global]
function createElement(type, clas, s_t_e) {
  let element = document.createElement(type);
  element.classList.add(clas);
  if (type === "img") {
    element.src = s_t_e;
  } else if (s_t_e.DOCUMENT_TYPE_NODE !== undefined) {
    element.appendChild(s_t_e);
  } else {
    let text = document.createTextNode(s_t_e);
    element.appendChild(text);
  }
  return element;
}

// Show the nav menu - [Header]
let navBtn = document.querySelector(".header .nav-menu");

navBtn.onclick = function () {
  let nav = document.querySelector(".header .nav");
  nav.classList.toggle("show-nav");
  navBtn.classList.toggle("nav-menu-onclick");
};

// Show more appartments - [appartments]
let showMoreBtn = document.querySelector(".appartments .view-btn");

showMoreBtn.onclick = function () {
  showMoreBtn.innerHTML = "Back";
  let boxs = document.querySelector(".appartments .boxs");
  if (showMoreBtn.classList.contains("back")) {
    // Create back event
    document.addEventListener("click", function (el) {
      if (el.target.classList.contains("back")) {
        window.location.reload();
      }
    });
  } else {
    // Create box element
    for (i = 1; i <= 50; i++) {
      let img = createElement("img", "_", "media/appartments/img4.jpg");
      let image = createElement("div", "image", img);
      let box = createElement("div", "box", image);
      let heading = createElement(
        "h3",
        "_",
        "Random Street, Apt B453, New York"
      );
      let info = createElement("div", "info", heading);
      let price = createElement("span", "price", "$3500");
      let pI = createElement("div", "p-i", price);
      let iOne = createElement("i", "fas", " ");
      iOne.classList.add("fa-shower");
      let spanOne = createElement("span", "_", iOne);
      spanOne.append("2BA");
      let iTwo = createElement("i", "fas", " ");
      iTwo.classList.add("fa-car");
      let spanTwo = createElement("span", "_", iTwo);
      spanTwo.append("2BD");
      let icons = createElement("div", "icons", spanOne);
      icons.appendChild(spanTwo);
      pI.appendChild(icons);
      info.appendChild(pI);
      box.appendChild(info);
      box.classList.add("more");
      boxs.appendChild(box);
    }
    showMoreBtn.classList.add("back");
  }
};

// set copyright year [footer]
document.querySelector(".footer .copyright .year").innerHTML =
  new Date().getFullYear();

// scroll to top [Global]{loc:fin}

let upBtn = document.querySelector(".up-btn");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    upBtn.style.display = "flex";
  } else {
    upBtn.style.display = "none";
  }
};

upBtn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
