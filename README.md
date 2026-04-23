# Honor and Glory

[![Netlify Status](https://api.netlify.com/api/v1/badges/936f2c89-38f0-4c33-aa0e-5884ab996339/deploy-status)](https://app.netlify.com/projects/honor-and-glory/deploys)

[Live site](https://honor-and-glory.netlify.app/)

A Game of Honor and Glory

## Setup

Type Checking
In user settings ( settings.json) add the following line to enable type checking

```json
  "js/ts.implicitProjectConfig.checkJs": false,
```

```.env file
  REACT_APP_VERSION = Current Version ( ex: 0.0.1a)
```

## Todo

- [x] - Set up css variables for colors

- [x] - Set up automatic deployment

- [ ] - Basic html and css layout

- [x] - Add Routing
- [ ] - Add Navigation
- [ ] - Add Redirects or other solution for netlify routing issue
    https://docs.netlify.com/manage/routing/redirects/overview/

- [ ] - Add skeleton frame for game
- [ ] - New game
- [ ] - Existing game

- [x] - Locations
- [x] - Size and Locations properties

- [ ] - DB Mapping
  - [ ] - User - email - password - id
  - [ ] - Campaign - id - owner - name
  - [ ] - Warbands - id - name - owner - type
  - [ ] - Locations - id - map id - size - location - name - description - boon - curse - occupier
  - [ ] - Maps - id - name - owner - campaign
    - [ ] - how to store image file?

- [x] - Borderlands sheet
  - [x] - Character sheet

- [x] - Add JSON server for backend mocking / testing

- [x] - Add version context
- [ ] - Check version on each http request
- [x] - add version display component
- [ ] - Add modal to notify user when version is out dated.

- [ ] - Add Testing
- [ ] - Fix hook and context tests
  - [ ] - Add Jest Testing
    - [ ] - Configure to run both kinds of tests separately

## Testing

Using :
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
[Jest DOM](https://github.com/testing-library/jest-dom)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
