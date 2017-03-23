// JSX files have to import react
import React from "react";
// Import react mounter instead of react-layout (npm)
import { mount } from "react-mounter";

// Import components and scenes used by the router
import App from "/imports/components/App/App";
import Counter from "/imports/scenes/Counter/Counter";

// Group public routes
const router = FlowRouter.group({});

// Define index route
router.route("/", {
  name: "index",
  action() {
    // Mount the App parent component and the Counter component as a child
    mount(App, { children: <Counter /> });
  }
});
