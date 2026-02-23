/* ============================================
   JUNJIAN CHI - Main JavaScript
   Theme + Language + Navigation + UX
   ============================================ */

(function () {
  'use strict';

  var THEME_KEY = 'jc-theme';
  var LANG_KEY = 'jc-lang';

  /* ------------------------------------------
     Theme (Dark / Light)
  ------------------------------------------ */
  function getPreferredTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    document.querySelectorAll('.theme-toggle').forEach(function(btn) {
      btn.innerHTML = theme === 'dark' ? '&#9788;' : '&#9685;';
    });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  /* ------------------------------------------
     Music Toggle
  ------------------------------------------ */
  var MUSIC_KEY = 'jc-music';
  var MUSIC_POS_KEY = 'jc-music-pos';
  var bgMusic = null;
  var musicPlaying = false;
  var posInterval = null;

  function getMusicAudio() {
    if (!bgMusic) {
      bgMusic = new Audio('/assets/audio/MountainofMiracle.mp3');
      bgMusic.loop = true;
      bgMusic.volume = 0.5;
    }
    return bgMusic;
  }

  function savePosition() {
    if (bgMusic) {
      localStorage.setItem(MUSIC_POS_KEY, bgMusic.currentTime);
    }
  }

  function startSavingPosition() {
    if (posInterval) clearInterval(posInterval);
    posInterval = setInterval(savePosition, 1000);
  }

  function stopSavingPosition() {
    if (posInterval) { clearInterval(posInterval); posInterval = null; }
  }

  function updateMusicButtons() {
    document.querySelectorAll('.music-toggle').forEach(function(btn) {
      btn.textContent = musicPlaying ? '♫' : '♪';
      btn.classList.toggle('playing', musicPlaying);
    });
  }

  function playAudioFromSaved(audio) {
    var saved = parseFloat(localStorage.getItem(MUSIC_POS_KEY));
    if (saved && !isNaN(saved)) audio.currentTime = saved;
    return audio.play();
  }

  function toggleMusic() {
    var audio = getMusicAudio();
    if (musicPlaying) {
      audio.pause();
      savePosition();
      stopSavingPosition();
      musicPlaying = false;
    } else {
      playAudioFromSaved(audio).catch(function() {
        musicPlaying = false;
        localStorage.setItem(MUSIC_KEY, 'off');
        updateMusicButtons();
      });
      musicPlaying = true;
      startSavingPosition();
    }
    localStorage.setItem(MUSIC_KEY, musicPlaying ? 'on' : 'off');
    updateMusicButtons();
  }

  function resumeMusic() {
    if (localStorage.getItem(MUSIC_KEY) === 'on') {
      var audio = getMusicAudio();
      // Show playing state immediately
      musicPlaying = true;
      updateMusicButtons();
      playAudioFromSaved(audio).then(function() {
        startSavingPosition();
      }).catch(function() {
        // Browser blocked autoplay, resume on first user click
        var resume = function() {
          if (localStorage.getItem(MUSIC_KEY) === 'on') {
            playAudioFromSaved(audio).then(function() {
              musicPlaying = true;
              updateMusicButtons();
              startSavingPosition();
            });
          }
          document.removeEventListener('click', resume);
        };
        document.addEventListener('click', resume);
      });
    }
  }

  // Save position right before page unloads
  window.addEventListener('beforeunload', function() {
    if (musicPlaying) savePosition();
  });

  /* ------------------------------------------
     Language (EN / ZH)
  ------------------------------------------ */
  function getPreferredLang() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(LANG_KEY, lang);
    document.querySelectorAll('.lang-toggle').forEach(function(btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '\u4e2d';
    });
    // Update page title
    var titleEl = document.querySelector('title');
    if (titleEl) {
      var en = titleEl.getAttribute('data-en');
      var zh = titleEl.getAttribute('data-zh');
      if (lang === 'zh' && zh) titleEl.textContent = zh;
      else if (lang === 'en' && en) titleEl.textContent = en;
    }
  }

  function toggleLang() {
    var current = document.documentElement.getAttribute('data-lang') || 'en';
    setLang(current === 'zh' ? 'en' : 'zh');
  }

  /* ------------------------------------------
     Navigation
  ------------------------------------------ */
  function initNav() {
    var hamburger = document.querySelector('.nav-hamburger');
    var navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function() {
        var isOpen = navLinks.classList.contains('open');
        navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', !isOpen);
        var spans = hamburger.querySelectorAll('span');
        if (!isOpen) {
          if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          if (spans[1]) spans[1].style.opacity = '0';
          if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans.forEach(function(s) { s.style.transform = ''; s.style.opacity = ''; });
        }
      });

      navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navLinks.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          hamburger.querySelectorAll('span').forEach(function(s) {
            s.style.transform = ''; s.style.opacity = '';
          });
        });
      });
    }
  }

  /* ------------------------------------------
     Photography: Lightbox
  ------------------------------------------ */
  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    var lbImg = lightbox.querySelector('.lightbox-img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    document.querySelectorAll('.photo-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var img = item.querySelector('img');
        var caption = item.querySelector('.photo-caption');
        if (img && lbImg) { lbImg.src = img.src; lbImg.alt = img.alt || ''; }
        if (lbCaption) lbCaption.textContent = caption ? caption.textContent : '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLB() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLB);
    lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLB(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLB(); });
  }

  /* ------------------------------------------
     Photography: Filter
  ------------------------------------------ */
  function initPhotoFilter() {
    var btns = document.querySelectorAll('.filter-btn');
    var items = document.querySelectorAll('.photo-item');
    if (!btns.length) return;

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        btns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        items.forEach(function(item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
            setTimeout(function() { item.style.opacity = '1'; }, 10);
          } else {
            item.style.opacity = '0';
            setTimeout(function() { item.style.display = 'none'; }, 200);
          }
        });
      });
    });
  }

  /* ------------------------------------------
     Init
  ------------------------------------------ */
  function init() {
    setTheme(getPreferredTheme());
    setLang(getPreferredLang());

    document.addEventListener('DOMContentLoaded', function() {
      setTheme(document.documentElement.getAttribute('data-theme') || getPreferredTheme());
      setLang(document.documentElement.getAttribute('data-lang') || getPreferredLang());

      document.querySelectorAll('.theme-toggle').forEach(function(btn) {
        btn.addEventListener('click', toggleTheme);
      });
      document.querySelectorAll('.lang-toggle').forEach(function(btn) {
        btn.addEventListener('click', toggleLang);
      });
      document.querySelectorAll('.music-toggle').forEach(function(btn) {
        btn.addEventListener('click', toggleMusic);
      });
      resumeMusic();

      initNav();
      initLightbox();
      initPhotoFilter();
    });
  }

  init();
})();
