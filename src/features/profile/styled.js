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
  height: 72px;
  left: 4%;
  top: 215px;
  margin: auto;
  background: #FFFFFF;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const StatisticCounters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
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
  margin-top: 5px;
`

const ProfileAvatar = styled.img`
  width: 92px;
  height: 92px;
  border-radius: 50px;
`

const ProfileName = styled.div`
  margin-top: 5px;

  color: #6B9BD2;
  font-family: SFMedium;
  font-weight: bold;

`

const ProfileAchievementsCard = styled.div`
  position: absolute;
  width: 92%;
  height: 252px;
  left: 4%;
  top: 305px;
  margin: auto;
  background: #FFFFFF;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const ProfileAchievementsCardTitle = styled.div`
  margin-left: 16px;
  margin-top: 15px;

  color: #000;
  font-family: SFMedium;
  font-size: 18px;
  font-weight: bold;
`

const ProfileAchievementsCardShowAll = styled.div`
  position: absolute;
  right: 16px;
  top: 18px;

  color: #4986CC;
  font-family: SFRegular;
  font-size: 15px;
`

const ProfileAchievementsCardAchievementCard = styled.div`
`

const ProfileAchievementsCardIconBackground = styled.div`
  width: 48px;
  height: 48px;
  margin-top: 10px;
  margin-left: 16px;

  background: #E64646;

  border: 0.5px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 8px;
`

const ProfileAchievementsCardAchievementTitle = styled.div`
  margin-left: 80px;
  margin-top: -45px;

  max-width: 65%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #000;
  font-family: SFRegular;
  font-size: 18px;
`

const ProfileAchievementsCardAchievementDescription = styled.div`
  margin-left: 80px;

  max-width: 65%;
  white-space: nowrap;

  max-height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #99A2AD;
  font-family: SFRegular;
  font-size: 13px;
`

export { Wrapper, MenuLink, PanelHeader, PanelTitle, StatisticCard, StatisticCounters, StatisticUnderCounter, StatisticTrueAnswers, StatisticAllAnswersCounter, StatisticTrueAnswersCounter, StatisticBadAnswersCounter, ProfileAvatar, ProfileName, ProfileAchievementsCard, ProfileAchievementsCardTitle, ProfileAchievementsCardShowAll, ProfileAchievementsCardAchievementCard, ProfileAchievementsCardIconBackground, ProfileAchievementsCardAchievementTitle, ProfileAchievementsCardAchievementDescription };
