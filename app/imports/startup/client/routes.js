// JSX files have to import react
import React from 'react'
// Import react mounter instead of react-layout (npm)
import { mount } from 'react-mounter'

// Import components used by the router
import App from '/imports/ui/layouts/App'
import IndexContainer from '/imports/ui/pages/IndexContainer.jsx'

// Group public routes
const router = FlowRouter.group({})

// Define index route
router.route('/', {
  name: 'index',
  action() {
    // Render Layout component and inject AppContainer component
    // as props.children
    mount(App, {children: <IndexContainer/>})
  }
})
