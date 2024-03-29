import styled, { css } from 'styled-components'
import { media } from './style'


export const Section = styled.section`
  position: relative;
`

export const Wrapper = styled.div`
  margin: 0 ${({ theme }) => theme.position.baseMargin}%;

  ${media.medium(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin*2}%;
  `)}

  ${media.xlarge(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin*3}%;
  `)}

  ${media.xxlarge(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin*4}%;
  `)}
`
