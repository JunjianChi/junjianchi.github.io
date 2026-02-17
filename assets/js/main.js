/* ============================================
   JUNJIAN CHI - Main JavaScript
   Dark Mode + Bilingual Toggle + UX
   ============================================ */

(function () {
  'use strict';

  /* ------------------------------------------
     Theme (Dark / Light Mode)
  ------------------------------------------ */
  const THEME_KEY = 'jc-theme';
  const LANG_KEY = 'jc-lang';

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    // Update button icons
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.innerHTML = theme === 'dark' ? '☀' : '◑';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ------------------------------------------
     Language (EN / ZH)
  ------------------------------------------ */
  function getPreferredLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved) return saved;
    return navigator.language.startsWith('zh') ? 'zh' : 'en';
  }

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(LANG_KEY, lang);
    // Update button text
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'zh' ? 'EN' : '中';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });
    // Update page title if applicable
    updateDocTitle(lang);
  }

  function toggleLang() {
    const current = document.documentElement.getAttribute('data-lang') || 'en';
    setLang(current === 'zh' ? 'en' : 'zh');
  }

  function updateDocTitle(lang) {
    const titleEl = document.querySelector('title');
    if (!titleEl) return;
    const enTitle = titleEl.getAttribute('data-en');
    const zhTitle = titleEl.getAttribute('data-zh');
    if (lang === 'zh' && zhTitle) titleEl.textContent = zhTitle;
    else if (lang === 'en' && enTitle) titleEl.textContent = enTitle;
  }

  /* ------------------------------------------
     Navigation
  ------------------------------------------ */
  function initNav() {
    const nav = document.querySelector('.nav');
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Scroll shadow
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav && nav.classList.add('scrolled');
      } else {
        nav && nav.classList.remove('scrolled');
      }
    }, { passive: true });

    // Hamburger
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.contains('open');
        navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', !isOpen);
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (!isOpen) {
          spans[0] && (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)');
          spans[1] && (spans[1].style.opacity = '0');
          spans[2] && (spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)');
        } else {
          spans.forEach(s => {
            s.style.transform = '';
            s.style.opacity = '';
          });
        }
      });

      // Close on link click
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.querySelectorAll('span').forEach(s => {
            s.style.transform = '';
            s.style.opacity = '';
          });
        });
      });
    }

    // Active link highlight
    highlightActiveNavLink();
  }

  function highlightActiveNavLink() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html') ||
          (current === 'index.html' && href === './') || href === './' && current === '') {
        link.classList.add('active');
      } else if (href && href !== '#' && current.includes(href.replace('.html', ''))) {
        link.classList.add('active');
      }
    });
  }

  /* ------------------------------------------
     Scroll Reveal Animation
  ------------------------------------------ */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ------------------------------------------
     Photography Lightbox
  ------------------------------------------ */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('.photo-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.photo-caption');

        if (img && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || '';
        }
        if (lightboxCaption) {
          lightboxCaption.textContent = caption ? caption.textContent : '';
        }

        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn && closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ------------------------------------------
     Photography Filter
  ------------------------------------------ */
  function initPhotoFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const photoItems = document.querySelectorAll('.photo-item');

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        photoItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; }, 10);
          } else {
            item.style.opacity = '0';
            setTimeout(() => { item.style.display = 'none'; }, 250);
          }
        });
      });
    });
  }

  /* ------------------------------------------
     Smooth scroll for anchor links
  ------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement)
            .getPropertyValue('--nav-height')) || 64;
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 20;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ------------------------------------------
     Initialize
  ------------------------------------------ */
  function init() {
    // Apply saved/preferred settings immediately (before DOM fully loaded)
    setTheme(getPreferredTheme());
    setLang(getPreferredLang());

    // Wait for DOM
    document.addEventListener('DOMContentLoaded', () => {
      // Re-apply to update button states
      setTheme(document.documentElement.getAttribute('data-theme') || getPreferredTheme());
      setLang(document.documentElement.getAttribute('data-lang') || getPreferredLang());

      // Bind toggle buttons
      document.querySelectorAll('.theme-toggle').forEach(btn => {
        btn.addEventListener('click', toggleTheme);
      });
      document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', toggleLang);
      });

      // Initialize features
      initNav();
      initScrollReveal();
      initLightbox();
      initPhotoFilter();
      initSmoothScroll();
    });
  }

  // Run init immediately so theme is applied before paint (prevents flash)
  init();

})();
