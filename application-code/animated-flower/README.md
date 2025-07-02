# FLOWERS FOR JOANNA HAPPY ANNIVERSARY

# flowers-code

This project is organized into source and distribution folders to separate development files from production-ready files.

## What Each Part Means

### src/
This is the **source** folder. It contains the original files you work on:
- **index.html**: The main HTML file.
- **script.js**: The main JavaScript file.
- **style.scss**: The main stylesheet, written in SCSS (a CSS preprocessor from github action).

### LICENSE.txt
Contains the license for your project.

### README.md
Contains documentation or instructions about your project.

---

## Typical Workflow

1. **Edit files in `src/`**  
   Write and update your SCSS, JavaScript, and HTML files in the `src` folder.

2. **Build/Compile**  
   Compile SCSS to CSS and copy/minify files into the `dist` folder.

3. **Deploy or Serve**  
   Deploy or serve files directly from the `dist`

## Github action role:

- GHA will build the code and upload as a artifact 
### dist/
This is the **distribution** folder. It contains the final, processed files ready to be deployed or served to users:
- **index.html**: The processed HTML file.
- **script.js**: The processed JavaScript file (possibly minified or bundled).
- **style.css**: The compiled CSS file (from `style.scss`).