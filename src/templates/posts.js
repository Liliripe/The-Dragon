import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
import { startCase } from 'lodash'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Latest from '../components/Posts/Latest'

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
        <div style={{height: '1000px'}}></div>

        {/* {posts.slice(1).map(({ node: post }) => (
          <Latest key={post.id} {...post} basePath={basePath} />
        ))} */}
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
          title
          id
          slug
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
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Posts
