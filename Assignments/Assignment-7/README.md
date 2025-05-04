# Data Augmentation and Regularization Techniques

This repository contains a comprehensive collection of Jupyter notebooks demonstrating various data augmentation and regularization techniques for deep learning models. The assignment explores both fundamental and advanced approaches to improve model generalization and performance.

## Video Walkthrough

[Watch the detailed code walkthrough on YouTube](https://youtu.be/Ca4JWF1r29M)

## Assignment Structure

The assignment is organized into two main parts:

### Part 1: Data Augmentation and Regularization Techniques

This section demonstrates various regularization methods and data augmentation techniques across different data modalities.

#### Notebooks:

1. **1_Basic_Reg_Methods.ipynb**

   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/1_Basic_Reg_Methods.ipynb)

   - L1 and L2 regularization with A/B testing
   - Early stopping implementation
   - Various weight initialization techniques and their applications
   - Batch normalization

2. **2_Adv_Reg_Methods.ipynb**

   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/2_Adv_Reg_Methods.ipynb)

   - Standard dropout implementation
   - Monte Carlo dropout for uncertainty estimation
   - Custom dropout implementations
   - Custom regularization techniques

3. **3_Keras_Tuner.ipynb**

   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/3_Keras_Tuner.ipynb)

   - Hyperparameter optimization using Keras Tuner
   - Integration with TensorBoard for visualization
   - Using callbacks for model training and monitoring

4. **4_Image_Aug.ipynb**

   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/4_Image_Aug.ipynb)

   - Image data augmentation techniques in TensorFlow
   - KerasCV data augmentation capabilities
   - A/B testing of different augmentation strategies

5. **5_Data_Aug_Other_Modalities.ipynb**

   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/5_Data_Aug_Other_Modalities.ipynb)

   - Text data augmentation using nlpaug
   - Video data augmentation
   - Time series data augmentation
   - Tabular data augmentation
   - Speech data augmentation
   - Document image augmentation
   - Implementation using AugLy library

6. **6_Fast_AI_Data_Aug.ipynb**
   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/6_Fast_AI_Data_Aug.ipynb)
   - FastAI data augmentation capabilities
   - Test-time augmentation (TTA)
   - Size and scaling techniques

### Part 2: Advanced Keras Deep Learning Constructs

This section explores advanced Keras functionality and custom components.

#### Notebook:

7. **7_Custom_Learning_Components_in_Keras.ipynb**
   - [Open in Colab](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-7/notebooks/7_Custom_Learning_Components_in_Keras.ipynb)
   - Custom learning rate scheduler (OneCycleScheduler)
   - Custom dropout implementation (MCAlphaDropout)
   - Custom normalization (MaxNormDense)
   - TensorBoard integration and visualization
   - Custom loss function (HuberLoss)
   - Custom activation function, initializer, regularizer, and kernel weight constraint
   - Custom metrics implementation
   - Custom layers (exponential layer, noise layers, normalization layers)
   - Custom model architecture (ResidualBlock, ResidualRegressor)
   - Custom optimizer implementation
   - Custom training loops

## Key Features

- Comprehensive implementation of regularization techniques in TensorFlow
- Comparative analysis (A/B testing) of different methods
- Data augmentation across multiple modalities (image, video, text, time series, tabular, speech)
- Advanced Keras customization for model components
- Integration with visualization tools like TensorBoard
- Practical examples with real-world datasets

## Requirements

- TensorFlow 2.x
- Keras
- KerasCV
- NumPy
- Pandas
- Matplotlib
- nlpaug (for text augmentation)
- FastAI
- AugLy (Facebook's augmentation library)
- TensorBoard
- Keras Tuner

## References

- [TensorFlow Data Augmentation Tutorial](https://www.tensorflow.org/tutorials/images/data_augmentation)
- [Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://github.com/ageron/handson-ml3)
- [AugLy: A Data Augmentation Library](https://github.com/facebookresearch/AugLy)
- [Data Augmentation Review](https://github.com/AgaMiko/data-augmentation-review)
- [FastAI Documentation](https://docs.fast.ai/)
- [Awesome Data Augmentation](https://brunokrinski.github.io/awesome-data-augmentation/)
