# AI Tools Integration Assignment

This repository demonstrates the integration and usage of various AI tools and models for different applications. Each task is organized in its own directory with complete documentation and demonstration videos.

## Project Structure

```
├── 01_deepseek_exploration/
│   ├── DeepSeek_Image_Janus.ipynb
│   ├── DeepSeek_Image_Information.ipynb
│   └── DeepSeek_Text_to_Text_R1.ipynb
├── 02_bolt_fullstack/
│   ├── source_code/
│   └── demo_video.mp4
├── 03_cursor_mnist/
│   ├── mnist_classifier.py
│   ├── training_metrics/
│   └── demo_video.mp4
└── 04_aider_roo_app/
    ├── aider_app/
    │   ├── backend/
    │   └── frontend/
    └── roo_app/
        └── todo-app/
```

## Tasks Overview

### 1. DeepSeek Models Exploration

Located in: `01_deepseek_exploration/`

- Implemented creative image generation using DeepSeek Janus with custom prompts
- Utilized image-to-text capabilities to extract interesting information from images
- Created engaging text-to-text conversations using DeepSeek R1
- All implementations available in Google Colab notebooks with outputs

#### Demo Video

- [Watch the DeepSeek Demo](https://youtu.be/LhUmYJNrfxM)

### 2. Bolt.DIY Full Stack Application

Located in: `02_bolt_fullstack/`

- Developed a full stack application using Bolt.DIY
- Implemented features showcasing Bolt.DIY's capabilities
- Complete source code with proper documentation

#### Demo Video

- [Watch the Bolt.DIY Demo](https://youtu.be/Dl_6MebxNWQ)
- Includes walkthrough of development process and features

### 3. MNIST Classifier using Cursor

Located in: `03_cursor_mnist/`

- Generated neural network code for MNIST classification using Cursor
- Implemented using Keras with comprehensive metrics
- Includes visualization and performance analysis

#### Demo Video

- [Watch the Cursor Development Demo](https://youtu.be/mTUUhc058zE)
- Complete walkthrough of code generation and implementation

### 4. Aider & Roo Applications

Located in: `04_aider_roo_app/`

Two separate implementations showcasing different development approaches:

#### Aider Implementation

- Full stack TODO application developed using AI assistance
- Shows conversational development process
- [Watch Aider Development Demo](https://youtu.be/JQjZjfgMHBs)

#### Roo Implementation

- Simple full stack application using Roo framework
- Demonstrates scaffolding and configuration
- [Watch Roo Development Demo](https://youtu.be/JQjZjfgMHBs)

## Running the Applications

### DeepSeek Exploration

- Open the Colab notebooks in Google Colab
- Follow the instructions in each notebook

### Bolt.DIY Application

```bash
cd 02_bolt_fullstack
npm install
npm run dev
```

### MNIST Classifier

```bash
cd 03_cursor_mnist
python mnist_classifier.py
```

### Aider & Roo Applications

For Aider App:

```bash
cd 04_aider_roo_app/aider_app
cd backend && npm install && npm start
cd frontend && npm install && npm start
```

For Roo App:

```bash
cd 04_aider_roo_app/roo_app/todo-app
cd backend && npm install && npm start
cd client && npm install && npm start
```

## References

- [DeepSeek Janus Documentation](https://www.datacamp.com/blog/janus-pro)
- [DeepSeek R1 Documentation](https://www.datacamp.com/blog/deepseek-r1)
- [Aider Documentation](https://aider.chat/docs/usage/tutorials.html)
- [Aider Examples](https://aider.chat/examples/README.html)
