import React from 'react'
import Layout from '../components/Layout'
import Wrapper from '../components/Wrapper'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact description goes here" />
      <Wrapper>
        <PageTitle>Contact</PageTitle>
        <ContactForm />
      </Wrapper>
    </Layout>
  )
}

export default Contact
