import { projects } from "./data/data.js";

// ==== MenuMenu ======
const navBar = document.getElementById("navbar");
const menuButton = document.querySelector(".mobileMenu");
const openMenuIcon = document.querySelector("#menuIcon");
const links = document.querySelectorAll(".link-item");

// Toggling Mobile Menu

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("active-navBar");
  if (openMenuIcon.className.match("ri-menu-4-line")) {
    openMenuIcon.className = "ri-close-line";
  } else {
    openMenuIcon.className = "ri-menu-4-line";
  }
});

// Toggling Mobile Menu on every links click
links.forEach((e) => {
  e.addEventListener("click", () => {
    navBar.classList.toggle("active-navBar");
    openMenuIcon.className = "ri-menu-4-line";
  });
});

// ========  Typing Animation (Text) ========
const text = document.querySelector(".typing_anim");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Data Analyst";
  }, 0);
  setTimeout(() => {
    text.textContent = "Business Analyst";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Data Engineering";
  }, 8000); //1s = 1000 milliseconds
};
textLoad();
setInterval(textLoad, 12000);

// ====== hide Scrolling =====

const hideScrolling = () => {
  document.body.classList.toggle("hide-scrolling");
};

// ========= Project Cards & Module ========

document.addEventListener("DOMContentLoaded", () => {
  const projectShowCaseSection = document.getElementById("projectContainer");
  const moduleContainer = document.getElementById("projectModule");

  // ++++ Generate project cards ++++
  const projectCards = projects
    .map((project) => {
      return `
    <div class="project_container"  data-id="${project.id}" data-aos="fade-up">
            <div class="project">
              <!-- Project Image -->
              <img
                class="thumbnail"
                src="${project.img}"
                alt=${project.title}
              />
              <!-- Project description -->
              <div class="project_des">
                <p>
                 ${project.summery}
                </p>
              </div>
            </div>
            <!-- Project title -->
            <div class="project_title">
              <h3>${project.title}</h3>
            </div>
          </div>
    
    `;
    })
    .join("");

  projectShowCaseSection.innerHTML = projectCards;

  // Add event listeners to the project cards
  document.querySelectorAll(".project_container").forEach((card) => {
    card.addEventListener("click", function () {
      const projectId = this.getAttribute("data-id");
      showModule(projectId);
    });
  });

  const showModule = (projectId) => {
    const moduleDetail = projects.find((p) => p.id === projectId);
    if (!moduleDetail) {
      console.error("Project not found:", projectId);
      return;
    }
    //Get only project No.
    const idParts = moduleDetail.id.split("_");
    // Generate list items for moduleDescription
    const moduleDescriptionItems = moduleDetail.moduleDescription
      .map((description) => `<li class="detail-item">${description}</li>`)
      .join("");
    const projectDetails = `
    <div>
    <!-- Header -->
    <div class="module_header">
      <p class="projectNo">#${idParts[1]} <small>/ ${projects.length}</small></p>
      <!-- Close Button -->
      <div>
        <button class="moduleClose"  onClick="closeOpenModule()"><i class="ri-close-line"></i></button>
      </div>
    </div>
    <!-- module Title -->
    <div class="moduleTitle">
      <h2>${moduleDetail.title}</h2>
    </div>
    <!-- Module ThumbNail , Full Title & Detail -->
    <div class="moduleOuter">
      <!-- Thumbnail -->
      <div class="moduleImage">
        <img src="${moduleDetail.img}" alt="${moduleDetail.title}">
      </div>
      <div class="moduleInner">
        <!-- Full title -->
        <div class="fullTitle">
          <h4>${moduleDetail.moduleFullTitle}</h4>
        </div>
        <!-- Detail -->
        <div class="moduleDetail">
          <ul class="detail-list">
            ${moduleDescriptionItems}
          </ul>
        </div>
      </div>
    </div>
  </div>`;

    moduleContainer.innerHTML = projectDetails;
    moduleContainer.classList.toggle("active-module");
    hideScrolling();
  };
  window.closeOpenModule = function () {
    moduleContainer.classList.toggle("active-module");
    hideScrolling();
  };
  // Removing Module on every links click
  links.forEach((e) => {
    e.addEventListener("click", () => {
      moduleContainer.classList.remove("active-module");
    });
  });
});

/*==== SHOW SCROLL up =======*/
const scrollToTopBtn = document.getElementById("scrollup");
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrollup");
  scroll.classList.toggle("active", window.scrollY > 400);
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

// ==== offset on scroll ====
document.addEventListener("DOMContentLoaded", function () {
  // Define the offset value in pixels
  const offset = 80;

  // Select all the nav links
  const navLinks = document.querySelectorAll(".navLinks a");

  // Add click event listener to each link
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Prevent default link behavior
      e.preventDefault();

      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Get the target element
      const targetElement = document.getElementById(targetId);

      // Get the position of the target element
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Calculate the scroll position with offset
      const scrollToPosition = targetPosition - offset;

      // Smoothly scroll to the calculated position
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    });
  });
});

// ==== Changing email hyper link as per the device ====

document.addEventListener("DOMContentLoaded", function () {
  const emailButton1 = document.getElementById("gmail-btn-1");
  const emailButton2 = document.getElementById("gmail-btn-2");
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile) {
    emailButton1.href = "mailto:pragatipingole24@gmail.com";
    emailButton2.href = "mailto:pragatipingole24@gmail.com";
  } else {
    emailButton1.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=pragatipingole24@gmail.com";
    emailButton2.href =
      "https://mail.google.com/mail/?view=cm&fs=1&to=pragatipingole24@gmail.com";
  }
});

// ==== on Scroll Animation AOS ====

AOS.init();
