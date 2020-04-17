## sparkware_challenge

**Prerequisites**

* NodeJS 8 or later & yarn

**Installation**

* Run `yarn install` to install project dependencies

**Building**

* You can build this project by running `yarn run build`. This will create the `build` folder, containing transpiled javascript source code.

**Running**

When you run the app, you need to specify the `PORT` environment variable. If missing, it will default to `3000`

* In a production environment, it is enough to run `yarn run start:prod`. This will not build the app.
* In a development environment, you can run `yarn run start:dev` to both build and run the app.
