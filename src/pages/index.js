import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = ({ data }) => (
  <Layout>
    <Home content={data.content} />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage

export const query = graphql`
  query HOME_PAGE_QUERY {
    content: contentfulPage(name: {regex:"/home/i"}) {
      hero {
        ...Hero
      }
      sections {
        ...Section
      }
      preContact {
        ...PreContact
      }
      contact: sectionContact {
        ...ContactInfo
      }
    }
  }
`
