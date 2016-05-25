// JSX files have to import react
import React from 'react'
// Import react mounter instead of react-layout (npm)
import { mount } from 'react-mounter'

// Import components used by the router
import AppContainer from '/imports/ui/layouts/AppContainer'
import AppPage from '/imports/ui/pages/AppPage'

// Group public routes
const router = FlowRouter.group({})

// Define index route
router.route('/', {
  name: 'index',
  action() {
    // Render Layout component and inject AppContainer component
    // as props.children
    mount(AppContainer, {children: <AppPage/>})
  }
})
