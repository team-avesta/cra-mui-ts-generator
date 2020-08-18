# Create React App example with TypeScript and Material UI framework

## 📖 How to use

Download the example [or clone the repo](https://github.com/team-avesta/cra-mui-ts-generator.git):

```sh
cd create-react-app-with-typescript or App Name
```

or download this project and extract it in your project directory

#### Install it and run 🏃:

```sh
npm install
npm start
```

#### Build

```sh
npm build
```

## 💡 Feature List

- **Http Service**
- The HTTP client service offers GET, POST, PUT, DELETE along with error handling.
- **configUrl** where you can set api endpoints.
- **Theme**
  - App theme can be set from theme.tsx
  - Theme can be override from here.
- **Mock Api - json-server**
  - json-server is set for mock api, you can set its config in json-server.js
  - you can write mock response in db.json

## 🎛 Layout Components

- Layout consist of Sidebar and Appbar as components and Modules gets loads in module container element.
- Sidebar has capability of loading menus dynamically as well as static.
- Appbar consist of App Title and Popover actions.
- Redux store has been setup.

## 💡 List of UI Components

- Grid (Table along with table header, pagination component)
- Icon Button
- Toaster
- Error Dialog
- Loader
- Stepper
- Empty Screen
- Form Components such as Text Field, Text Area, Checkbox, Select Field, Date Picker and Time Picker all wrapped in Formik

## 🛠 Working Example Modules

- **Login**
  - Working Login module along with JWT token in local storage.
- **Candidate**
  - Working Candidate module which has grid table with pagination and form.

### ⚠ TODO

- Add Docker files
- App.js
- git precommit hooks
- prettier and eslint configs
- feel free to contribute...
