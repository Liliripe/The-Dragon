import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'

import Writers from './Writers'
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
      <>
        {data.allContentfulAuthor.edges.slice(0, 2).map(({ node: author }) => (
            <Writers key={author.id} {...author} />
        ))}
      </>
    )}
  />
)

export default List
