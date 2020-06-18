import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import LatestList from '../components/Posts/Latest/List'
import FeaturedList from '../components/Posts/Featured/List'
import WritersList from '../components/Posts/Writers/List'
import PopularList from '../components/Posts/Popular/List'
import BookList from '../components/Posts/Books/List'

const Posts = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { basePath } = pageContext
  let ogImage

  try {
    ogImage = posts[0].node.heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO title={startCase(basePath)} image={ogImage} />
      <Wrapper>
        <Header />
        <LatestList />
        <FeaturedList />
        <Row>
          <WritersList />
          <PopularList />
          <BookList />
        </Row>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
        }
      }
    }
  }
`

export default Posts
