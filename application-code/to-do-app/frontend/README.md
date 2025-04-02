# Structure:- 
This is simple 'To-DO' frontend application. This structure follows best practices for React development, keeping concerns separated (UI, logic, services), and allowing for easy deployment and containerization.
```
/frontend
  ├── Dockerfile             <-- Docker configuration for containerizing the app
  ├── package.json           <-- npm dependencies, scripts, and metadata
  ├── package-lock.json      <-- Automatically generated to lock dependency versions
  ├── /public
  │   ├── favicon.ico        <-- Site icon
  │   ├── index.html         <-- Static HTML template
  │   ├── logo192.png        <-- Logo used for PWA (Progressive Web App)
  │   ├── logo512.png        <-- Larger logo used for PWA
  │   ├── manifest.json      <-- Web app metadata (used for PWA)
  │   └── robots.txt         <-- Instructions for web crawlers (SEO)
  ├── README.md              <-- Project overview and documentation
  └── /src
      ├── App.css            <-- Styles for the App component
      ├── App.js             <-- Main React component (dynamic content)
      ├── index.css          <-- Global styles for the app
      ├── index.js           <-- Entry point for JavaScript (mounts App.js)
      ├── /services
      │   └── taskServices.js <-- Helper functions for handling task data
      └── Tasks.js            <-- A React component for rendering tasks
```


## Key Points About This Structure:
## /public Directory:
```index.html:```

- This is the static HTML template file for the web page. It contains the basic page structure and the <div id="root"></div> where dynamic content rendered by React (or any JS framework) will be injected.
- This is the entry point when you visit your app's URL.

```favicon.ico:```
- The small site icon that appears in the browser tab.

```logo192.png & logo512.png:```
- These are the icons used for Progressive Web Apps (PWA), typically displayed when the app is installed on a device.

```manifest.json:```
- This file contains metadata about the app (e.g., name, icons, color scheme) and is essential for making your app installable as a PWA.

```robots.txt:```
- A file used by search engines and web crawlers to tell them which pages to crawl and index, and which to avoid (important for SEO).

## /src Directory:
```App.css:```
- This file contains the styling specific to the App.js component. It’s where you can add styles that affect the overall appearance of your app.

```App.js:```
- The main React component that serves as the central part of your app.
- It contains the UI logic and structure (written in JSX).
- It will be dynamically rendered inside the index.html file.

```index.css:```
- Global styles that apply to the entire application. You might include fonts, body styles, or any other styles that should be universal across your app.

```index.js:```
- The entry point for the JavaScript. It is the first file that gets executed when your app runs.
- It renders the App.js component into the root div in the index.html file.
- This file typically also contains the ReactDOM.render() method to mount the app.

```Task.js``
- Used to manage taks and connect with backend 
- make sure your backend endpoint is configured here in this file (((const apiUrl = process.env.REACT_APP_BACKEND_URL //"http://localhost:8080/api/tasks";)))
- value would be passed from deployment stack.

## /services Directory:
```taskServices.js:```
- This file contains helper functions or services to handle the data logic for tasks (e.g., fetching data, updating tasks, etc.).
- This is an abstraction layer that helps keep your codebase clean by separating concerns—taskServices.js deals with the business logic, while App.js handles rendering and UI logic.

# Build and Run

- Build
```
docker build -t my-node-app .
docker images
```

- run container

```
docker run -p 3000:3000 my-node-app
```

- access in local browser
```
http://localhost:3000
```
