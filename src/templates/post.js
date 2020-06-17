import React from 'react'
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PageTitle from '../components/PageTitle'
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Tags from '../components/Tags'
import Body from '../components/Posts/Single/Body'
import Details from '../components/Posts/Single/Details'
import SEO from '../components/SEO'
import { Author } from '../components/Posts/Single/Details/style'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    author,
    metaDescription,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost

  const { basePath } = pageContext

  let ogImage
  try {
    ogImage = heroImage.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={
          metaDescription
            ? metaDescription.internal.content
            : body.childMarkdownRemark.excerpt
        }
        image={ogImage}
      />
      <Wrapper>
        <Header />
        {tags && <Tags tags={tags} basePath={basePath} />}
        <PageTitle>{title}</PageTitle>
        <Details date={publishDate} author={author} />

        <Row>
          <Col xs={8}>
            <Hero image={heroImage} height={'50vh'} />
            <Body body={body} />
          </Col>
        </Row>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      author
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
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
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
