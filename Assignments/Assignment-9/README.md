# Deep Learning Assignment 9: Advanced Transfer Learning & Contrastive Learning

This repository contains a collection of Google Colab notebooks demonstrating various deep learning techniques with a focus on transfer learning across modalities and supervised contrastive learning.

## Assignment Structure

### Part 1: Supervised Contrastive Learning

- **Supervised Contrastive vs Softmax Classification**: Implementation comparing supervised contrastive learning loss-based classification versus regular softmax-based classification, with visualizations.
  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%201/Supervised_Contrastive_vs_Softmax.ipynb)

**Rubric**: Demonstrate supervised contrastive learning loss-based supervised classification versus regular softmax-based classification with necessary visualizations.

### Part 2: Transfer Learning Across Modalities

Transfer learning demonstrations across various data types:

- **Image Transfer Learning**: Showcasing transfer learning for image classification with both feature extraction and fine-tuning approaches.

  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%202/Image_Transfer_Learning.ipynb)

- **Video Transfer Learning**: Action recognition using pre-trained models for video data.

  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%202/Video_Transfer_Learning.ipynb)

- **Audio Transfer Learning**: Audio classification using YAMNet and transfer learning techniques.
  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%202/Audio_Transfer_Learning.ipynb)

**Rubric**: Implement transfer learning on images, videos, and audio data, demonstrating both feature extraction and fine-tuning approaches.

### Part 3: Zero-Shot and Advanced Transfer Learning

- **Zero-Shot Image Classification with CLIP**: Demonstrating zero-shot transfer learning capabilities of OpenAI's CLIP model.

  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%203/Zero_Shot_Image_Classification_CLIP.ipynb)

- **Transfer Learning with Big Transfer (BiT)**: Showcasing state-of-the-art transfer learning using Google's BiT model.
  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%203/Transfer_Learning_with_Big_Transfer.ipynb)

**Rubric**: Showcase zero-shot transfer learning with CLIP model and transfer learning using state-of-art models from TFHub (e.g., Big Transfer).

### Part 4: Vision Classifiers and Medical Imaging

#### Standard Vision Datasets

- **MNIST Classification with State-of-the-Art Models**: Implementing advanced architectures for MNIST digit classification.

  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%204/MNIST_Classification_State_of_the_Art_Models.ipynb)

- **Fashion MNIST Transfer Learning**: Applying transfer learning techniques to Fashion MNIST dataset.

  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%204/Fashion_Mnist_Transfer_Learning.ipynb)

- **CIFAR-10 Classification with Transfer Learning**: Using EfficientNet and BiT for CIFAR-10 classification.
  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%204/CIFAR_10_Classification_Transfer_Learning.ipynb)

#### Medical Imaging Applications

- **X-ray Pneumonia Classification**: Implementing convolutional networks for pneumonia detection in X-ray images.

  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%204/Xray.ipynb)

- **3D CT Scan Classification**: 3D image classification using 3D convolutional networks.
  - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-9/notebooks/Part%204/3D.ipynb)

**Rubric**:

- Demonstrate vision classifiers on MNIST, Fashion MNIST, and CIFAR-10 datasets
- Implement pretrained models with transfer learning (both EfficientNet and BiT)
- Demonstrate state-of-art image models like MLP-Mixer and ConvNeXt V2
- Implement X-ray pneumonia classification with ConvNet
- Implement 3D image classification of CT scans

## References

- [Supervised Contrastive Learning Paper](https://arxiv.org/abs/2004.11362)
- [Contrastive Loss for Supervised Classification](https://towardsdatascience.com/contrastive-loss-for-supervised-classification-224ae35692e7)
- [Keras Example: Supervised Contrastive Learning](https://keras.io/examples/vision/supervised-contrastive-learning/)
- [TensorFlow Transfer Learning Guide](https://www.tensorflow.org/tutorials/images/transfer_learning)
- [Transfer Learning for Audio Data with YAMNet](https://blog.tensorflow.org/2021/03/transfer-learning-for-audio-data-with-yamnet.html)
- [Action Recognition with TF Hub](https://www.tensorflow.org/hub/tutorials/action_recognition_with_tf_hub)
- [CLIP: Connecting Text and Images](https://openai.com/blog/clip/)
- [Big Transfer (BiT)](https://github.com/google-research/big_transfer)
- [Keras Example: BiT](https://keras.io/examples/vision/bit/)
- [TensorFlow Hub for Transfer Learning](https://amitness.com/2020/02/tensorflow-hub-for-transfer-learning/)
- [Keras Example: MLP Image Classification](https://keras.io/examples/vision/mlp_image_classification/)
- [Keras Example: X-ray Classification with TPUs](https://keras.io/examples/vision/xray_classification_with_tpus/)
- [Keras Example: 3D Image Classification](https://keras.io/examples/vision/3D_image_classification/)
