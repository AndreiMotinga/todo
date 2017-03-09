import React from 'react'

const Link = ({ classes, onClick, children }) => (
  <a
    className={classes}
    href="#"
    onClick={(e) => {
      e.preventDefault()
      onClick()
    }}
  >
    {children}
  </a>
)

export default Link
