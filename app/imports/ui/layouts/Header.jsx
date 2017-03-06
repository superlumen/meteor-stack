import React from 'react'
import { Link } from 'react-router'

export default () => {
  return (
      <div style={style.header}>
        <Link to="/"
              className="item">Superlumen</Link>
    </div>
  )
}

const style = {
  header: {
    fontSize: 24,
    padding: 10,
    borderBottom: '1px solid silver'
  }
}
