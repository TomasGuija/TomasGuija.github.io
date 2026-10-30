---
layout: page
title: DesigNet
description: Generating editable SVG fonts with geometric design constraints
img: assets/img/projects/designet-generation.gif
importance: 3
category: Research
---

DesigNet is a hierarchical Transformer-VAE that generates complete, editable SVG fonts from a small set of reference glyphs. The project addresses a practical mismatch between neural generators and professional designers: producing a convincing raster image is not enough when the result must remain geometrically clean, editable and suitable for a real design workflow. The method received the **Best Full Paper Award at [CEIG 2026](https://eurographics.es/CEIG26/)**.

## Native vector generation

{% include figure.liquid loading="eager" path="assets/img/projects/designet-generation.gif" title="DesigNet generating an editable SVG alphabet from a subset of reference glyphs" class="img-fluid rounded z-depth-1" %}

The model operates directly on SVG command sequences rather than generating raster images and tracing them afterwards. A continuous command representation avoids coordinate quantization, while a partitioned latent space preserves local path details and a coherent global font style. At font level, the model conditions on a subset of characters and reconstructs the remaining alphabet in the same visual identity.

## Designer-oriented constraints

DesigNet equips the network with two differentiable self-refinement modules inspired by the controls used in vector-design software:

- **Continuity refinement** predicts and enforces $$C^0$$, $$G^1$$ or $$C^1$$ continuity at curve junctions by adjusting Bézier control points.
- **Alignment refinement** predicts horizontal and vertical segments and snaps them precisely to the corresponding axis.

The discrete geometric decisions are trained end to end, while deterministic operators enforce the selected constraint in the forward pass. The resulting outlines remain fully editable and achieve substantially stronger continuity and alignment accuracy while remaining competitive on reconstruction metrics.

[Preprint](https://arxiv.org/abs/2604.06494) · [Official Publication](https://doi.org/10.1016/j.cag.2026.104627) · [Weights](https://huggingface.co/TomasGuija/DesigNet) · [Code](https://github.com/TomasGuija/DesigNet)

## Citation

```bibtex
@article{GuijaValiente2026DesigNet,
  author  = {Guija-Valiente, Tomas and Suarez, Iago},
  title   = {DesigNet: Learning to Draw Vector Graphics as Designers Do},
  journal = {Computers \& Graphics},
  volume  = {137},
  pages   = {104627},
  year    = {2026},
  doi     = {10.1016/j.cag.2026.104627}
}
```
