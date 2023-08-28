# Validation Project execution
Compose regular expressions to efficiently search, match, and manipulate text patterns

## Application description:
This is an application to demonstrate validation examples using regular expressions.
The application is simple as it can be, to show whether it works or not.

## Regex implementation description:
In the `validators.js` file you may find all information about regular expression which was used
There are the descriptions of regular expression peaces:
- `(?=.*\d)` - validates if string has at least one digit;
- `(?=.*[a-z])` - validates if string has at least one lowercase letter;
- `(?=.*[A-Z])` - validates if string has at least one uppercase letter;
- `(?=.*[!\"#$%&'()*+,-./:;<=>?@[\\\]^_{|}~])` - validates if string has at least one special character from a predefined list: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~.
- `(?=^.{0,_maxLength_}$)` - validates if string is not grater then maximum length. `_maxLength_` is special syntax in order to replace it with the number which will be used for max length defining 
- `(?=^\\S*$)` - validates if string doesn't contain any whitespace characters (spaces, tabs, or newlines)

## Information on how to run the developed application locally
- Install npm dependencies using `npm install`
- Run application locally using `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Information on how to run the test function locally
You just can launch unit tests only for validation function using `npm test validators.test.js`.
Or you can run tests for all application using `npm test`

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
