# AI Image Generator

This is an AI-powered image generator that uses OpenAI's API key to generate images based on user input. You can either enter a description of the image you want to generate or upload an existing image to edit and create variations.

## Usage

1. To generate an image, enter a description in the input field and click on the "Generate" button or press Enter.
2. Alternatively, click on the "Surprise me" option to generate a random image.
3. To upload an image for editing, click on "Upload an image" and select your image file. After uploading, click on "Generate" to create variations.

## Requirements

- OpenAI API key
- React JavaScript library
- Node.js runtime environment
- Express web framework
- Multer middleware for handling file uploads
- Axios HTTP client library for making API requests

## How it works
The App.js file in the src directory contains the code for the front-end of the application. Here's a detailed explanation of how it works:

1. Import necessary dependencies:
``` import { useState } from 'react'
import Modal from './components/Modal'
```
The useState hook is used to define state variables, while the Modal component is used to render the image upload modal.
Define state variables using the useState hook:

