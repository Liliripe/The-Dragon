import React from 'react'
import Container from 'react-bootstrap/Container'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Menu from './Menu'
import Account from './Account'
import Submenu from './Submenu'
import Social from './Social'
import { StyledHeader, StyledLogo, Navigation, Primary, Secondary, StyledRow } from './style'

class Header extends React.Component {
  state = {
    isTop: true,
  }

  componentDidMount() {
    var scrollpos = window.scrollY
    var header = document.querySelector('.header')
    var logo = document.querySelector('.logo')

    function add_class_on_scroll() {
      header.classList.add('header-active')
      logo.classList.add('logo-active')
    }
    function remove_class_on_scroll() {
      header.classList.remove('header-active')
      logo.classList.remove('logo-active')
    }

    window.addEventListener('scroll', function() {
      scrollpos = window.scrollY

      if (scrollpos > 59) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }
    })
  }

  render() {
    return (
      <StyledHeader>
        <Logo width="100px" top="8px" />

        <Navigation>
          <Primary>
            <Wrapper>
              <Container fluid>
                <StyledRow>
                  <Account width="4" />
                  <Social width="4" offset="4" />
                </StyledRow>
              </Container>
            </Wrapper>
          </Primary>

          <Secondary className="header">
            <Wrapper>
              <Container fluid>
                <StyledRow>
                  <Menu width="4.5" />
                  <Submenu width="4.5" offset="3" />
                </StyledRow>
              </Container>
            </Wrapper>
          </Secondary>
        </Navigation>
      </StyledHeader>
    )
  }
}

export default Header
