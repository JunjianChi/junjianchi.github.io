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
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">Dr. Yu Wu</a>
    in the
    <a href="https://www.ucl.ac.uk/engineering/electronic-electrical-engineering/research/sensors-systems-and-circuits" target="_blank" rel="noopener">Sensors, Systems and Circuits</a>
    group at UCL.
  </p>
  <p class="lang-zh">
    我目前就读于剑桥大学
    <a href="https://cdt.sensors.cam.ac.uk/" target="_blank" rel="noopener">EPSRC 传感器技术博士培训中心</a>，
    导师是伦敦大学学院 (UCL)
    <a href="https://www.ucl.ac.uk/engineering/electronic-electrical-engineering/research/sensors-systems-and-circuits" target="_blank" rel="noopener">传感器、系统与电路研究组</a>
    的
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">吴宇博士</a>。
  </p>

  <p class="lang-en">
    My research interests include signal processing, machine learning, embedded systems,
    and RF &amp; communications.
  </p>
  <p class="lang-zh">
    我的研究兴趣包括信号处理、机器学习、嵌入式系统以及射频与通信。
  </p>

  <p class="lang-en">
    Previously, I received my BEng in Electrical &amp; Electronic Engineering from
    <a href="https://www.ucl.ac.uk/electronic-electrical-engineering/" target="_blank" rel="noopener">University College London (UCL)</a>,
    where I also undertook a research internship at
    <a href="https://www.ucl.ac.uk/engineering/news/2024/oct/qualcomm-internships-support-eee-students-toward-research-excellence" target="_blank" rel="noopener">Qualcomm</a>
    in RF system design.
  </p>
  <p class="lang-zh">
    此前，我在
    <a href="https://www.ucl.ac.uk/electronic-electrical-engineering/" target="_blank" rel="noopener">伦敦大学学院 (UCL)</a>
    获得了电气与电子工程学士学位，期间还在
    <a href="https://www.ucl.ac.uk/engineering/news/2024/oct/qualcomm-internships-support-eee-students-toward-research-excellence" target="_blank" rel="noopener">高通 (Qualcomm)</a>
    完成了射频系统设计方向的科研实习。
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
      My work sits at the intersection of sensor technologies, signal processing, and
      machine learning. I am broadly interested in how intelligent systems can enhance
      sensing capabilities — from bioelectronics to radar and RF systems.
    </span>
    <span class="lang-zh">
      我的研究处于传感器技术、信号处理与机器学习的交叉领域。
      我对智能系统如何增强不同领域的感知能力有广泛兴趣——从生物电子学到雷达和射频系统。
    </span>
  </p>
  <div class="research-interests">
    <span class="ri-tag">Signal Processing</span>
    <span class="ri-tag">Machine Learning</span>
    <span class="ri-tag">Embedded Systems</span>
    <span class="ri-tag">RF &amp; Communications</span>
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
      <div class="edu-year">2025 &mdash;</div>
      <div class="edu-detail">
        <p class="edu-degree">
          <span class="lang-en">MRes in Sensor Technologies</span>
          <span class="lang-zh">传感器技术 硕士</span>
        </p>
        <p class="edu-school">University of Cambridge</p>
        <p class="edu-note">
          <span class="lang-en">EPSRC Centre for Doctoral Training</span>
          <span class="lang-zh">EPSRC 博士培训中心</span>
        </p>
      </div>
    </div>
    <div class="edu-item">
      <div class="edu-year">2021 &mdash; 2025</div>
      <div class="edu-detail">
        <p class="edu-degree">
          <span class="lang-en">BEng Electrical &amp; Electronic Engineering</span>
          <span class="lang-zh">电气与电子工程 工学学士</span>
        </p>
        <p class="edu-school">University College London (UCL)</p>
      </div>
    </div>
  </div>
</section>
