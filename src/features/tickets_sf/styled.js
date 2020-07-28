import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ifProp } from 'styled-tools'

const Wrapper = styled.header`
    color: rgba(194,222,255,.8);
    padding: 10px 20px;
    position: fixed;
    top: 0;
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

const PanelHeader = styled.div`
  width: 100%;
  height: 62px;
  position: absolute;
  top: 0px;
  left: 0px;

  background: #6B9BD2;
`

const PanelTitle = styled.div`
  height: 62px;
  margin: 21px 0;

  @font-face {
    font-family: "SFRegular";
    src: url("/src/data/fonts/sf_regular.ttf");
  }

  @font-face {
    font-family: "SFMedium";
    src: url("/src/data/fonts/sf_medium.ttf");
  }

  font-family: SFRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  text-align: center;

  color: #FFFFFF;
`

const TicketsMenu = styled.div`
  position: absolute;
  width: 92%;
  height: 50px;
  left: 4%;
  top: 77px;
  margin: auto;
  background: #FFFFFF;
  line-height: 25px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const TicketsMenuPuncts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 14px;
`

const TicketsMenuPunct = styled.a`
  color: #818C99;
  font-size: 12px;
  text-decoration: none;
`

const TicketsList = styled.div`
  position: absolute;
  width: 92%;
  height: 1300%;
  left: 4%;
  top: 150px;
  overflow: scroll;
  ::-webkit-scrollbar { width: 0px; height: 0px;}
  flex-direction: column;
`

const TicketCard = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 1px 2px rgba(205, 214, 230, 0.25);
  border-radius: 5px;
`

const TicketTitle = styled.div`
  margin-left: 14px;
  margin-top: 10px;
  max-width: 65%;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;

  color: #000000;
  font-family: SFRegular;
`

const TicketDescription = styled.div`
  margin-left: 20px;
  margin-top: -2px;

  color: #818C99;
`

const TicketUserAvatar = styled.img`
  width: 40px;
  height: 40px;

  position: absolute;
  right: 7%;
  top: 15px;
`

// const Separator = styled.div`
//   width: 150px;
//   height: 0px;
//   margin-top: 68.57px;
//
//   border: 1px solid rgba(255, 255, 255, 0.3);
// `

export { Wrapper, MenuLink, PanelHeader, PanelTitle, TicketsMenu, TicketsMenuPuncts, TicketsMenuPunct, TicketsList, TicketCard, TicketTitle, TicketDescription, TicketUserAvatar };
