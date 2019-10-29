import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../style'

const Text = styled.div`
  color: ${({ theme, dark }) => dark ? theme.gray : theme.white};
  text-align: center;

  h1 {
    font-weight: 900;
  }

  a {
    color: ${({ theme, dark }) => dark ? theme.gray : theme.white};
  }

  a.phone-number {
    display: none;
  }

  ${media.phone(css`
    a.phone-number {
      display: inline;
    }
    span.phone-number {
      display: none;
    }
  `)}
`

export const Contact = ({ contact, dark }) => (
  <Text dark={dark}>
    <h1>
      {contact.address.md.body}
      {` `}-{` `}
      <span className='phone-number'>
        {contact.phoneNumber}
      </span>
      <a className='phone-number'
        href={"tel:011"+contact.phoneNumber}
      >
        {contact.phoneNumber}
      </a>
    </h1>
    <h2>
      <a href={"mailto:"+contact.email}>{contact.email}</a>
    </h2>
  </Text>
)

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  dark: PropTypes.bool
}
