import React from 'react'
import { bool, func } from 'prop-types'
import SimpleLineIcon from 'react-simple-line-icons'

import { MenuButton } from './style'

const Button = ({ open, setOpen }) => {
    return (
      <MenuButton open={open} onClick={() => setOpen(!open)}>
        <SimpleLineIcon name="menu" />
      </MenuButton>
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Button
