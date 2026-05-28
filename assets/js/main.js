/* ============================================================
   MorphoGuard | Anonymous Supplementary Material
   JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* --- DOM References --- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');
  const mediaModal = document.getElementById('media-modal');
  const modalClose = document.getElementById('modal-close');
  const modalMediaWrapper = document.getElementById('modal-media-wrapper');
  const fadeEls = document.querySelectorAll(
    '.card, .abstract-block, .image-display, .experiment-block, .equation-block, .hero-video-wrapper, .text-block'
  );

  let currentModalVideo = null;

  /* ============================================================
     Mobile Navigation Toggle
     ============================================================ */

  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.contains('active');
    if (isOpen) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      navMenu.classList.add('active');
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  });

  /* Close mobile menu when a nav link is clicked */
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ============================================================
     Navbar Scroll Effect
     ============================================================ */

  function updateNavbarScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbarScroll, { passive: true });
  updateNavbarScroll();

  /* ============================================================
     Active Section Highlighting (IntersectionObserver)
     ============================================================ */

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* ============================================================
     Fade-in Reveal Animation (IntersectionObserver)
     ============================================================ */

  fadeEls.forEach(function (el) {
    el.classList.add('fade-in');
  });

  const fadeObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -60px 0px', threshold: 0.1 }
  );

  fadeEls.forEach(function (el) {
    fadeObserver.observe(el);
  });

  /* ============================================================
     Image Modal
     ============================================================ */

  document.addEventListener('click', function (e) {
    var enlargeBtn = e.target.closest('.image-enlarge-btn');
    if (!enlargeBtn) return;

    var imageDisplay = enlargeBtn.closest('.image-display');
    if (!imageDisplay) return;

    var img = imageDisplay.querySelector('img');
    if (!img) return;

    var clonedImg = document.createElement('img');
    clonedImg.src = img.src;
    clonedImg.alt = img.alt;

    modalMediaWrapper.innerHTML = '';
    modalMediaWrapper.appendChild(clonedImg);
    openModal();
  });

  /* ============================================================
     Video Modal
     ============================================================ */

  document.addEventListener('click', function (e) {
    var enlargeBtn = e.target.closest('.video-enlarge-btn');
    if (!enlargeBtn) return;

    var videoSrc = enlargeBtn.getAttribute('data-video-src');
    if (!videoSrc) {
      var videoEl = enlargeBtn.parentElement.querySelector('video');
      if (videoEl && videoEl.querySelector('source')) {
        videoSrc = videoEl.querySelector('source').getAttribute('src');
      }
    }
    if (!videoSrc) return;

    pauseCurrentModalVideo();

    var videoEl = document.createElement('video');
    videoEl.controls = true;
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.setAttribute('preload', 'metadata');

    var sourceEl = document.createElement('source');
    sourceEl.src = videoSrc;
    sourceEl.type = 'video/mp4';
    videoEl.appendChild(sourceEl);

    modalMediaWrapper.innerHTML = '';
    modalMediaWrapper.appendChild(videoEl);
    currentModalVideo = videoEl;

    var originalVideo = enlargeBtn.parentElement.querySelector('video');
    if (originalVideo && !originalVideo.paused) {
      originalVideo.pause();
    }

    openModal();
  });

  /* ============================================================
     Modal Open / Close
     ============================================================ */

  function openModal() {
    mediaModal.classList.add('active');
    mediaModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    mediaModal.classList.remove('active');
    mediaModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    pauseCurrentModalVideo();
  }

  function pauseCurrentModalVideo() {
    if (currentModalVideo && !currentModalVideo.paused) {
      currentModalVideo.pause();
      currentModalVideo.currentTime = 0;
    }
    currentModalVideo = null;
  }

  modalClose.addEventListener('click', closeModal);

  mediaModal.addEventListener('click', function (e) {
    if (e.target === mediaModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mediaModal.classList.contains('active')) {
      closeModal();
    }
  });

  /* ============================================================
     Smooth scrolling for all internal anchor links
     ============================================================ */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
