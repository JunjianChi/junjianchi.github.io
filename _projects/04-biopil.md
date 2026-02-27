---
title: "Ingestible Bio-Sensor Pill for Targeted Drug Delivery"
title_zh: "用于靶向给药的可吞咽式生物传感器胶囊"
collection: projects
slug: "bio-sensor-pill"
order: 2
start: 2023-09-01
end: 2024-06-01
labels: [Biomedical Circuit]
tags: [Biomedical, Embedded System, Sensor]
summary: "Low-cost ingestible capsule with IR and IMU sensors for real-time colon-targeted drug delivery tracking."
summary_zh: "搭载红外与 IMU 传感器的低成本可吞咽胶囊，用于结肠靶向给药的实时追踪。"
cover: /images/projects/bio-sensor-pill/IMG_2931.PNG
# github:
# paperurl:
# demo:
---

This was my [IEEE CASS Student Design Competition](https://www.youtube.com/watch?v=-s3cfciB_M4) participated in Year 2.

## Motivaion

Ulcerative colitis has an incidence of 9 to 20 cases per 100,000 persons per year. In 2024, the prevalence of ulcerative colitis was estimated to be 5 million cases around the world, and the incidence is increasing worldwide. To enhance traditional systematic delivery methods, colon-targeted delivery becomes imperative. Accordingly, the biosensor pill has been specifically designed to show the potential of microelectronic pill for this crucial requirement.


## Design

A low-cost ingestible biosensor pill for colon-targeted drug delivery, equipped with IR and IMU sensors for real-time tracking of the capsule through the digestive tract. A Unity 3D digestive system model was built to verify pill localisation.

The capsule measures 25 mm in length and 16 mm in diameter. A three-layer flex-rigid PCB integrates IR and IMU sensors under an ESP32 microcontroller, powered by two 3V coin-cell batteries. Wireless data transmission uses the ESPNOW protocol.

<div class="project-gallery">
  <figure>
    <img src="/images/projects/bio-sensor-pill/IMG_2931.PNG" alt="Capsule 3D render" />
    <figcaption>Capsule 3D render — semi-transparent shell showing internal PCB stack</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/bio-sensor-pill/d05024f2cff9b5b18d6cd435f9ba8f97.PNG" alt="Flex-rigid PCB layout" />
    <figcaption>Three-section flex-rigid PCB: antenna, MCU, and sensor/power modules</figcaption>
  </figure>
</div>

## Demo

<video width="100%" controls muted playsinline style="border-radius: 6px; border: 1px solid var(--border-subtle);">
  <source src="/images/projects/bio-sensor-pill/1.mp4" type="video/mp4">
</video>
