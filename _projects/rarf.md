---
layout: page
title: RARF
description: Region-aware rectified flows for 3D brain MRI inpainting
img: assets/img/projects/rarf-demo.gif
importance: 2
category: Research
---

RARF is a task-agnostic framework for masked data generation with region-aware rectified flows. Its central idea is simple: the observed context should remain unchanged, while the generative process acts only inside the region that must be reconstructed.

## Method

{% include figure.liquid loading="eager" path="assets/img/projects/rarf-overview.svg" title="RARF overview: region-aware flow matching for masked generation and 3D brain MRI inpainting" class="img-fluid rounded z-depth-1" %}

For inpainting, RARF fills the missing region with Gaussian noise and learns a velocity field that transports that noise towards a plausible reconstruction. The model receives the partially voided image, the inpainting mask and the current flow timestep. Masked flow-matching and reconstruction-consistency objectives train it to recover the missing content without modifying the surrounding anatomy.

The implementation separates the generative method from the application. It supports masked inpainting, two-phase regional generation and unconditional rectified flow, with either scalar or spatial time conditioning. New tasks can therefore reuse the same training module by supplying their own data pipeline and region definitions.

## Brain MRI inpainting

RARF was instantiated as a three-dimensional brain MRI model for the BraTS 2026 Inpainting Challenge. In this setting, the observed voxels provide patient-specific anatomical context while the model reconstructs plausible healthy tissue inside a pathological region. The unchanged context is combined with the generated region after integration, preserving the anatomy outside the mask by construction.

## Interactive demonstration

{% include figure.liquid loading="eager" path="assets/img/projects/rarf-demo.gif" title="Interactive RARF demonstration on natural-image face inpainting" class="img-fluid rounded z-depth-1" %}

The same core method is also demonstrated on two-dimensional natural images. The interactive application lets a user paint a mask over an image and generate a replacement from a selected random seed, illustrating that the region-aware formulation is not tied to medical data.

[Preprint](https://arxiv.org/abs/2609.03956) · [Official Publication](https://papers.miccai.org/miccai-2026-sat/BraTS_Inpainting_013.html) · [Weights](https://huggingface.co/TomasGuija/rarf-brats) · [Code](https://github.com/TomasGuija/rarf)

## Citation

```bibtex
@inproceedings{GuijaValiente2026RARF,
  author    = {Guija-Valiente, Tomas and Rodriguez-Gonzalez, Blanca and Malpica, Norberto and Torrado-Carvajal, Angel},
  title     = {RARF: Region-Aware Rectified Flows for 3D Brain MRI Inpainting},
  booktitle = {Medical Image Computing and Computer Assisted Intervention -- MICCAI 2026 Workshops and Challenges},
  publisher = {Springer Nature Switzerland},
  volume    = {17254},
  year      = {2026}
}
```
