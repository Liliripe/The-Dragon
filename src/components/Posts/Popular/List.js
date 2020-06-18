import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Popular from './Popular'
import { StyledCol } from './style'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAuthor {
          edges {
            node {
              contributorName
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCol xs={12} md={6}>
        Popular posts
      </StyledCol>
    )}
  />
)

export default List
