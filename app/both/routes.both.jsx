// JSX files have to import react
import React from 'react'
// Import react mounter instead of react-layout (npm)
import { mount } from 'react-mounter'

// Import components used by the router
import Index from './components/Index.jsx'

// Group public routes
const router = FlowRouter.group({})

// Define index route
router.route('/', {
  name: 'index',
  action() {
    mount(Index)
  }
})