import React from 'react'


const Header = function(props) {
  return (
    <div className="ui large borderless menu">
      <div className="ui container">
        <a href={FlowRouter.path('index')} className="item">Superlumen</a>
      </div>
    </div>
  )
}

export default Header
