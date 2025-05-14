# Multimodal Language Model Application Examples

## Assignment Overview

This repository demonstrates various use cases of multimodal language models, with a focus on PaLIGemma 2 for JSON data extraction from images. The assignment includes detailed code walkthroughs explaining both implementation and outputs.

## YouTube Demo

[Watch the Full Tutorial and Demo](https://youtu.be/5iIuFNmcTAQ)

## Interactive Notebook

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Optional-Catchup-For-Quiz/Optional_Catchup_For_Quiz_Multimodal.ipynb)

## Assignment Details

### Model Overview

The assignment focuses on PaLIGemma 2, Google's powerful multimodal language model that combines:

- **SigLIP-So400m**: Vision encoder that processes images at various resolutions (224px, 448px, or 896px)
- **Gemma 2**: Language model ranging from 2B to 27B parameters
- **Multimodal Projector**: Connects vision and language components

### Key Features Demonstrated

1. **JSON Data Extraction**: Converting visual information into structured JSON format
2. **Fine-tuning Techniques**: Using LoRA and QLoRA for efficient adaptation
3. **Dataset Preparation**: JSONL format preparation with prefix/suffix structure
4. **Performance Optimization**: Strategies for balancing performance with computational constraints

### Implementation Highlights

- **Model Loading**: Efficient loading using quantization techniques
- **Fine-tuning Process**: Step-by-step training with hyperparameter optimization
- **Evaluation**: Comprehensive metrics for assessing model performance
- **Inference**: Optimized pipeline for production deployment

## Requirements

- Python 3.8+
- PyTorch 2.0+
- Transformers 4.35+
- PEFT (Parameter-Efficient Fine-Tuning)
- Accelerate
- Lightning
- Jupyter Notebook/Lab

## References

- [PaLIGemma 2 Blog Post](https://blog.roboflow.com/fine-tune-paligemma-2/)
- [Google Developers Blog: PaLIGemma 2](https://developers.googleblog.com/en/introducing-paligemma-2-powerful-vision-language-models-simple-fine-tuning/)
- [Hands-On Large Language Models](https://learning.oreilly.com/library/view/hands-on-large-language/9781098150952/ch09.html#transformers_for_vision)
- [Roboflow Notebooks](https://github.com/roboflow/notebooks)
