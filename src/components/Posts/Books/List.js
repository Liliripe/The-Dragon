import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Books from './Books'
import { StyledCol, Title, BookList } from './style'

const List = () => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulBook {
          edges {
            node {
              title
              author
            }
          }
        }
      }
    `}
    render={data => (
      <StyledCol xs={12} md={3}>
        <Title>
          <p>Books</p>
          <a href="#">See All</a>
        </Title>

        <BookList>
          {data.allContentfulBook.edges.map(({ node: book }) => (
            <Books key={book.id} {...book} />
          ))}
        </BookList>
      </StyledCol>
    )}
  />
)

export default List
