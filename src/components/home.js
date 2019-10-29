import React from 'react'
import PropTypes from 'prop-types'
import { Hero, PreContact, Contact, Section } from './sections'

const DynamicSections = ({ content }) => (
  content.map(section => (
    <Section
      key={section.id}
      content={section}
    />
  ))
)

const Home = ({ content: { hero, sections, preContact, contact } }) => (
  <>
    <Hero content={hero} />
    <DynamicSections content={sections} />
    <PreContact content={preContact} />
    <Contact content={contact} />
  </>
)

Home.propTypes = {
  content: PropTypes.shape({
    hero: PropTypes.object,
    sections: PropTypes.array,
    preContact: PropTypes.object,
    contact: PropTypes.object
  }).isRequired
}

export default Home
