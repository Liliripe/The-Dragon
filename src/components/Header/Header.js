import React from 'react'
import Container from 'react-bootstrap/Container'

import Wrapper from '../Wrapper'
import Logo from '../Logo'
import Menu from './Menu'
import Submenu from './Submenu'
import Search from './Search'
import Social from './Social'
import { StyledHeader, StyledLogo, Navigation, Primary, Secondary, StyledRow } from './style'

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
      <StyledHeader className="header">
        <Logo width="100px" top="8px" />

        <Navigation>
          <Primary>
            <Wrapper>
              <Container fluid>
                <StyledRow>
                  <Submenu width="4" />
                  <Social width="4" offset="4" />
                </StyledRow>
              </Container>
            </Wrapper>
          </Primary>

          <Secondary>
            <Wrapper>
              <Container fluid>
                <StyledRow>
                  <Menu width="4.5" />
                  <Search width="4.5" offset="3" />
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
