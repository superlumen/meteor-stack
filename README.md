# Meteor 1.3 Boilerplate created by Superlumen

We use React for the Frontend and Blaze with Autoform for an easy to build admin project.
We try to install most packages through npm. No need for wrapper packages (atmosphere).
This improves meteor reload time.

## Basics
* Meteor 1.3 with npm and modules
* React
* Semantic UI

## Structure
### app
* Frontend application
* React with ssr
* Semantic UI (customizable)

### admin
* Admin area
* Blaze templates for easy integration with autoform
* Semantic UI (CSS only version)

## How to start the apps?
If you work on OSX run:

`./bin/run-app.sh`

and 

`./bin/run-admin.sh`

in two different terminal tabs. Go to http://localhost:3000 to see the main app
and to http://localhost:3010 to see the admin app.
If you work on Linux, run:

`npm run app`

and

`npm run admin`