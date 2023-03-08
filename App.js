/*
* Following are things done by Parcel:
* HMR - Hot Module Replacement
* File Watcher Algorithm in C++
* Bundling
* Minify
* Cleaning the code
* Dev and Prd build
* Super fast build algo
* Image Optimization
* Caching while development
* Compression
* Compatible with old version of browser - polyfills
* enable https on dev build as well cmd: npx parcel index.html --https
* port number
* Consistent Hashing Algorithmn
* Zero Config
*
*
* ------
* Transitive dependencies: Pkg manager which takes care of transitive dependencies of our code. 
Means example parcel has multiple dependecies of its own, further those dependencies have their dependencies
and so on is a transitive ependencies.
* How to make app compatble with multiple browsers: open browserslist.dev in google and we have browserslist 
pkg in node modules, we will understand how to use that pkg in the website
ex: "browswerslist" : [
    means this app will supprt all browsers last 2 versions
    "last 2 versions" 
  ]





*/



import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    className: "class2",
    style: {
      border: '1px solid red'
    },
    kuchBhi: 'anything'
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
