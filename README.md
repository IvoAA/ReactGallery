# ReactGallery

## Gallery

To use simply run `npm install` and then `npm start` on the root folder.

The libraries used were:
- react-router-dom
- styled-components
- react-photo-album
- react-icons
- zustand

## Python Script

A Python script was made to process the original `dataset.json` into 2 separate files.
- `photos.json`: 
    - Contains a list of all the pictures to be shown, each with:
        - src
        - width
        - height
    - Necessary for the "react-photo-album" library
- `photographers.json`:
    - Contains a dictionary with the respective photographer and url to the photographer page of each image