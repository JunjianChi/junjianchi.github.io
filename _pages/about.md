---
layout: default
title: "About Me"
title_zh: "关于"
permalink: /
author_profile: true
show_title: false
---

<!-- BIO -->
<div class="about-bio">
  <p class="lang-en">
    I am a MRes student at the EPSRC CDT in Sensor Technologies
    at the University of Cambridge, supervised by
    <a href="https://elliottwu.com/" target="_blank" rel="noopener">Dr. Elliott Wu</a>.
    My current research focuses on <strong>real-to-sim-to-real transfer for robotic manipulation</strong>, investigating how to reconstruct object with high physical fidelity in simulation and transfer learned policies to real-world tactile sensors for dexterous manipulation.
  </p>
  <p class="lang-zh">
    我目前就读于剑桥大学 EPSRC 传感器技术博士培训中心，导师是
    <a href="https://elliottwu.com/" target="_blank" rel="noopener">Elliott Wu 博士</a>。
    我目前的研究方向是<strong>机器人操作的 Real-to-Sim-to-Real 迁移</strong>，探索如何在仿真中生成具有物理保真度的物体数据，并将学习到的策略迁移到真实的触觉力传感器上以实现灵巧操作。
  </p>

  <p class="lang-en">
    Previously, I received my BEng in Electrical &amp; Electronic Engineering from
    University College London (UCL), supervised by
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">Dr. Yu Wu</a>,
    where my work spanned wearable tactile sensing, human pose estimation, and biomedical circuit design.
  </p>
  <p class="lang-zh">
    此前，我在伦敦大学学院 (UCL) 获得了电气与电子工程学士学位，导师是
    <a href="https://profiles.ucl.ac.uk/45781" target="_blank" rel="noopener">吴宇博士</a>，
    本科期间的研究涉及可穿戴触觉传感、人体姿态估计和生物医学电路设计。
  </p>

  <p class="lang-en">
    Apart from research, I enjoy playing fingerstyle guitar — click ♪ in the top right to have a listen!
  </p>
  <p class="lang-zh">
    学术之外，我还喜欢弹指弹吉他。点击右上角的 ♪ 可以听一首我弹的曲子！
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
        <h3 class="pub-title"><span class="lang-en">Multimodal Smart Insole with Crossbar Crosstalk Compensation for Fall-Risk Prediction</span><span class="lang-zh">基于串扰补偿的多模态智能鞋垫跌倒风险预测</span></h3>
        <p class="pub-authors"><strong>J. Chi</strong>, Z. Zhang, Q. Zhang, A. Demosthenous, and Y. Wu</p>
        <p class="pub-venue"><span class="lang-en">IEEE International Symposium on Circuits and Systems (ISCAS), 2026</span><span class="lang-zh">IEEE 国际电路与系统研讨会 (ISCAS), 2026</span></p>
        <p class="pub-award"><span class="lang-en">Poster</span><span class="lang-zh">海报展示</span></p>
      </div>
    </div>

    <!-- ISCAS 2025 -->
    <div class="pub-card">
      <div class="pub-thumb">
        <img src="{{ '/images/pub-iscas2025.png' | relative_url }}" alt="High-Resolution Plantar Pressure Insole" />
      </div>
      <div class="pub-info">
        <h3 class="pub-title"><span class="lang-en">High-Resolution Plantar Pressure Insole System for Enhanced Lower Body Biomechanical Analysis</span><span class="lang-zh">用于增强下肢生物力学分析的高分辨率足底压力鞋垫系统</span></h3>
        <p class="pub-authors"><strong>J. Chi</strong>, Q. Zhang, Z. Zhang, A. Demosthenous, and Y. Wu</p>
        <p class="pub-venue"><span class="lang-en">IEEE International Symposium on Circuits and Systems (ISCAS), 2025</span><span class="lang-zh">IEEE 国际电路与系统研讨会 (ISCAS), 2025</span></p>
        <p class="pub-award"><span class="lang-en">Oral Presentation (Lecture)</span><span class="lang-zh">口头报告</span></p>
        <div class="pub-links">
          <a href="https://ieeexplore.ieee.org/abstract/document/11044303/" class="pub-link" target="_blank"><span class="lang-en">Paper</span><span class="lang-zh">论文</span></a>
          <a href="https://github.com/JunjianChi/Pressure2Pose" class="pub-link" target="_blank"><span class="lang-en">Code</span><span class="lang-zh">代码</span></a>
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
        <p class="edu-school"><span class="lang-en">University of Cambridge</span><span class="lang-zh">剑桥大学</span></p>
        <p class="edu-meta"><span class="lang-en">2025 &mdash; 2026 &middot; Cambridge, UK</span><span class="lang-zh">2025 &mdash; 2026 &middot; 英国剑桥</span></p>
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
        <p class="edu-school"><span class="lang-en">University College London</span><span class="lang-zh">伦敦大学学院</span></p>
        <p class="edu-meta"><span class="lang-en">2022 &mdash; 2025 &middot; London, UK</span><span class="lang-zh">2022 &mdash; 2025 &middot; 英国伦敦</span></p>
        <p class="edu-degree">
          <span class="lang-en">BEng Electrical &amp; Electronic Engineering</span>
          <span class="lang-zh">电气与电子工程 工学学士</span>
        </p>
      </div>
    </div>
  </div>
</section>

<!-- AWARDS & GRANTS -->
<section class="home-section">
  <h2 class="home-section-title">
    <span class="lang-en">Awards &amp; Grants</span>
    <span class="lang-zh">荣誉与资助</span>
  </h2>
  <ul class="highlight-list">
    <li>
      <span class="hl-date">2026</span>
      <span class="hl-text">
        <span class="lang-en"><a href="https://ieee-cas.org/award/student-awards/ieee-circuits-and-systems-flagship-society-student-travel-grants" target="_blank" rel="noopener">IEEE Circuits and Systems Society Student Travel Grant</a> ($1,500)</span>
        <span class="lang-zh"><a href="https://ieee-cas.org/award/student-awards/ieee-circuits-and-systems-flagship-society-student-travel-grants" target="_blank" rel="noopener">IEEE 电路与系统学会学生旅行资助</a> ($1,500)</span>
      </span>
    </li>
    <li>
      <span class="hl-date">2024</span>
      <span class="hl-text">
        <span class="lang-en">1st Place (UK Chapter), <a href="https://ieee-cas.org/post/announcement/2023-2024-cass-student-design-competition" target="_blank" rel="noopener">2023-2024 IEEE CASS Student Design Competition</a></span>
        <span class="lang-zh"><a href="https://ieee-cas.org/post/announcement/2023-2024-cass-student-design-competition" target="_blank" rel="noopener">2023-2024 IEEE CASS 学生设计竞赛</a> UK Chapter 第一名</span>
      </span>
    </li>
  </ul>
</section>
