import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Popular from './Popular'
import { StyledCol, Title } from './style'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulPost {
          edges {
            node {
              title
              author
              id
              slug
              publishDate(formatString: "MMMM DD, YYYY")
              heroImage {
                title
                fluid(maxWidth: 1800) {
                  ...GatsbyContentfulFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCol xs={12} md={6}>
        <Title>
          <p>Popular Posts</p>
          <a href="#">See All</a>
        </Title>

        {data.allContentfulPost.edges.slice(11, 20).map(({ node: post }) => (
          <Popular key={post.id} {...post} basePath="" />
        ))}
      </StyledCol>
    )}
  />
)

export default List
