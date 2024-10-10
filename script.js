///////////////////////////////////////////////////////////
// Set YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear + " David Galera";

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

// Only select anchor elements
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    // const href = link.getAttribute("href");
    // console.log(href);

    // Scroll back to top
    // if (href === "#")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });

      // Scroll to other links
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false)
      document.body.classList.add("sticky");

    if (ent.isIntersecting  === true)
      document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null, // the root is where the element should appear or not
    threshold: 0, // fires an event as soon as the hero section is completely outside the viewport
    rootMargin: "-80px" // height of the nav bar
  }
);

obs.observe(sectionHeroEl);