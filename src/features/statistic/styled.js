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

const StatisticCard = styled.div`
  position: absolute;
  width: 92%;
  height: 102px;
  left: 4%;
  top: 77px;
  margin: auto;
  background: #FFFFFF;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const StatisticTitle = styled.div`
  margin-top: 9px;
  left: 45%;

  font-family: SFRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  color: #6B9BD2;
`

const StatisticCounters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 14px;
`

const StatisticTrueAnswers = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`

const StatisticAllAnswersCounter = styled.div`
  color: #000;
  font-size: 19px;
`

const StatisticTrueAnswersCounter = styled.div`
  color: #4BB34B;
  font-size: 19px;
`

const StatisticBadAnswersCounter = styled.div`
  color: #E64646;
  font-size: 19px;
`

const StatisticUnderCounter = styled.div`
  color: #818C99;
  font-size: 12px;
`

const RatingCardsList = styled.div`
  position: absolute;
  width: 92%;
  height: 400px;
  left: 4%;
  top: 200px;
  overflow: scroll;
::-webkit-scrollbar { width: 0px; height: 0px;}
    flex-direction: column;
`

const RatingCard = styled.div`
  position: absolute;
  width: 100%;
  height: 54px;
  margin: auto;
  background: #FFFFFF;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const RatingUserInfo = styled.div`
  display: flex;
  margin-left: 15px;
`

const RatingAvatar = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 8px;
  border-radius: 50px;
`

const RatingName = styled.div`
  margin-left: 9px;
  margin-top: 15px;

  font-family: SFMedium;
  color: #6B9BD2;
  font-size: 12px;
`

const RatingPoints = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;

    text-align: center;
    font-size: 12px;
    color: rgb(144, 148, 153);
`

export { Wrapper, MenuLink, PanelHeader, PanelTitle, StatisticCard, StatisticTitle, StatisticCounters, StatisticUnderCounter, StatisticTrueAnswers, StatisticAllAnswersCounter, StatisticTrueAnswersCounter, StatisticBadAnswersCounter, RatingCardsList, RatingCard, RatingUserInfo, RatingAvatar, RatingName, RatingPoints };
