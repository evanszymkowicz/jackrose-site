import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import styled from 'styled-components'

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`

const Image = styled(GatsbyImg)`
  height: 100%;
  width: 100%;
`

const Opacity = styled(Background)`
  background: linear-gradient(to top, rgba(0,0,0, 0.7) 30%, rgba(0,0,0, 0.1));
  z-index: 1;
`

export const BackgroundImage = ({ image, hero, style }) => (
  <Background style={{ ...style }}>
    {!hero && <Opacity />}
    <Image
      imgStyle={{ objectFit: "cover" }}
      alt={image.title}
      fluid={image.fluid}
    />
  </Background>
)

BackgroundImage.propTypes = {
  image: PropTypes.object.isRequired,
  style: PropTypes.object,
  hero: PropTypes.bool
}
