import React from 'react'

import { Wrapper, List, Item } from './style'
import { LogoText } from './style'

const today = new Date()

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        Copyright &copy; {today.getFullYear()} by RENAME_HERE. All rights
        reserved.
      </Item>

      <Item>
        <LogoText>The Dragon</LogoText>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
