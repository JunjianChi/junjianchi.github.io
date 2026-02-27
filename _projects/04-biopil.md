---
title: "Ingestible Bio-Sensor Pill for Targeted Drug Delivery"
title_zh: "用于靶向给药的可吞咽式生物传感器胶囊"
collection: projects
slug: "bio-sensor-pill"
order: 2
start: 2023-09-01
end: 2024-06-01
labels: [Biomedical Circuit]
tags: [Biomedical, Embedded System]
summary: "Low-cost ingestible capsule with IR and IMU sensors for real-time colon-targeted drug delivery tracking."
summary_zh: "搭载红外与 IMU 传感器的低成本可吞咽胶囊，用于结肠靶向给药的实时追踪。"
cover: /images/projects/bio-sensor-pill/IMG_2931.PNG
# github:
# paperurl:
# demo:
---

<p class="lang-en">This was my <a href="https://www.youtube.com/watch?v=-s3cfciB_M4">2023 IEEE CASS Student Design Competition</a> participated in Year 2.</p>
<p class="lang-zh">这是我在大二参加的 <a href="https://www.youtube.com/watch?v=-s3cfciB_M4">IEEE CASS 学生设计竞赛</a>项目。</p>

## <span class="lang-en">Motivation</span><span class="lang-zh">研究动机</span>

<p class="lang-en">Ulcerative colitis has an incidence of 9 to 20 cases per 100,000 persons per year. In 2024, the prevalence of ulcerative colitis was estimated to be 5 million cases around the world, and the incidence is increasing worldwide. To enhance traditional systematic delivery methods, colon-targeted delivery becomes imperative. Accordingly, the biosensor pill has been specifically designed to show the potential of microelectronic pill for this crucial requirement.</p>
<p class="lang-zh">溃疡性结肠炎的年发病率为每 10 万人 9 至 20 例。2024 年，全球溃疡性结肠炎的患病人数估计达 500 万例，且发病率在世界范围内持续上升。为改进传统的全身性给药方式，结肠靶向给药变得至关重要。因此，本生物传感器胶囊专为展示微电子药丸在这一关键需求中的潜力而设计。</p>

## <span class="lang-en">Design</span><span class="lang-zh">设计方案</span>

<p class="lang-en">A low-cost ingestible biosensor pill for colon-targeted drug delivery, equipped with IR and IMU sensors for real-time tracking of the capsule through the digestive tract. A Unity 3D digestive system model was built to verify pill localisation.</p>
<p class="lang-zh">一种用于结肠靶向给药的低成本可吞咽生物传感器胶囊，搭载红外（IR）和惯性测量单元（IMU）传感器，可实时追踪胶囊在消化道中的位置。同时搭建了 Unity 3D 消化系统模型以验证胶囊定位的准确性。</p>

<p class="lang-en">The capsule measures 25 mm in length and 16 mm in diameter. A three-layer flex-rigid PCB integrates IR and IMU sensors under an ESP32 microcontroller, powered by two 3V coin-cell batteries. Wireless data transmission uses the ESPNOW protocol.</p>
<p class="lang-zh">胶囊长 25 mm，直径 16 mm。三层软硬结合 PCB 集成了红外和 IMU 传感器，由 ESP32 微控制器驱动，搭配两枚 3V 纽扣电池供电。无线数据传输采用 ESPNOW 协议。</p>

<div class="project-gallery">
  <figure>
    <img src="/images/projects/bio-sensor-pill/IMG_2931.PNG" alt="Capsule 3D render" />
    <figcaption><span class="lang-en">Capsule 3D render — semi-transparent shell showing internal PCB stack</span><span class="lang-zh">胶囊 3D 渲染图 — 半透明外壳展示内部 PCB 堆叠结构</span></figcaption>
  </figure>
  <figure>
    <img src="/images/projects/bio-sensor-pill/d05024f2cff9b5b18d6cd435f9ba8f97.PNG" alt="Flex-rigid PCB layout" />
    <figcaption><span class="lang-en">Three-section flex-rigid PCB: antenna, MCU, and sensor</span><span class="lang-zh">三段式软硬结合 PCB：天线、MCU 及传感器</span></figcaption>
  </figure>
</div>

## <span class="lang-en">Demo</span><span class="lang-zh">演示</span>

<video width="100%" controls muted playsinline style="border-radius: 6px; border: 1px solid var(--border-subtle);">
  <source src="/images/projects/bio-sensor-pill/1.mp4" type="video/mp4">
</video>
