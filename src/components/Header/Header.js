import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Wrapper from '../Wrapper'
import Button from './Button'
import Drawer from './Drawer'
import Search from './Search'
import Logo from '../Logo'
import Subscribe from './Subscribe'
import { StyledNav } from './style'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <StyledNav>
                <li>
                  <Button open={open} setOpen={setOpen} />
                </li>
                <li>
                  <Search />
                </li>
              </StyledNav>
            </Col>

            <Col xs={5}>
              <Logo width="300px" color="red" />
            </Col>

            <Col>
              <Subscribe text="Subscribe" />
            </Col>
          </Row>
        </Container>

        <Drawer open={open} setOpen={setOpen} />
      </Wrapper>
    )
}

export default Header
