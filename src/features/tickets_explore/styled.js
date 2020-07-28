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

const PanelHeaderButtonLeft = styled.a`

`

const PanelHeaderButtonLeftIcon = styled.img`
  position: absolute;
  left: 23px;
  top: 23px;
`

const TicketHeaderBlock = styled.div`
  width: 99%;
  height: 66px;
  margin-top: 75px;

  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const TicketHeaderTitle = styled.div`
  margin-left: 15px;
  position: absolute;
  top: 93px;
  max-width: 65%;
  white-space: nowrap;
  overflow: hidden;
  padding: 5px;
  text-overflow: ellipsis;

  font-family: SFMedium;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`

const TicketHeaderStatus = styled.div`
  margin-left: 20px;
  position: absolute;
  top: 115px;
  color: #818C99;
  font-family: SFRegular;
  font-size: 14px;
`

const TicketHeaderButton = styled.a`
  position: absolute;
  right: 48px;
  margin-top: 21px;
`

const TicketHeaderButtonIcon = styled.img`

`

const TicketDialogue = styled.div`
  width: 99%;
  height: 425px;
  overflow: scroll;
  ::-webkit-scrollbar { width: 0px; height: 0px;}
  margin-top: 1px;

  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;  display: flex;
  flex-direction: column;
  `

const TicketUserMessage = styled.div`
  max-width: 80%;
  margin-left: 14px;
  margin-top: 15px;
  padding: 10px;

  word-break: break-all;

  color: #000;
  background: #FFFFFF;
  border: 1px solid rgba(129, 140, 153, 0.25);
  border-radius: 20px;
  box-sizing: border-box;position: relative
`

const TicketAgentMessage = styled.div`
  max-width: 80%;
  margin-top: 15px;
  position: absolute;
  right: -15%;
  padding: 10px;

  word-break: break-all;

  color: #fff;
  background: #6B9BD2;
  border: 1px solid rgba(129, 140, 153, 0.25);
  border-radius: 20px;
  box-sizing: border-box;position: relative
`

const TicketWriteAnswer = styled.div`
  width: 99%;
  height: 80px;
  margin-top: 1px;

  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const TicketWriteAnswerIcons = styled.div`
  display: flex;
  margin-top: -75px;
  position: absolute;
  right: 45px;
`

const TicketWriteAnswerIcon = styled.img`
  width: 20px;
  height: 22px;  padding: 15px;

`

const TicketWriteAnswerForm = styled.textarea`
  min-width: 65%;
  max-width: 65%;
  min-height: 70%;
  max-height: 70%;

  margin: 15px;

  ::-webkit-scrollbar { width: 0px; height: 0px;}
  outline: none !important;
  border: none;
`

export { Wrapper, MenuLink, PanelHeader, PanelTitle, PanelHeaderButtonLeft, PanelHeaderButtonLeftIcon, TicketHeaderBlock, TicketHeaderTitle, TicketHeaderStatus, TicketHeaderButton, TicketHeaderButtonIcon, TicketDialogue, TicketUserMessage, TicketAgentMessage, TicketWriteAnswer, TicketWriteAnswerIcons, TicketWriteAnswerIcon, TicketWriteAnswerForm };
