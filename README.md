# **Star Search**
Allows user to search for fallen stars using the Nas API. This is a student piece designed to learn react, how to integrate charts and basic styling.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

***

## **Getting Started**
1. Fork from **`GitHub`**: https://github.com/theCodeFox/star-search.git
2. `Clone into the directory that you will be working from`
3. Install all dependancies and dev-dependancies *(see Installing below)*
4. **`npm start`** - runs the app in the development mode *(Open [http://localhost:3000](http://localhost:3000) to view it in the browser, it will reload if you make edits)*
5. Play around and most importantly... **_have fun!_**

***NOTE**: though I have left `npm eject` in, **DO NOT USE** as is a one-way operation and will remove the single build dependency from this project*

### **Installing**

Once you have cloned the repo then cd into the directory. 

From here:

**Install dependancies**

```
npm install
```

This should install everything you need from the package JSON. If in doubt just copy the example package.json below into your one and then run the code above in your terminal.

**Add browserslist to Package JSON**

```JSON
  {
      "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
  }
```

*Your Package JSON should look something like this:*

```JSON
{
  "name": "star-search",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^0.18.0",
    "chart.js": "^2.7.3",
    "leaflet": "^1.4.0",
    "react": "^16.8.4",
    "react-chartjs-2": "^2.7.4",
    "react-dom": "^16.8.4",
    "react-leaflet": "^2.2.1",
    "react-scripts": "2.1.8"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

**Don't forget a gitignore file!**

```ruby
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage
/src/App.test.js

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## **Contributing**

This is a course project for study purposes. Rights go to Northcoders who provided the course and assisted with studying.

`As a solo sprint there is to be no contributing.`
***
## **Versioning**
* Visual Studio Code - 15.0
* npm - 6.8.0

```json
{
  "name": "codefox-nc-knews",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reach/router": "^1.2.1",
    "axios": "^0.18.0",
    "local-storage": "^1.4.2",
    "react": "^16.8.4",
    "react-dom": "^16.8.4",
    "react-image": "^2.0.0",
    "react-scripts": "2.1.8"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```
***
## **Authors**

* **Kay Fox & Vik Cumacenko** - *Initial work* - [theCodeFox](https://github.com/theCodeFox) & [rosiline](https://github.com/rosiline)
***
## **License**

This project is licensed under the **ISC** License
***
## **Acknowledgments**

* **NorthCoders!** (https://northcoders.com) - A massive thank you for all assistance, teaching, lectures and above all patience.