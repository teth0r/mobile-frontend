import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ifProp } from 'styled-tools'

const Wrapper = styled.header`
    background-color: #5181b8;
    color: rgba(194,222,255,.8);
    padding: 10px 20px;
    position: fixed;
    bottom: 0;
    width: calc(100% - 40px);
    z-index: 999;
`
const MenuLink = styled(Link)`
  cursor: pointer;
  display: inline-block;
  height: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 0 16px;
  font-size: 14px;
  line-height: 30px;
  vertical-align: top;
  font-weight: 500;
  text-decoration: none;
  color: ${ifProp('active', '#fff', 'inherit')};

  ${ifProp(
  'active',
  css`
      background-color: rgba(173,211,255,.32);
    `
)}

  &:hover {
    background-color: rgba(173,211,255,.32);
    color: #fff;
  }
`

const Icon = styled.img`
    width: 28px;
    height: 28px;
    fill: #fff;
    border-radius: 50px;
`

export { Wrapper, MenuLink, Icon };
