import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ifProp } from 'styled-tools'

const Wrapper = styled.header`
    background-color: #5181b8;
    color: rgba(194,222,255,.8);
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: calc(100% - 40px);
    height: 30px;
    z-index: 999;
`

const PanelHeader = styled.h1`
    display: flex;
    flex-direction: row;
    padding: 0px;
    position: absolute;
    width: 131px;
    height: 26px;
    color: #fff;
    left: calc(52.5% - 131px/2);
    top: calc(45% - 26px/2 - 0.5px);

    @font-face {
    font-family: TTCommons;
    src: url(/src/data/fonts/tt_regular.ttf);
    }

    font-family: TTCommons;
    `

const Cell = styled.a`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0px;
    position: relative;
    width: 100%;
    height: 69px;
    top: 3.5em;
    margin-top: 10px;
    border-radius: 10px;

    text-decoration: none;
`

const Avatar = styled.img`
    display: flex;
    flex-direction: row;
    padding: 0px;
    position: relative;
    width: 44px;
    height: 48px;
    border-radius: 150px;
    left: 5%;
    top: 10%;
`

const AgentAvatar = styled.img`
    display: flex;
    flex-direction: row;
    padding: 0px;
    position: relative;
    width: 44px;
    height: 48px;
    border-radius: 150px;
    left: 95%;
    top: -40%;
`

const TicketTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #000;
    max-width: 50%;
    margin-left: 25%;
    margin-top: -10%;

    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -ms-line-clamp: 1;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    display: -webkit-box;
    display: box;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    line-height: 19px;
`

const TicketStatus = styled.div`
    font-size: 16px;
    color: #c4c4c4;
    margin-left: 25%;
    margin-top: 0.7%;
`

const TicketStatusIcon = styled.img`
    display: flex;
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 150px;
    left: 90%;
    top: -40%;
`

const GoToTicketIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 90%;
    margin-bottom: 5.5%;
`

const TicketInfo = styled.div`
    width: 20em;
`

const TicketStatusIconMini = styled.img`
    width: 20px;
    height: 20px;
    position:absolute;
    bottom: 10%;
    left: 13.5%;
`

export { Wrapper, PanelHeader, Cell, Avatar, TicketTitle, TicketStatus, GoToTicketIcon, TicketInfo, TicketStatusIcon, AgentAvatar, TicketStatusIconMini };
