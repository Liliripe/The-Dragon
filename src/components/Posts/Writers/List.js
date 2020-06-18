import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Writers from './Writers'
import { StyledCol, Title } from './style'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAuthor {
          edges {
            node {
              portrait {
                title
                fluid {
                  src
                }
              }
              contributorName
              contributorDescription
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCol xs={12} md={3}>
        <Title>
          <p>Writers</p>
          <a href="#">See All</a>
        </Title>

        {data.allContentfulAuthor.edges.map(({ node: author }) => (
          <Writers key={author.id} {...author} />
        ))}
      </StyledCol>
    )}
  />
)

export default List
