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

This was my undergraduate research project (Year 2–3) at UCL, which resulted in two publications at IEEE ISCAS. For details, see [Publications](/#publications).

## Motivation

Each year over 100,000 knee replacements are performed in the UK, mostly for patients aged 50+, with recovery lasting up to a year. Many older adults also face reduced strength, balance, and mobility — key indicators of frailty that raise the risk of falls. While exercise and rehabilitation help, there is no practical way to monitor movement quality outside the lab, limiting both clinical care and safe home-based recovery.

## System

A real-time insole system featuring **253 high-density resistive pressure sensors** (4 sensors/cm²) per foot with **60 Hz wireless data transfer**. Combined with a custom AI model, the system predicts six lower body joint landmark positions from plantar pressure maps alone — bringing lab-grade biomechanical insight into a wearable form factor.

<div class="project-gallery">
  <figure>
    <img src="/images/projects/smart-insole/IMG_5342.PNG" alt="Smart Insole Ver1 — 3D exploded view" />
    <figcaption>Ver1 (Sep 2023) — PCB with multiplexers stacked with ESP32 development board</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/smart-insole/insole_pcb1-5.png" alt="Smart Insole Ver2 — compact PCB with integrated ESP32" />
    <figcaption>Ver2 (Jun 2024) — Integrated ESP32 chip on a compact single-board design with IMU</figcaption>
  </figure>
</div>

## Hardware Development

<div class="project-gallery">
  <figure>
    <img src="/images/projects/smart-insole/IMG_0750.jpg" alt="PCB soldering under microscope" />
    <figcaption>SMD soldering under microscope in the lab</figcaption>
  </figure>
  <figure>
    <img src="/images/projects/smart-insole/IMG_2990.jpg" alt="Microscope view of BLE chip" />
    <figcaption>Microscope inspection of the BLE module</figcaption>
  </figure>
</div>
