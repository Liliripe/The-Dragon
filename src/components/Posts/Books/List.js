import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Books from './Books'
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
      <StyledCol xs={12} md={3}>
        Books
      </StyledCol>
    )}
  />
)

export default List
