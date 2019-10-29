import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo
import styled from 'styled-components'
import { Link } from 'gatsby'

import { Section, Wrapper as Wp } from '../utils/UI'

const Wrapper = styled(Wp)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 12rem;
    margin-bottom: 2rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Error: NOT FOUND</h1>
    <p>Sorry, you have landed on a page that does not exist (yet). Please go back.</p>
  </Layout>
)

export default NotFoundPage
