---
layout: page
title: SynthRCT
description: Patient-specific synthesis of anatomical change in repeat 3D CT
img: assets/img/projects/synthrct-phase-axial.gif
importance: 1
category: Research
---

SynthRCT is a conditional generative framework for producing plausible, patient-specific anatomical transformations from a single CT volume. It was developed to move beyond the simplified perturbations commonly used to test proton-therapy plans, which cannot represent the full complexity of respiratory motion and longitudinal anatomical change.

## Method

{% include figure.liquid loading="eager" path="assets/img/projects/synthrct-overview.svg" title="SynthRCT method overview: patient-specific latent deformation modelling and memory-scalable full-volume synthesis" class="img-fluid rounded z-depth-1" %}

The model combines conditional variational learning with deformable image registration. During training, a posterior encoder learns from pairs of longitudinal CT scans, while an anatomy-conditioned prior learns which deformations are plausible for the input patient. A latent-conditioned decoder then predicts stationary velocity fields over overlapping axial slabs. These local predictions are refined, stitched into a coherent full-volume field and integrated before warping the source CT.

This design provides:

- patient-specific sampling from one reference CT;
- memory-scalable synthesis for large three-dimensional volumes;
- smooth latent-space traversal and interpolation; and
- direct export of warped CTs, velocity fields and displacement fields.

## Phase-conditioned synthesis

The phase-conditioned model can also generate a complete respiratory cycle from a single source CT. The axial and coronal views below show the deformation evolving through ten breathing phases while preserving the patient-specific anatomical context.

<style>
  .synthrct-phase-grid figure {
    aspect-ratio: 1 / 1;
    margin: 0;
    overflow: hidden;
    background: var(--global-bg-color);
  }

  .synthrct-phase-grid figure picture,
  .synthrct-phase-grid figure img {
    width: 100%;
    height: 100%;
  }

  .synthrct-phase-grid figure img {
    object-fit: contain;
  }
</style>

<div class="row synthrct-phase-grid">
  <div class="col-sm-6">
    {% include figure.liquid loading="eager" path="assets/img/projects/synthrct-phase-axial.gif" title="Axial view of the generated breathing cycle" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6">
    {% include figure.liquid loading="eager" path="assets/img/projects/synthrct-phase-coronal.gif" title="Coronal view of the generated breathing cycle" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

[Preprint](https://arxiv.org/abs/2609.08627) · [Official Publication](https://papers.miccai.org/miccai-2026-sat/MIART_010.html) · [Weights](https://huggingface.co/TomasGuija/RCTSynth) · [Code](https://github.com/TomasGuija/SynthRCT)

## Citation

```bibtex
@inproceedings{GuijaValiente2026SynthRCT,
  author    = {Guija-Valiente, Tomas and Malpica, Norberto and Rodriguez-Gonzalez, Blanca},
  title     = {SynthRCT: Scalable Conditional Deformation Synthesis for Synthetic Repeat CT Generation},
  booktitle = {Medical Image Computing and Computer Assisted Intervention -- MICCAI 2026 Workshops and Challenges},
  publisher = {Springer Nature Switzerland},
  volume    = {17274},
  year      = {2026}
}
```
