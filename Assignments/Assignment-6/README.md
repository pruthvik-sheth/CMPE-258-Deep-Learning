# LLM Fine-tuning and Optimization

This repository contains a collection of experiments and implementations focused on fine-tuning, optimizing, and deploying various open-source Large Language Models (LLMs) using Unsloth and other optimization techniques.

### Video Walkthrough

Complete project demonstration: [YouTube - Comprehensive LLM Fine-tuning, Pre-training, and Deployment with Unsloth](https://youtu.be/XXXXXXXXXX)

## Subtask Descriptions

### a) Fine-tuning Open Weights LLMs

This directory contains four unique fine-tuning use cases for various open-source LLMs:

- **Llama 3.1 (8B)**: Fine-tuned for code generation tasks
- **Mistral NeMo (12B)**: Fine-tuned for conversational chat
- **Gemma 2 (9B)**: Fine-tuned for domain-specific tasks
- **Phi-3.5 (mini)**: Fine-tuned for targeted knowledge assistance

### b) Continued Pre-training

This directory demonstrates the use of Unsloth AI to extend an LLM's capabilities by teaching it a new language through continued pre-training. Includes:

- Colab notebook for continued pre-training process
- Source language data
- Target language data
- Evaluation metrics for language acquisition
- Video documentation of the methodology and results

### c) Chat Templates for Various Tasks

This section explores different chat templates for various specialized tasks:

- **Classification**: Fine-tuning for structured classification tasks
- **Conversational Chat**: Implementing effective dialog management
- **Extended Context Size**: Techniques to extend TinyLlama's context window
- **Multi-dataset Fine-tuning**: Single fine-tuning process with multiple datasets

### d) Reward Modeling

This directory contains implementations of advanced reward modeling techniques:

- **ORPO (Off-policy Ranked Policy Optimization)**: Colab notebook implementation
- **DPO (Direct Preference Optimization)**: Colab notebook implementation
- Preference datasets and evaluation metrics
- Video explanation of reward modeling approaches

### e) Continued Fine-tuning from Custom Checkpoint

This section demonstrates how to resume fine-tuning from a custom checkpoint:

- Colab notebook for continued fine-tuning
- Checkpoint management techniques
- Performance comparison metrics
- Video walkthrough of the implementation process

### f) Mental Health Chatbot Development

This directory focuses on developing a specialized chatbot for mental health applications:

- Fine-tuning Microsoft Phi-3 with Unsloth
- Mental health dataset preparation
- Response quality evaluation
- Safety considerations
- Video demonstration of chatbot capabilities

### g) Unsloth to Ollama Export

This section demonstrates the complete pipeline from fine-tuning to deployment:

- Colab notebook for fine-tuning a model
- Export process to Ollama format
- Local inference setup
- Performance benchmarking
- Video demonstration of the end-to-end process

## Resources

Each notebook includes links to relevant documentation and research papers. Key resources include:

- [Unsloth Documentation](https://docs.unsloth.ai/)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
- [Ollama Documentation](https://ollama.com/docs)
