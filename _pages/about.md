---
layout: default
title: "About"
title_zh: "关于"
permalink: /
author_profile: true
show_title: false
---

<!-- BIO -->
<div class="about-bio">
  <p class="lang-en">
    I am a MRes student at the EPSRC CDT in Sensor Technologies
    at the University of Cambridge.
    My current research focuses on <strong>robotics perception and planning</strong>, exploring how
    sensor technologies and embodied learning can enable robots to better perceive and interact
    with the physical world.
  </p>
  <p class="lang-zh">
    我目前就读于剑桥大学 EPSRC 传感器技术博士培训中心。
    我目前的研究方向是<strong>机器人感知与规划</strong>，探索传感器技术和具身学习如何使机器人更好地感知和交互物理世界。
  </p>

  <p class="lang-en">
    Previously, I received my BEng in Electrical &amp; Electronic Engineering from
    University College London (UCL), supervised by
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">Dr. Yu Wu</a>,
    where my work spanned wearable sensing, human pose estimation, and biomedical circuit design.
  </p>
  <p class="lang-zh">
    此前，我在伦敦大学学院 (UCL) 获得了电气与电子工程学士学位，导师是
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">吴宇博士</a>，
    本科期间的研究涉及可穿戴传感、人体姿态估计和生物医学电路设计。
  </p>
</div>

<!-- HIGHLIGHTS -->
<section class="home-section">
  <h2 class="home-section-title">
    <span class="lang-en">Highlights</span>
    <span class="lang-zh">动态</span>
  </h2>
  <ul class="highlight-list">
    {% assign sorted_news = site.news | sort: "date" | reverse %}
    {% for item in sorted_news limit:6 %}
    <li>
      <span class="hl-date">{{ item.date | date: "%Y.%m" }}</span>
      <span class="hl-text">
        <span class="lang-en">{{ item.content_en | default: item.content }}</span>
        {% if item.content_zh %}<span class="lang-zh">{{ item.content_zh }}</span>{% endif %}
      </span>
    </li>
    {% endfor %}
  </ul>
</section>

<!-- PUBLICATIONS -->
<section class="home-section">
  <h2 class="home-section-title">
    <span class="lang-en">Publications</span>
    <span class="lang-zh">发表论文</span>
  </h2>
  <div class="pub-list">

    <!-- ISCAS 2026 -->
    <div class="pub-card">
      <div class="pub-thumb">
        <img src="{{ '/images/pub-iscas2026.png' | relative_url }}" alt="Multimodal Smart Insole" />
      </div>
      <div class="pub-info">
        <h3 class="pub-title">Multimodal Smart Insole with Crossbar Crosstalk Compensation for Fall-Risk Prediction</h3>
        <p class="pub-authors"><strong>J. Chi</strong>, Z. Zhang, Q. Zhang, A. Demosthenous, and Y. Wu</p>
        <p class="pub-venue">IEEE International Symposium on Circuits and Systems (ISCAS), 2026</p>
        <p class="pub-award">Poster</p>
      </div>
    </div>

    <!-- ISCAS 2025 -->
    <div class="pub-card">
      <div class="pub-thumb">
        <img src="{{ '/images/pub-iscas2025.png' | relative_url }}" alt="High-Resolution Plantar Pressure Insole" />
      </div>
      <div class="pub-info">
        <h3 class="pub-title">High-Resolution Plantar Pressure Insole System for Enhanced Lower Body Biomechanical Analysis</h3>
        <p class="pub-authors"><strong>J. Chi</strong>, Q. Zhang, Z. Zhang, A. Demosthenous, and Y. Wu</p>
        <p class="pub-venue">IEEE International Symposium on Circuits and Systems (ISCAS), 2025</p>
        <p class="pub-award">Oral Presentation (Lecture)</p>
        <div class="pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/11044303/" class="pub-link" target="_blank">Paper</a>
          <a href="https://github.com/JunjianChi/Pressure2Pose" class="pub-link" target="_blank">Code</a>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- EDUCATION -->
<section class="home-section">
  <h2 class="home-section-title">
    <span class="lang-en">Education</span>
    <span class="lang-zh">教育经历</span>
  </h2>
  <div class="edu-timeline">
    <div class="edu-item">
      <div class="edu-logo">
        <img src="{{ '/images/cambridge-logo.png' | relative_url }}" alt="University of Cambridge" />
      </div>
      <div class="edu-detail">
        <p class="edu-school">University of Cambridge</p>
        <p class="edu-meta">2025 &mdash; 2026 &middot; Cambridge, UK</p>
        <p class="edu-degree">
          <span class="lang-en">MRes in Sensor Technologies</span>
          <span class="lang-zh">传感器技术 硕士</span>
        </p>
      </div>
    </div>
    <div class="edu-item">
      <div class="edu-logo">
        <img src="{{ '/images/ucl-logo.png' | relative_url }}" alt="UCL" />
      </div>
      <div class="edu-detail">
        <p class="edu-school">University College London</p>
        <p class="edu-meta">2022 &mdash; 2025 &middot; London, UK</p>
        <p class="edu-degree">
          <span class="lang-en">BEng Electrical &amp; Electronic Engineering</span>
          <span class="lang-zh">电气与电子工程 工学学士</span>
        </p>
      </div>
    </div>
  </div>
</section>
