import React, { useEffect } from 'react'
import Footer from '../Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Global } from '@emotion/core'
import { globalStyles } from '../../styles/globalStyles.js'
 
const Layout = props => {
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add('user-is-tabbing')
    }
  }
  useEffect(() => window.addEventListener('keydown', handleFirstTab), [])

  return (
    <div className="siteRoot">
      <div className="siteContent">
        <div id="main">{props.children}</div>
      </div>
      <Footer />
      <Global styles={globalStyles} />
    </div>
  )
}

export default Layout
