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
    left: calc(50% - 130px/2);
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

const UserAvatar = styled.img`
    display: flex;
    flex-direction: row;
    padding: 0px;
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 150px;
    margin-top: 65px;
`

const Name = styled.div`
    line-height: 50px;
`

const AgentName = styled.div`
    position: relative;
    width: 95%;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08);
    border-radius: 10px;

    color: #000;
    margin-top: -15px;

    @font-face {
      font-family: SFRegular;
      src: url(/src/data/fonts/sf_regular.ttf);
}
    font-family: SFRegular;
`

const ProfileIcon = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 2.5px;
    margin-bottom: -2px;
`

const Answers = styled.div`
    position: relative;
    width: 95%;
    height: 95px;
    background: #FFFFFF;
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08);
    border-radius: 10px;

    color: #000;
    margin-top: 1px;

    @font-face {
      font-family: SFRegular;
      src: url(/src/data/fonts/sf_regular.ttf);
    }
    font-family: SFRegular;
    margin: 0 auto;
`

const AnswersIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 5px;
    margin-top: 2.5px;
`

const AnswerInfo = styled.div`
    display: flex;
`

const TAtext = styled.div`
    color: #50C750;
    margin-top: 10px;
    margin-left: 2.5px;
`

const BAtext = styled.div`
    color: #E64646;
    margin-top: 10px;
    margin-left: 2.5px;
`

const ALLtext = styled.div`
    color: #3F8AE0;
    margin-top: 10px;
    margin-left: 2.5px;
`

const TAcounter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 4px;
    position: absolute;
    background: #32B332;
    border-radius: 9px;
    color: #fff;
    left: 220px;
    top: 10px;
`
const BAcounter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 4px;
    position: absolute;
    background: #FF5263;
    border-radius: 9px;
    color: #fff;
    left: 220px;
    top: 38px;
`

const ALLcounter = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 4px;
    position: absolute;
    background: #3F8AE0;
    border-radius: 9px;
    color: #fff;
    left: 130px;
    top: 65px;
`


export { Wrapper, PanelHeader, Cell, UserAvatar, Name, AgentName, ProfileIcon, Answers, AnswersIcon, TAtext, AnswerInfo, BAtext, ALLtext, TAcounter, BAcounter, ALLcounter };
