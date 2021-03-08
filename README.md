# example-react-component

Just some reminders on things to remember.

```shell
npx create-react-app your-app-name
npm install bootstrap
```

Including Bootstrap and whatever components you define in your index.js

```javascript
import ComponentName from './ComponentFileName';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

ReactDOM.render(
  <React.StrictMode>
    <ComponentName />
  </React.StrictMode>,
  document.getElementById('root')
);
```

This will then render the React app in the div with id root inside your index.html file which is found within the public directory of the React project that you generate with the npx create-react-app command.

Remember if you are having issues running this command, you may need to update npm.

The convention we’ll use is to capitalize the names of our React components.
