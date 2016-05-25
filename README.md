# Meteor 1.3 stack by superlumen

We use React and related packages.
We try to install most packages through npm. No need for wrapper packages (atmosphere).
This improves meteor reload time.

## Basics

* Meteor 1.3 with npm and modules
* React
* Redux
* Semantic UI

## Structure

See the [Meteor Guide](http://guide.meteor.com/) for the recommended code layout conventions.

~~Check out the [superlumen naming conventions](https://github.com/superlumen/knowledge/wiki/Naming-Conventions) doc. It's a good starting point to follow.~~

## How to start the app?

To start the app, run `npm run app` in the root.

### Bug on OSX

If you see that node's cpu usage goes to >100%, there is an issue on OSX which
causes extremely high CPU usage whenever meteor is started by npm. The
workaround is to run `bin/run-app.sh` to start the app.
