# Meteor 1.3 Boilerplate by superlumen

We use React for the Frontend and Blaze with Autoform for an easy to build admin project.
We try to install most packages through npm. No need for wrapper packages (atmosphere).
This improves meteor reload time.

## Basics

* Meteor 1.3 with npm and modules
* React
* Semantic UI

## Structure

See the [Meteor Guide](https://guide.meteor.com/) for the recommended code layout conventions.

~~Check out the [superlumen naming conventions](https://github.com/superlumen/knowledge/wiki/Naming-Conventions) doc. It's a good starting point to follow.~~

### app

* Frontend application
* React with ssr
* Semantic UI (customizable)

### admin

* Admin area
* Blaze templates for easy integration with autoform
* Semantic UI (CSS only version)

## How to start the apps?

To start the app, run `npm run app` in the root. To start the admin, run `npm
run admin` in a second terminal. Note that the `app` must be running before
starting `admin`.


The app is now running at http://localhost:3000 and the admin at
http://localhost:3010.

### Bug on OSX

If you see that node's cpu usage goes to >100%, there is an issue on OSX which
causes extremely high CPU usage whenever meteor is started by npm. The
workaround is to run `bin/run-app.sh` to start the app and then
`bin/run-admin.sh` to run the admin.
