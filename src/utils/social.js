import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const findIcon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.a`
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.white};
  border-radius: 50%;

  display: flex;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.black};
    background: ${({ theme }) => theme.white};
  }

  transition: background .3s;
`

export const Social = ({ social }) => (
  <Content>
    {social.map(item => (
      <Icon
        key={item.name}
        href={item.url}
      >
        {findIcon(item.name)}
      </Icon>
    ))}
  </Content>
)

Social.propTypes = {
  social: PropTypes.array.isRequired
}
