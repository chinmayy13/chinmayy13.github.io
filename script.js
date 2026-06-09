// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
  ".project-card, .skill-box, .achievement-card, .timeline-item, .about-card",
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  element.classList.add("fade-up");
  revealObserver.observe(element);
});

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 70,
      behavior: "smooth",
    });
  });
});

// =========================
// HERO COUNTER ANIMATION
// =========================

const statNumbers = document.querySelectorAll(".stat h3");

let counterStarted = false;

function animateCounters() {
  if (counterStarted) return;

  const statsSection = document.querySelector(".hero-stats");

  const sectionTop = statsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    counterStarted = true;

    statNumbers.forEach((counter) => {
      const originalText = counter.innerText;

      const number = parseInt(originalText);

      if (isNaN(number)) return;

      let current = 0;

      const increment = Math.ceil(number / 40);

      const timer = setInterval(() => {
        current += increment;

        if (current >= number) {
          counter.innerText = originalText;

          clearInterval(timer);
        } else {
          if (originalText.includes("%")) {
            counter.innerText = current + "%";
          } else if (originalText.includes("+")) {
            counter.innerText = current + "+";
          } else {
            counter.innerText = current;
          }
        }
      }, 25);
    });
  }
}

window.addEventListener("scroll", animateCounters);

window.addEventListener("load", animateCounters);

// =========================
// TYPEWRITER EFFECT
// =========================

// const heroHeading = document.querySelector(".hero h1");

// if (heroHeading) {
//   const originalText = heroHeading.innerHTML;

//   heroHeading.innerHTML = "";

//   let index = 0;

//   function typeWriter() {
//     if (index < originalText.length) {
//       heroHeading.innerHTML += originalText.charAt(index);

//       index++;

//       setTimeout(typeWriter, 8);
//     }
//   }

//   window.addEventListener("load", typeWriter);
// }

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav-links");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-active");
  });
}

// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-active");
  });
});

// =========================
// CURRENT YEAR FOOTER
// =========================

const footer = document.querySelector("footer p");

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `Chinmay Kumar © ${year}`;
}

// =========================
// PROJECT CARD HOVER TILT
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -6;

    const rotateY = (x / rect.width - 0.5) * 6;

    card.style.transform = `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});

// =========================
// STAGGERED CARD ANIMATION
// =========================

const staggerCards = document.querySelectorAll(
  ".project-card, .skill-box, .achievement-card",
);

staggerCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 80}ms`;
});
