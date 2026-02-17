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
    I am a MRes student at the
    <a href="https://cdt.sensors.cam.ac.uk/" target="_blank" rel="noopener">EPSRC CDT in Sensor Technologies</a>
    at the University of Cambridge, supervised by
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">Dr. Yu Wu</a>.
    My current research focuses on <strong>robotics perception and planning</strong>, exploring how
    sensor technologies and embodied learning can enable robots to better perceive and interact
    with the physical world.
  </p>
  <p class="lang-zh">
    我目前就读于剑桥大学
    <a href="https://cdt.sensors.cam.ac.uk/" target="_blank" rel="noopener">EPSRC 传感器技术博士培训中心</a>，
    导师是
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">吴宇博士</a>。
    我目前的研究方向是<strong>机器人感知与规划</strong>，探索传感器技术和具身学习如何使机器人更好地感知和交互物理世界。
  </p>

  <p class="lang-en">
    Previously, I received my BEng in Electrical &amp; Electronic Engineering from
    <a href="https://www.ucl.ac.uk/electronic-electrical-engineering/" target="_blank" rel="noopener">University College London (UCL)</a>,
    where my work spanned wearable sensing, human pose estimation, and biomedical circuit design.
  </p>
  <p class="lang-zh">
    此前，我在
    <a href="https://www.ucl.ac.uk/electronic-electrical-engineering/" target="_blank" rel="noopener">伦敦大学学院 (UCL)</a>
    获得了电气与电子工程学士学位，本科期间的研究涉及可穿戴传感、人体姿态估计和生物医学电路设计。
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
    {% for item in sorted_news limit:5 %}
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

<!-- RESEARCH -->
<section class="home-section">
  <h2 class="home-section-title">
    <span class="lang-en">Research</span>
    <span class="lang-zh">研究</span>
  </h2>
  <p class="home-section-text">
    <span class="lang-en">
      I am broadly interested in how robots can perceive, understand, and act in the physical world.
      My work combines sensor technologies, embedded systems, and machine learning to build
      intelligent perception systems for robotic applications.
    </span>
    <span class="lang-zh">
      我对机器人如何感知、理解并作用于物理世界有广泛兴趣。
      我的工作结合传感器技术、嵌入式系统和机器学习，为机器人应用构建智能感知系统。
    </span>
  </p>
  <div class="research-interests">
    <span class="ri-tag">Robotics Perception</span>
    <span class="ri-tag">Embodied Learning</span>
    <span class="ri-tag">Wearable Sensing</span>
    <span class="ri-tag">Embedded Systems</span>
  </div>
  <a href="{{ '/research/' | relative_url }}" class="section-link">
    <span class="lang-en">See all research &rarr;</span>
    <span class="lang-zh">查看全部研究 &rarr;</span>
  </a>
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
        <p class="edu-degree">
          <span class="lang-en">MRes in Sensor Technologies</span>
          <span class="lang-zh">传感器技术 硕士</span>
        </p>
        <p class="edu-school">University of Cambridge</p>
        <p class="edu-year-inline">2025 &mdash; 2026</p>
        <p class="edu-note">
          <span class="lang-en">EPSRC Centre for Doctoral Training</span>
          <span class="lang-zh">EPSRC 博士培训中心</span>
        </p>
      </div>
    </div>
    <div class="edu-item">
      <div class="edu-logo">
        <img src="{{ '/images/ucl-logo.png' | relative_url }}" alt="UCL" />
      </div>
      <div class="edu-detail">
        <p class="edu-degree">
          <span class="lang-en">BEng Electrical &amp; Electronic Engineering</span>
          <span class="lang-zh">电气与电子工程 工学学士</span>
        </p>
        <p class="edu-school">University College London (UCL)</p>
        <p class="edu-year-inline">2022 &mdash; 2025</p>
      </div>
    </div>
  </div>
</section>
