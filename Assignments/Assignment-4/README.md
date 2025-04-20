# Neural Network Implementation

This README provides guidance for the neural network implementation assignment, which covers building a 3-layer neural network for non-linear regression using various frameworks and approaches.

## Assignment Tasks

### 1. NumPy Implementation

- Implement a 3-layer neural network from scratch using only NumPy
- Use proper non-linear activation functions
- Implement manual backpropagation and gradient propagation
- Generate synthetic data using a 3-variable non-linear equation
- Plot results using 4D visualization
- Demonstrate training progress with loss vs. epochs

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/a_numpy_implementation_scratch.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk)

### 2. PyTorch Implementation (From Scratch)

- Implement the same 3-layer neural network using PyTorch's tensor operations
- Avoid using PyTorch's built-in layer functionality
- Show implementation of forward and backward passes
- Visualize training progress and final results

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/b_neural_network_pytorch_scratch.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=217)

### 3. PyTorch with Modules

- Implement the network using PyTorch's built-in modules and classes
- Use proper object-oriented design following SOLID principles
- Demonstrate the advantages of PyTorch's automatic differentiation

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/c_neural_network_pytorch.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=380)

### 4. PyTorch Lightning

- Refactor the PyTorch implementation to use PyTorch Lightning
- Show how Lightning simplifies training loops and boilerplate code
- Implement callbacks and other Lightning features

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/d_pytorch_lighting.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=511)

### 5. TensorFlow from Scratch

- Implement the neural network using TensorFlow's lower-level operations
- Use TensorFlow einsum instead of matrix multiplication
- Implement custom training loop

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/e_tensorflow_low_level_implementation.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=660)

### 6. TensorFlow with Built-in Layers

- Implement using TensorFlow's built-in layers
- Create a custom model without using the high-level API

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/f_tensorflow_built_in_layers.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=797)

### 7. TensorFlow Functional API

- Implement the network using TensorFlow's Functional API
- Demonstrate the flexibility of this approach

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/g_tensorflow_functional_api.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=898)

### 8. TensorFlow High-Level API

- Use TensorFlow's high-level API to implement the network
- Show how this simplifies the implementation process

**Resources:**

- [Colab Notebook](https://colab.research.google.com/github/pruthvik-sheth/CMPE-258-Deep-Learning/blob/main/Assignments/Assignment-4/notebooks/h_tensorflow_high_level_api.ipynb)
- [Video Walkthrough](https://youtu.be/JmPCZSidNCk?t=1033)
