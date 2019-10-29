import React from 'react'
import PropTypes from 'prop-types'
import PigeonMap from 'pigeon-maps'
import Marker from 'pigeon-marker/react'

const wikimedia = {
  url: (x, y, z) => {
    const retina = typeof window !== 'undefined' && window.devicePixelRatio >= 2 ? '@2x' : ''
    return `https://maps.wikimedia.org/osm-intl/${z}/${x}/${y}${retina}.png`
  },
  attribution: () => (
    <a
      style={{ color: "rgb(0, 120, 168)", textDecoration: "none" }}
      href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use"
    >
        Wikimedia maps
    </a>
  )
}

export const ContactMap = ({ latlng }) => (
  <PigeonMap
    defaultCenter={latlng}
    defaultZoom={16}
    provider={wikimedia.url}
    attributionPrefix={wikimedia.attribution()}
  >
    <Marker anchor={latlng} />
  </PigeonMap>
)

ContactMap.propTypes = {
  latlng: PropTypes.array.isRequired
}
