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
    <span class="lang-en">Slowing down. Really seeing.</span>
    <span class="lang-zh">慢下来，去看见。</span>
  </p>
</div>

<!-- Filters -->
<div class="photo-filters">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="architecture">Architecture</button>
  <button class="filter-btn" data-filter="street">Street</button>
  <button class="filter-btn" data-filter="landscape">Landscape</button>
  <button class="filter-btn" data-filter="travel">Travel</button>
</div>

<!-- Photo Grid -->
<div class="photo-grid">
  <!-- Replace placeholders with real photos:
       <div class="photo-item" data-category="architecture">
         <img src="/images/photos/photo1.jpg" alt="Description" />
         <div class="photo-overlay"><span class="photo-caption">Caption</span></div>
       </div>
  -->

  <div class="photo-item" data-category="architecture">
    <div class="photo-item-placeholder" style="height:260px;"></div>
    <div class="photo-overlay"><span class="photo-caption">Architecture #1</span></div>
  </div>

  <div class="photo-item" data-category="street">
    <div class="photo-item-placeholder" style="height:320px;"></div>
    <div class="photo-overlay"><span class="photo-caption">Street #1</span></div>
  </div>

  <div class="photo-item" data-category="landscape">
    <div class="photo-item-placeholder" style="height:200px;"></div>
    <div class="photo-overlay"><span class="photo-caption">Landscape #1</span></div>
  </div>

  <div class="photo-item" data-category="travel">
    <div class="photo-item-placeholder" style="height:280px;"></div>
    <div class="photo-overlay"><span class="photo-caption">Travel #1</span></div>
  </div>

  <div class="photo-item" data-category="architecture">
    <div class="photo-item-placeholder" style="height:300px;"></div>
    <div class="photo-overlay"><span class="photo-caption">Architecture #2</span></div>
  </div>

  <div class="photo-item" data-category="street">
    <div class="photo-item-placeholder" style="height:240px;"></div>
    <div class="photo-overlay"><span class="photo-caption">Street #2</span></div>
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
