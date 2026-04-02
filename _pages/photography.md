---
layout: default
title: "Photography"
title_zh: "摄影"
permalink: /photography/
author_profile: false
show_title: false
---

<div class="photo-header">
  <h1>
    <span class="lang-en">Photography</span>
    <span class="lang-zh">摄影</span>
  </h1>
  <p>
    <span class="lang-en">Need some rest from academia</span>
    <span class="lang-zh">什么时候去南极</span>
  </p>
</div>

<!-- Filters -->
<div class="photo-filters">
  <button class="filter-btn active" data-filter="all"><span class="lang-en">All</span><span class="lang-zh">全部</span></button>
  <button class="filter-btn" data-filter="architecture"><span class="lang-en">Architecture</span><span class="lang-zh">建筑</span></button>
  <button class="filter-btn" data-filter="street"><span class="lang-en">Street</span><span class="lang-zh">街拍</span></button>
  <button class="filter-btn" data-filter="landscape"><span class="lang-en">Landscape</span><span class="lang-zh">风景</span></button>
  <button class="filter-btn" data-filter="sea"><span class="lang-en">Sea</span><span class="lang-zh">海</span></button>
</div>

<!-- Photo Grid -->
<div class="photo-grid">
  <div class="photo-item" data-category="architecture">
    <img src="{{ '/images/photography/sanfrancisco.jpeg' | relative_url }}" alt="Golden Gate Bridge in Fog, San Francisco" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Golden Gate Bridge in Fog, San Francisco</span><span class="lang-zh">雾中金门大桥，旧金山</span></span></div>
  </div>

  <div class="photo-item" data-category="landscape">
    <img src="{{ '/images/photography/brighton2.jpeg' | relative_url }}" alt="Milky Way & Meteor, Brighton" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Milky Way & Meteor, Brighton</span><span class="lang-zh">银河与流星，布莱顿</span></span></div>
  </div>

  <div class="photo-item" data-category="landscape">
    <img src="{{ '/images/photography/brighton.jpeg' | relative_url }}" alt="Perseid Meteor Shower, Brighton" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Perseid Meteor Shower, Brighton</span><span class="lang-zh">英仙座流星雨，布莱顿</span></span></div>
  </div>

  <div class="photo-item" data-category="sea">
    <img src="{{ '/images/photography/brightonmorning.jpeg' | relative_url }}" alt="Beachy Head Lighthouse, Dawn" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Beachy Head Lighthouse, Dawn</span><span class="lang-zh">比奇角灯塔，黎明</span></span></div>
  </div>

  <div class="photo-item" data-category="landscape">
    <img src="{{ '/images/photography/norway.jpeg' | relative_url }}" alt="Snow Mountain Lodge, Norway" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Snow Mountain Lodge, Norway</span><span class="lang-zh">雪山小屋，挪威</span></span></div>
  </div>

  <div class="photo-item" data-category="sea">
    <img src="{{ '/images/photography/santamonica3.jpeg' | relative_url }}" alt="Crescent Moon, Santa Monica" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Crescent Moon, Santa Monica</span><span class="lang-zh">新月，圣莫尼卡</span></span></div>
  </div>

  <div class="photo-item" data-category="street">
    <img src="{{ '/images/photography/philadelphia.jpeg' | relative_url }}" alt="Golden Hour, Philadelphia" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Golden Hour, Philadelphia</span><span class="lang-zh">黄金时刻，费城</span></span></div>
  </div>

  <div class="photo-item" data-category="sea">
    <img src="{{ '/images/photography/santamonica.jpeg' | relative_url }}" alt="Sunset Beach, Santa Monica" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Sunset Beach, Santa Monica</span><span class="lang-zh">日落海滩，圣莫尼卡</span></span></div>
  </div>

  <div class="photo-item" data-category="sea">
    <img src="{{ '/images/photography/santatmonica2.jpeg' | relative_url }}" alt="Dusk Swimmers, Santa Monica" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Dusk Swimmers, Santa Monica</span><span class="lang-zh">黄昏泳者，圣莫尼卡</span></span></div>
  </div>

  <div class="photo-item" data-category="landscape">
    <img src="{{ '/images/photography/stabbs.jpeg' | relative_url }}" alt="Razorbill on the Cliffs, St Abb's Head" loading="lazy" />
    <div class="photo-overlay"><span class="photo-caption"><span class="lang-en">Razorbill on the Cliffs, St Abb's Head</span><span class="lang-zh">崖上刀嘴海雀，圣阿布斯角</span></span></div>
  </div>
</div>

<!-- Lightbox -->
<div class="lightbox" id="lightbox">
  <div class="lightbox-content">
    <button class="lightbox-close">&times;</button>
    <img class="lightbox-img" src="" alt="" />
    <p class="lightbox-caption"></p>
  </div>
</div>
