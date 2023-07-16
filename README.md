# MyAI Image Generator

This is an AI-powered image generator that uses OpenAI's API key to generate images based on user input. You can either enter a description of the image you want to generate or upload an existing image to edit and create variations.

## Usage

1. To generate an image, enter a description in the input field and click on the "Generate" button or press Enter.
2. Alternatively, click on the "Surprise me" option to generate a random image.
3. To upload an image for editing, click on "Upload an image" and select your image file. After uploading, click on "Generate" to create variations.

Generated images are displayed in a grid, with up to 4 images shown at once.



https://github.com/Sumaiya-369/MyAI-Image-Generator/assets/126413802/eae96d04-c138-475a-8993-90886689a438



https://github.com/Sumaiya-369/MyAI-Image-Generator/assets/126413802/f80beb9a-983b-43e8-98f8-bf77a03ddef3



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

# Backend

The backend is built using Node.js, Express, and the OpenAI API. The backend server file, `server.js`, handles API calls to the OpenAI API and image file uploads.

## server.js

The `server.js` file is responsible for setting up the Express server, handling CORS, and processing requests from the frontend. The following endpoints are defined:

### `/images`

- Method: POST
- Description: Receives a text prompt from the frontend and sends a request to the OpenAI API to generate images. The generated images are then sent back to the frontend.

### `/upload`

- Method: POST
- Description: Handles image file uploads using the multer middleware for handling multipart/form-data content types.

### `/variations`

- Method: POST
- Description: Receives a request from the frontend to generate variations of an uploaded image. The OpenAI API is called with the uploaded image, and the generated variations are sent back to the frontend.

# Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- Node.js (v14.x or later recommended)
- npm (v6.x or later recommended)
- OpenAI API key (sign up for an API key at [https://beta.openai.com/signup/](https://beta.openai.com/signup/))

## Installing

1. Clone the repository:

```
   git clone https://github.com/yourusername/myai-image-generator.git
```
2. Install the required npm packages for the backend:

```
   cd myai-image-generator/backend
   npm install
```
3. Set up the environment variables:

   Create a `.env` file in the backend folder and add your OpenAI API key:
```
    API_KEY=your_openai_api_key
```
4. Install the required npm packages for the frontend:
 ```
   cd ../src
   npm install
```
5. Start the backend server:

```
   cd ../backend
   node server.js
```
6. Start the frontend development server:

```
   cd ../src
   npm start
```

The application should now be running at `http://localhost:3000`.


## Application Components

- `App.js`: The main application component, handling user input and interactions.
- `Modal.js`: The modal component displayed when a user uploads an image, allowing them to confirm the image's dimensions before generating variations.
- `index.css`: The global CSS file for the application.
- `index.js`: The entry point for the React application.
- `server.js`: The backend server file, handling API calls to the OpenAI API and image file uploads.

## Contributing

We welcome contributions to the MyAI-Image-Generator project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with your changes.
3. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.




