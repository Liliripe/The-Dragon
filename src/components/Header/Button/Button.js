import React from 'react'
import { bool, func } from 'prop-types'

import {} from './style'

const Button = ({ open, setOpen }) => {
    return (
      <div
        open={open}
        onClick={() => setOpen(!open)}
        animate={{
          y: ['50px', '0px'],
          opacity: ['0%', '100%'],
        }}
        transition={{
          delay: 3.8,
          duration: 0.5,
          ease: 'easeInOut',
          times: [0, 1],
          loop: false,
        }}
      >
        button
      </div>
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Button
