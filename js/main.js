/* ============================================================
   Food Stall Pre-Order App — Website Scripts
   ============================================================ */

(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu.classList.contains("open"));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var current = document.body.getAttribute("data-page");
  if (current) {
    menu.querySelectorAll("a").forEach(function (link) {
      if (link.getAttribute("data-nav") === current) {
        link.classList.add("active");
      }
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var footerBottom = document.querySelector(".footer-bottom");
  if (footerBottom && !document.querySelector(".footer-social")) {
    var socials = document.createElement("div");
    socials.className = "footer-social";

    var networks = [
      ["Facebook", "https://www.facebook.com/", "fb://",
        '<svg viewBox="0 0 24 24"><path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.5 1.6-1.5h1.2V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3H10.6v7h2.9z"/></svg>'],
      ["Instagram", "https://www.instagram.com/", "instagram://",
        '<svg viewBox="0 0 24 24"><path d="M12 8.7a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6zM12 6.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm5.3-.3a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/><path d="M4 19.6V8.4A4.4 4.4 0 0 1 8.4 4h7.2A4.4 4.4 0 0 1 20 8.4v11.2a4.4 4.4 0 0 1-4.4 4.4H8.4A4.4 4.4 0 0 1 4 19.6zm2.2.3a2.2 2.2 0 0 0 2.2 2.2h7.2a2.2 2.2 0 0 0 2.2-2.2V8.4a2.2 2.2 0 0 0-2.2-2.2H8.4a2.2 2.2 0 0 0-2.2 2.2v11.5z"/></svg>'],
      ["YouTube", "https://www.youtube.com/", "youtube://",
        '<svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.6 12 10 15.2z"/></svg>'],
      ["X", "https://x.com/", "twitter://",
        '<svg viewBox="0 0 24 24"><path d="M17.7 3H20.5l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H3.8l6.5-7.5L3.5 3h5.7l4 5.3L17.7 3zm-1 15.3h1.6L7.9 4.6H6.2L16.7 18.3z"/></svg>'],
      ["LinkedIn", "https://www.linkedin.com/", "linkedin://",
        '<svg viewBox="0 0 24 24"><path d="M4.9 8.2h3v9H4.9v-9zM6.4 4.3a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM9.4 8.2h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v4.6h-3v-4.1c0-1 0-2.3-1.4-2.3s-1.7 1.1-1.7 2.3v4.1h-3v-9z"/></svg>'],
      ["TikTok", "https://www.tiktok.com/", "tiktok://",
        '<svg viewBox="0 0 24 24"><path d="M16.6 4h.6a2.6 2.6 0 0 0 .5 3.1 5.6 5.6 0 0 0 2.9.9v2.7a6.6 6.6 0 0 1-2.9-.7v5.9A5.8 5.8 0 1 1 9.7 11v.02a5.8 5.8 0 0 1 .5 0V13.6a3.1 3.1 0 1 0 3.1 3.1V4h.8c0 .2.1.4.1.6h2.4z"/></svg>']
    ];

    var isMobile =
      /Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|Mobile/i.test(
        navigator.userAgent || navigator.vendor || window.opera || ""
      ) ||
      (typeof window.orientation !== "undefined" && window.orientation !== null);

    networks.forEach(function (net) {
      var a = document.createElement("a");
      a.href = isMobile ? net[2] : net[1];
      a.setAttribute("aria-label", net[0]);
      a.title = isMobile ? "Open " + net[0] + " app" : net[0];
      if (!isMobile) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      a.innerHTML = net[3];
      socials.appendChild(a);
    });

    footerBottom.parentNode.insertBefore(socials, footerBottom);
  }

  /* Contact form validation is handled in the effects IIFE below */
})();

/* ============================================================
   EFFECTS & MOTION — scroll reveal, progress bar, card tilt
   (respects prefers-reduced-motion)
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Scroll progress bar ---- */
  if (!reduceMotion) {
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);
    var onScroll = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---- Scroll reveal (Intersection Observer) ---- */
  var revealSelectors = [
    ".card", ".benefit-box", ".section-title", ".section-sub",
    ".diagram-frame", ".table-wrap", ".list-block", ".subsource",
    ".form-card", ".team-card", ".info-list", ".wbs-colx",
    ".as-card", ".strip .container", ".page-hero .container",
    ".stat-card", "[data-reveal]"
  ].join(",");

  var revealTargets = document.querySelectorAll(revealSelectors);
  if (revealTargets.length && !reduceMotion && "IntersectionObserver" in window) {
    revealTargets.forEach(function (el) { el.classList.add("will-reveal"); });

    /* Stagger cards inside grids (Card 1 → 2 → 3 → 4) */
    document.querySelectorAll(".grid-2, .grid-3, .grid-4").forEach(function (grid) {
      Array.prototype.forEach.call(grid.children, function (child, i) {
        if (child.classList.contains("card")) {
          child.style.setProperty("--reveal-delay", (i * 0.1).toFixed(2) + "s");
        }
      });
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -48px 0px" });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }

  /* ---- Card spotlight + 3D tilt (aura + mouse-follow) ---- */
  if (!reduceMotion) {
    document.querySelectorAll(".card, .benefit-box").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var x = e.clientX - r.left;
        var y = e.clientY - r.top;
        card.style.setProperty("--spot-x", x + "px");
        card.style.setProperty("--spot-y", y + "px");
        card.style.setProperty("--rx", ((y / r.height) * 4 - 2).toFixed(2) + "deg");
        card.style.setProperty("--ry", ((x / r.width) * 4 - 2).toFixed(2) + "deg");
      });
      card.addEventListener("mouseleave", function () {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
  }

  /* ---- Hero floating particles ---- */
  var hero = document.querySelector(".hero");
  if (hero && !reduceMotion) {
    var particles = document.createElement("div");
    particles.className = "hero-particles";
    for (var p = 0; p < 8; p++) {
      particles.appendChild(document.createElement("i"));
    }
    hero.insertBefore(particles, hero.firstChild);
  }

  /* ---- Hero parallax ---- */
  var heroContent = document.querySelector(".hero .container");
  if (heroContent && !reduceMotion) {
    heroContent.classList.add("hero-content");
    var onParallax = function () {
      if (!hero) return;
      var rect = hero.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var offset = rect.top * 0.12;
      heroContent.style.transform = "translateY(" + offset.toFixed(1) + "px)";
    };
    document.addEventListener("scroll", onParallax, { passive: true });
    onParallax();
  }

  /* ---- Animated counters (data-count) ---- */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        countObserver.unobserve(el);
        if (reduceMotion) return;
        var target = parseFloat(el.dataset.count);
        var suffix = el.dataset.suffix || "";
        var duration = 1400;
        var start = null;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / duration, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.innerHTML = Math.round(target * eased).toLocaleString("en-US") +
            '<span class="stat-suffix">' + suffix + "</span>";
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { countObserver.observe(c); });
  }

  /* ---- Nav: shrink on scroll + hide on scroll down ---- */
  var header = document.querySelector(".site-header");
  var navMenu2 = document.querySelector(".nav-menu");
  if (header) {
    var lastY = window.scrollY;
    var onNav = function () {
      var y = window.scrollY;
      if (y > 40) { header.classList.add("nav-scrolled"); }
      else { header.classList.remove("nav-scrolled"); }
      if (!navMenu2 || !navMenu2.classList.contains("open")) {
        if (y > lastY && y > 180) { header.classList.add("nav-hidden"); }
        else { header.classList.remove("nav-hidden"); }
      }
      lastY = y;
    };
    document.addEventListener("scroll", onNav, { passive: true });
  }

  /* ---- Button ripple (mouse + touch) ---- */
  (function () {
    var pointerSupported = window.PointerEvent;
    function spawn(x, y, btn) {
      if (reduceMotion) return;
      var r = btn.getBoundingClientRect();
      var d = Math.max(r.width, r.height);
      var c = document.createElement("span");
      c.className = "ripple";
      c.style.width = c.style.height = d + "px";
      c.style.left = x - d / 2 + "px";
      c.style.top = y - d / 2 + "px";
      btn.appendChild(c);
      setTimeout(function () { c.remove(); }, 650);
    }
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.addEventListener("pointerdown", function (e) {
        spawn(e.clientX - btn.getBoundingClientRect().left + 0, e.clientY - btn.getBoundingClientRect().top + 0, btn);
      });
    });
  })();

  /* ---- Contact form: validation + success toast + shake ---- */
  var contactForm2 = document.getElementById("contact-form");
  if (contactForm2) {
    var inputs = contactForm2.querySelectorAll("input, textarea");
    function markInvalid(el) {
      el.classList.add("input-invalid");
      el.classList.remove("shake");
      void el.offsetWidth;
      el.classList.add("shake");
      el.setAttribute("aria-invalid", "true");
    }
    function clearInvalid(el) {
      el.classList.remove("input-invalid", "shake");
      el.removeAttribute("aria-invalid");
    }
    inputs.forEach(function (el) { el.addEventListener("input", function () { clearInvalid(el); }); });
    contactForm2.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      inputs.forEach(function (el) {
        var valid = el.checkValidity();
        if (!valid) { markInvalid(el); ok = false; }
        else { clearInvalid(el); }
      });
      if (!ok) {
        var first = contactForm2.querySelector(".input-invalid");
        if (first) first.focus();
        return;
      }
      var status = document.getElementById("form-status");
      var toast = document.querySelector(".toast");
      if (status) {
        status.style.display = "block";
        status.textContent = "Thank you! Your message has been sent. We will get back to you soon.";
      }
      if (toast) toast.classList.add("show");
      contactForm2.reset();
    });
  }

  /* ---- Footer logo: app on mobile, site on desktop ---- */
  var footerAppLink = document.getElementById("footer-app-link");
  if (footerAppLink) {
    var isMobile =
      /Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|Mobile/i.test(
        navigator.userAgent || navigator.vendor || window.opera || ""
      ) ||
      (typeof window.orientation !== "undefined" && window.orientation !== null);
    if (isMobile) {
      footerAppLink.href = "foodstall://";
      footerAppLink.title = "Open the Food Stall Pre-Order app";
    } else {
      footerAppLink.href = "index.html";
      footerAppLink.title = "Go to Home";
    }
  }
})();