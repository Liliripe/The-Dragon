import React from 'react'
import { bool, func } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import {} from './style'

const Button = ({ open, setOpen }) => {
    return (
      <div
        open={open}
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Button
