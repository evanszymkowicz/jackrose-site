import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { scroller } from 'react-scroll'

import { Section, Wrapper, BackgroundImage, Contact } from '../utils/UI'
import { media, border } from '../utils/style'

const HeroWrapper = styled(Section)`
  width: 100%;
  height: 100vh;

  ${border}
`

const Content = styled(Wrapper)`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FaChevronDown)`
  margin-top: 50px;
  width: 50px;
  height: 50px;
  padding: 8px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  :hover {
    transform: scale(1.1)
  }

  transition: transform 0.2s ease-in;
`

const Logo = styled(GatsbyImg)`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  user-select: none;

  &.mobile {
    display: none;
  }

  ${media.phone(css`
    &.mobile {
      display: block;
    }

    &.desktop {
      display: none;
    }
  `)}
`

const Hero = ({ content }) => (
  <HeroWrapper>
    <BackgroundImage
      hero
      image={content.backgroundImage}
    />
    <Content>
      <Logo
        style={{ maxWidth: 800 }}
        className='desktop'
        alt={content.logo.title}
        fluid={content.logo.fluid}
      />
      <Logo
        style={{ maxWidth: 500 }}
        className='mobile'
        alt={content.logoMobile.title}
        fluid={content.logoMobile.fluid}
      />
      <Fade delay={300}>
        <Contact
          contact={content.contact}
        />
      </Fade>
      <Fade delay={500}>
        <Icon
          onClick={() => scroller.scrollTo("nuestra-historia", {
            duration: 1000,
            smooth: "ease"
          })}
        />
      </Fade>
    </Content>
  </HeroWrapper>
)

Hero.propTypes = {
  content: PropTypes.shape({
    logo: PropTypes.object,
    backgroundImage: PropTypes.object,
    contact: PropTypes.object,
    logoMobile: PropTypes.object
  }).isRequired
}

export default Hero
