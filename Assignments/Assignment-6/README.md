# LLM Fine-tuning and Optimization with Unsloth

This repository contains a collection of experiments and implementations focused on fine-tuning, optimizing, and deploying various open-source Large Language Models (LLMs) using Unsloth and other optimization techniques.

## Video Documentation

**Important**: Each use case/colab notebook has been successfully run and documented with a video explanation. These videos explain the implementation details, input formats, datasets used, and demonstrate the results.

Complete project demonstration: [YouTube - Comprehensive LLM Fine-tuning, Pre-training, and Deployment with Unsloth](https://youtu.be/XXXXXXXXXX)

## Subtask Descriptions

### a) Fine-tuning Open Weights LLMs

Four unique fine-tuning use cases for various open-source LLMs, each targeting different capabilities:

- **Llama 3 (8B)**: Fine-tuned for conversational chat ([A_Llama.ipynb](./notebooks/A_Llama.ipynb))
- **Phi-3 Mini**: Fine-tuned for coding tasks ([A_phi3_mini_coding.ipynb](./notebooks/A_phi3_mini_coding.ipynb))
- **Gemma 2**: Fine-tuned for question answering ([A_QA_with_Gemma.ipynb](./notebooks/A_QA_with_Gemma.ipynb))
- **TinyLlama**: Fine-tuned for general chat capabilities ([A_tinyllama_chat.ipynb](./notebooks/A_tinyllama_chat.ipynb))

Each notebook includes detailed explanations of the model architecture, input format requirements, dataset preparation, and various chat model templates used for fine-tuning.

### b) Continued Pre-training

This notebook demonstrates using Unsloth AI to extend an LLM's capabilities by teaching it a new language through continued pre-training:

- [B_New_Language_Training_Lightweight.ipynb](./notebooks/B_New_Language_Training_Lightweight.ipynb)

The implementation follows the methodology outlined in the [Unsloth continued pre-training documentation](https://docs.unsloth.ai/basics/continued-pretraining) and includes:

- Source language data preparation
- Target language data integration
- Training configuration and optimization
- Evaluation metrics for language acquisition

### c) Chat Templates for Various Tasks

This section explores different chat templates for specialized tasks:

- **Classification**: Fine-tuning for structured classification tasks ([C_Chat_Templates_for_Classification.ipynb](./notebooks/C_Chat_Templates_for_Classification.ipynb))
- **Conversational Chat**: Implementing effective dialog management ([C_Conversational_Chat_Template.ipynb](./notebooks/C_Conversational_Chat_Template.ipynb))
- **Multi-dataset Fine-tuning**: Single fine-tuning process with multiple datasets ([C_Multiple_Datasets_Single_Fine_Tuning.ipynb](./notebooks/C_Multiple_Datasets_Single_Fine_Tuning.ipynb))

Each notebook demonstrates how to properly format inputs for different use cases and how to extend the context window size for models like TinyLlama.

### d) Reward Modeling

Implementation of advanced reward modeling techniques:

- **ORPO (Off-policy Ranked Policy Optimization)**: [D_ORPO.ipynb](./notebooks/D_ORPO.ipynb)
- **DPO (Direct Preference Optimization)**: [D_DPO.ipynb](./notebooks/D_DPO.ipynb)

These notebooks follow the methodology described in the [Unsloth reward modeling documentation](https://docs.unsloth.ai/basics/reward-modelling-dpo-and-orpo) and include:

- Preference dataset preparation
- Model training configuration
- Evaluation metrics
- Comparative analysis of different reward modeling approaches

### e) Continued Fine-tuning from Custom Checkpoint

This notebook demonstrates how to resume fine-tuning from a custom checkpoint:

- [E_Fine_tuning_from_Custom_Checkpoint.ipynb](./notebooks/E_Fine_tuning_from_Custom_Checkpoint.ipynb)

Key aspects covered:

- Checkpoint management techniques
- Efficient loading and saving of model states
- Performance comparison metrics
- Best practices for continued training

### f) Mental Health Chatbot Development

This notebook demonstrates developing a specialized chatbot for mental health applications by fine-tuning Microsoft Phi-3 with Unsloth:

- [F_Mental_Health_Chatbot.ipynb](./notebooks/F_Mental_Health_Chatbot.ipynb)

The implementation follows the approach outlined in [this tutorial](https://medium.com/@mauryaanoop3/fine-tuning-microsoft-phi3-with-unsloth-for-mental-health-chatbot-development-ddea4e0c46e7) and includes:

- Mental health dataset preparation and processing
- Specialized fine-tuning configuration
- Response quality and safety evaluation
- Ethical considerations in mental health AI applications

### g) Unsloth to Ollama Export

This notebook demonstrates the complete pipeline from fine-tuning to deployment using Ollama:

- [G_Inference_Ollama_Export.ipynb](./notebooks/G_Inference_Ollama_Export.ipynb)

The implementation follows the [Unsloth to Ollama export guide](https://docs.unsloth.ai/tutorials/how-to-finetune-llama-3-and-export-to-ollama) and covers:

- Model fine-tuning process
- Export configuration for Ollama compatibility
- Local inference setup and optimization
- Performance benchmarking
- Practical deployment considerations

## Resources

Each notebook includes links to relevant documentation and research papers. Key resources include:

- [Unsloth Documentation](https://docs.unsloth.ai/)
- [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
- [Ollama Documentation](https://ollama.com/docs)
- [Unsloth LoRA with Ollama Guide](https://sarinsuriyakoon.medium.com/unsloth-lora-with-ollama-lightweight-solution-to-full-cycle-llm-development-edadb6d9e0f0)
