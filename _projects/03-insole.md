---
title: "Smart Insole for Lower Limb Biomechanical Analysis"
title_zh: "用于下肢生物力学分析的智能鞋垫"
collection: projects
slug: "smart-insole"
order: 1
start: 2023-09-01
end: 2025-06-01
labels: [Biomedical Circuit]
tags: [Wearable, Biomedical, Sensor]
summary: "High-resolution plantar pressure insole with 253 sensors per foot and AI-driven lower body joint prediction for rehabilitation and gait analysis."
summary_zh: "每只脚搭载 253 个高密度传感器的足底压力鞋垫，结合 AI 驱动的下肢关节预测，用于康复与步态分析。"
cover: /images/projects/smart-insole/insole_pcb1-5.png
# github: https://github.com/JunjianChi/Pressure2Pose
# paperurl:
# demo:
---

<p class="lang-en">This was my undergraduate research project (Year 2–3) at UCL, which resulted in two publications at IEEE ISCAS. For details, see <a href="/#publications">Publications</a>.</p>
<p class="lang-zh">这是我在 UCL 大二至大三期间的本科研究项目，成果发表于两篇 IEEE ISCAS 论文。详见<a href="/#publications">发表论文</a>。</p>

## <span class="lang-en">Motivation</span><span class="lang-zh">研究动机</span>

<p class="lang-en">Each year over 100,000 knee replacements are performed in the UK, mostly for patients aged 50+, with recovery lasting up to a year. Many older adults also face reduced strength, balance, and mobility — key indicators of frailty that raise the risk of falls. While exercise and rehabilitation help, there is no practical way to monitor movement quality outside the lab, limiting both clinical care and safe home-based recovery.</p>
<p class="lang-zh">英国每年进行超过 10 万例膝关节置换手术，患者多为 50 岁以上，康复期长达一年。许多老年人还面临力量、平衡和活动能力下降等问题——这些都是衰弱的关键指标，会增加跌倒风险。尽管运动和康复训练有所帮助，但目前尚无实用的方法在实验室以外监测运动质量，这限制了临床护理和安全的居家康复。</p>

## <span class="lang-en">System</span><span class="lang-zh">系统方案</span>

<p class="lang-en">A real-time insole system featuring <strong>253 high-density resistive pressure sensors</strong> (4 sensors/cm²) per foot with <strong>60 Hz wireless data transfer</strong>. Combined with a custom AI model, the system predicts six lower body joint landmark positions from plantar pressure maps alone — bringing lab-grade biomechanical insight into a wearable form factor.</p>
<p class="lang-zh">一套实时鞋垫系统，每只脚搭载 <strong>253 个高密度电阻式压力传感器</strong>（4 个/cm²），支持 <strong>60 Hz 无线数据传输</strong>。结合定制 AI 模型，系统仅通过足底压力分布图即可预测六个下肢关节标记点位置——将实验室级的生物力学分析融入可穿戴设备。</p>

<div class="project-gallery">
  <figure>
    <img src="/images/projects/smart-insole/IMG_5342.PNG" alt="Smart Insole Ver1 — 3D exploded view" />
    <figcaption><span class="lang-en">Ver1 (June 2024) — PCB with multiplexers stacked with ESP32 development board</span><span class="lang-zh">第一版（2024 年 6 月）— 多路复用器 PCB 与 ESP32 开发板堆叠</span></figcaption>
  </figure>
  <figure>
    <img src="/images/projects/smart-insole/insole_pcb1-5.png" alt="Smart Insole Ver2 — compact PCB with integrated ESP32" />
    <figcaption><span class="lang-en">Ver2 (Apr 2025) — Integrated ESP32 chip on a compact single-board design with IMU</span><span class="lang-zh">第二版（2025 年 4 月）— 集成 ESP32 芯片的紧凑单板设计，含 IMU</span></figcaption>
  </figure>
</div>

## <span class="lang-en">Hardware Development</span><span class="lang-zh">硬件开发</span>

<div class="project-gallery">
  <figure>
    <img src="/images/projects/smart-insole/IMG_0750.jpg" alt="PCB soldering under microscope" />
    <figcaption><span class="lang-en">SMD soldering under microscope in the lab</span><span class="lang-zh">实验室显微镜下的 SMD 焊接</span></figcaption>
  </figure>
  <figure>
    <img src="/images/projects/smart-insole/IMG_2990.jpg" alt="Microscope view of BLE chip" />
    <figcaption><span class="lang-en">Microscope inspection of the BLE module</span><span class="lang-zh">显微镜下的 BLE 模块检查</span></figcaption>
  </figure>
</div>
