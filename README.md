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

# Frontend

The frontend is built using React, with the main application component in `App.js`. The `Modal.js` file contains the modal component displayed when a user uploads an image.

## App.js

`App.js` handles user input and interactions. Users can:

- Enter a text prompt
- Use the "Surprise Me" button to generate a random prompt
- Upload an image for further editing

The `getImages()` function sends a POST request to the backend, which then makes a call to the OpenAI API to generate the images.

## Modal.js

`Modal.js` contains the modal component displayed when a user uploads an image. The user can confirm the image's dimensions before generating variations. The `checkSize()` function verifies if the image is 256x256 pixels, and if it is, the `generateVariations()` function is called.

## index.css and index.js

`index.css` contains the global CSS styles for the application, while `index.js` is the entry point for the React application.


