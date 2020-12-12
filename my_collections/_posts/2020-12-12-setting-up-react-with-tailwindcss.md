---
title: 'Setting up React with Tailwind CSS'
date: 2020-12-12 16:30:00
author: Robert Laws
categories: [react]
tags: [react, tailwindcss]
featured-image: blog-post-setting-up-react-with-tailwindcss.jpg
---

Over the past few months, I've been exploring and learning Tailwind CSS. There's lots of great content available to help learn just Tailwind CSS by itself.<!-- more --> Some of the best learning materials, in my opinion, include:

- [Tailwind CSS Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw) by The Net Ninja
- [Designing with Tailwind CSS](https://www.youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR) by
  Adam Wathan
- [Tailwind Labs](https://www.youtube.com/channel/UCOe-8z68tgw9ioqVvYM4ddQ) from the creators of Tailwind CSS

Each has their strength. Tailwind CSS Tutorial by The Net Ninja is great to understand fundamentals of using Tailwind CSS. Designing with Tailwind CSS by
Adam Wathan is really good for fundamentals and to see how to create clones of popular websites with Tailwind CSS. Finally, Tailwind Labs is good to learn about new features, especially with the release of version 2.0 just a few weeks ago.

#### Incorporating Tailwind CSS into a React Project

I do a lot of development with React and wanted to learn how to properly set up Tailwind CSS to work within a typical React project workflow. I watched a really good video tutorial on this by codewithchu called [Tailwind CSS v2.0 - Setup & Install React with Tailwind CSS](https://www.youtube.com/watch?v=mmFAW6t5G7Q). I recommend watching the tutorial, which gives a good explanation of the steps to add in Tailwind CSS to a React project starting from scratch. The are several important steps to get everything set up properly.

While going through the video, I created a [Github Repository](https://github.com/robert-laws/practice-dec-2020-react-app-with-tailwindcss) that contains a working sample project.

#### 1. Initialize the project and install dependencies

The first thing to do is use `create-react-app` to set up a new react project. Once completed, add in several dependencies, `npm install autoprefixer npm-run-all onchange postcss postcss-cli postcss-nested tailwindcss`, which will handle getting tailwind set up and running as well as configuring scripts.

#### 2. Add Tailwind and PostCSS configurations

Begin by adding two new configuration files by executing the command `npx tailwindcss init -p`. This creates the `tailwind.config.js` and `postcss.config.js` files to the root of the project directory. The configurations used included the following:

**For PostCSS**

```javascript
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};
```

**And for Tailwind CSS**

```javascript
const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: 'layers',
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: colors.lightBlue,
        gray: colors.trueGray,
        emerald: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

The Tailwind CSS configuration includes set up for purging, which is a great feature to reduce the final CSS output by removing unused CSS definitions from the final CSS. The Tailwind CSS configuration file also allows for easy extension, variants, and plugins by adding them into the configuration. Thankfully, the creators of Tailwind CSS provides some really good [documentation on how to configure Tailwind CSS](https://tailwindcss.com/docs/configuration) on their website.

#### 3. Include Tailwind in the Project

The next step is to include tailwind by setting up a `tailwind.css` file that's located, in my case, at `/assets/css/tailwind.src.css`. The following statement will import the tailwind base CSS along with components and utilities.

```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4. Include the Tailwind CSS into the React Project

To use the created CSS, the next step is to include the created CSS file into the React project. The third line is where the CSS file is referenced in the `index.js` file.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/tailwind.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

#### 5. Add Scripts

Within the `package.json` file, there are several scripts for both development and production. First, the `start` script makes use of the `npm-run-all` package to run multiple scripts, including the `start:tailwind` script to initially build the tailwind.css file. Then it runs the `start:p:watch-tailwind` script to watch for changes to any tailwind configuration files or css files and re-runs the script to build the tailwind css file. Finally, the script `start:p:react` runs to start up react.

For the build process, the `build` script will run both `build:a:tailwind` to create a production-ready CSS file and after that the script `build:b:react` is run to build all the files needed for the React project.

```json
{
  // other package.json entries...
  "scripts": {
    "start": "npm-run-all start:tailwind -l -p start:p:*",
    "start:tailwind": "postcss ./src/assets/css/tailwind.src.css -o ./src/assets/css/tailwind.css",
    "start:p:watch-tailwind": "onchange 'tailwind.config.js' 'src/**/*.css' -e './src/assets/css/tailwind.css' -- npm run start:tailwind",
    "start:p:react": "react-scripts start",
    "build": "run-s build:** -l",
    "build:a:tailwind": "NODE_ENV=production npm run start:tailwind",
    "build:b:react": "react-scripts build"
  }
}
```

With that all setup, it's possible to begin development of the React project making use of Tailwind CSS.
