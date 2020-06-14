import React from 'react'
import { bool } from 'prop-types'

import { StyledDrawer } from './style'

const Drawer = ({ open }) => {
  return (
    <StyledDrawer open={open}>
        test
    </StyledDrawer>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
