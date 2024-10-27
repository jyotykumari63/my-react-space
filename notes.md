01/oct/2023

1. npm is a package manager, npm will take of all the packages/dependecies and version
   -> package.json : configuration for npm

2. create-react-app : gives production ready react app

3. manually create react app for production ready, we need to optimize, minified te code for production ready , for that we use bundler like parcel
   -> parcel is npm package allow to bundle the app like webpack and vite.
   -> install parcel in react app : npm install -D parcel
   -D (for dev dependency) and parcel will be used as dev dependecy to bundle and minify the react app in development in our project

   There are two type of dependencies/packages we can install.

4. dev dependency- required during development pahse
5. normal dependency - required during developemnt and production also

6. difference between ^ and ~ in package version
   e.g "parcel": "^2.9.3"
   ^ : caret allows the npm to upgrade te minor updates version and patch release
   ~ : tild will allows the npm to patch release / bug fixes only
         match the latest patch version while freezing the major and minor versions.
         automatically accepting bug fixes, considering that patch updates primarily address bugs
8. difference between package.json and package-lock.json
   - package-lock.json will keep the exact version of pkg being installed and used (in case package json has allowd to upgrade the major or minor latest version) then package-lock.json will sow exact version is being used
9. When we install any dependency using npm it creates a node module very first time and add all the pakcage/8. When we install any dependency using npm it creates a node module very first time and add all the pakcage/dependecies on which that pkg is dependent .
   for example if install parcel pks then it will install all the it's dependecies/pkgs in node module
