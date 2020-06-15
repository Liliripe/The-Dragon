import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Button from './Button'
import Drawer from './Drawer'
import Search from './Search'
import Logo from '../Logo'
import Subscribe from './Subscribe'
import { StyledHeader, StyledNav, NavCol, LogoCol } from './style'

let lastScrollY = 0
let ticking = false

class Header extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount() {
    var scrollpos = window.scrollY
    var header = document.querySelector('.header')

    function add_class_on_scroll() {
      header.classList.add('header-active')
    }
    function remove_class_on_scroll() {
      header.classList.remove('header-active')
    }

    window.addEventListener('scroll', function() {
      scrollpos = window.scrollY

      if (scrollpos > 155) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }
    })
  }

  render() {
    return (
      <StyledHeader>
        <Container className="header">
          <Row>
            <NavCol>
              <StyledNav className="menu-buttons">
                <li>
                  <Button />
                </li>
                <li>
                  <Search />
                </li>
              </StyledNav>
            </NavCol>

            <LogoCol xs={5}>
              <Logo width="192px" color="#230444" />
            </LogoCol>

            <NavCol>
              <Subscribe text="Subscribe" />
            </NavCol>
          </Row>
        </Container>

        <Drawer />
      </StyledHeader>
    )
  }
}

export default Header
