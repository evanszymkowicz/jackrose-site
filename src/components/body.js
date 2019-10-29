import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { Section as St, Wrapper as Wr, BackgroundImage } from '../utils/UI'
import { fontSize, border } from '../utils/style'

const Section = styled(St)`
  padding: 0;
  width: 100%;

  ${border}
`

const Wrapper = styled(Wr)`
  padding: 8% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Text = styled.h2`
  color: ${({ theme }) => theme.white};
  font-family: 'playfair display', serif;
  font-style: italic;

  ${fontSize(5.0)};
`

const Body = ({ content }) => (
  <Section>
    <Wrapper>
      <BackgroundImage image={content.background} />
      <Fade>
        <Text>“{content.heading}”</Text>
      </Fade>
      <GatsbyImg
        style={{ width: "100%", maxWidth: 500 }}
        key={content.logo.title}
        alt={content.logo.title}
        fluid={content.logo.fluid}
      />
    </Wrapper>
  </Section>
)

Body.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string,
    background: PropTypes.object,
    logo: PropTypes.object
  }).isRequired
}

export default Body
