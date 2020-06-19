import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import { StyledLogo } from './style'

const Logo = ({ width, top }) => (
  <StaticQuery
    query={graphql`
      query Banner {
        bannerImage: contentfulAsset(title: { eq: "logo" }) {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    `}
    render={data => (
      <StyledLogo top={top} width={width}>
        <div className="logo-image">
          <Link to="/">
            <Img fluid={data.bannerImage.fluid} />
          </Link>
        </div>
      </StyledLogo>
    )}
  />
)

export default Logo
