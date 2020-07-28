import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, StatisticCard, StatisticTitle, StatisticCounters, StatisticUnderCounter, StatisticTrueAnswers, StatisticAllAnswersCounter, StatisticTrueAnswersCounter, StatisticBadAnswersCounter, RatingCard, RatingCardsList, RatingUserInfo, RatingAvatar, RatingName, RatingPoints } from './styled'
import { Header } from 'features/common/organisms/header'

function Statistic () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Статистика</PanelTitle></center>
      </PanelHeader>

        <StatisticCard>
            <center><StatisticTitle>Ваша статистика</StatisticTitle></center>
            <StatisticCounters>
              <StatisticTrueAnswers>
                  <StatisticAllAnswersCounter>0</StatisticAllAnswersCounter>
                  <StatisticUnderCounter>Всего ответов</StatisticUnderCounter>
              </StatisticTrueAnswers>
              <StatisticTrueAnswers>
                  <StatisticTrueAnswersCounter>0</StatisticTrueAnswersCounter>
                  <StatisticUnderCounter>Положительных</StatisticUnderCounter>
              </StatisticTrueAnswers>
              <StatisticTrueAnswers>
                  <StatisticBadAnswersCounter>0</StatisticBadAnswersCounter>
                  <StatisticUnderCounter>Отрицательных</StatisticUnderCounter>
              </StatisticTrueAnswers>
            </StatisticCounters>
            <br/><br/><br/><br/>
            </StatisticCard>
            <RatingCardsList>
        <RatingCard>
          <RatingUserInfo>
            <RatingAvatar src="https://sun1-18.userapi.com/1Ueqqct8wcrZbzti9W0mVwh8NPm_sbOCbz25Ig/ja5afAJ_KQk.jpg?ava=1" />
            <RatingName>Агент Поддержки #9999</RatingName>
            <RatingPoints>999999999 points</RatingPoints>
          </RatingUserInfo>
        </RatingCard>
        <br/><br/><br/><br/>
        <RatingCard>
          <RatingUserInfo>
            <RatingAvatar src="https://sun1-18.userapi.com/1Ueqqct8wcrZbzti9W0mVwh8NPm_sbOCbz25Ig/ja5afAJ_KQk.jpg?ava=1" />
            <RatingName>Агент Поддержки #9999</RatingName>
            <RatingPoints>999999999 points</RatingPoints>
          </RatingUserInfo>
        </RatingCard>
        <br/><br/><br/><br/>
        <RatingCard>
          <RatingUserInfo>
            <RatingAvatar src="https://sun1-18.userapi.com/1Ueqqct8wcrZbzti9W0mVwh8NPm_sbOCbz25Ig/ja5afAJ_KQk.jpg?ava=1" />
            <RatingName>Агент Поддержки #9999</RatingName>
            <RatingPoints>999999999 points</RatingPoints>
          </RatingUserInfo>
        </RatingCard>
        <br/><br/><br/><br/>
        <RatingCard>
          <RatingUserInfo>
            <RatingAvatar src="https://sun1-18.userapi.com/1Ueqqct8wcrZbzti9W0mVwh8NPm_sbOCbz25Ig/ja5afAJ_KQk.jpg?ava=1" />
            <RatingName>Агент Поддержки #9999</RatingName>
            <RatingPoints>999999999 points</RatingPoints>
          </RatingUserInfo>
        </RatingCard>
        <br/><br/><br/><br/>
        <RatingCard>
          <RatingUserInfo>
            <RatingAvatar src="https://sun1-18.userapi.com/1Ueqqct8wcrZbzti9W0mVwh8NPm_sbOCbz25Ig/ja5afAJ_KQk.jpg?ava=1" />
            <RatingName>Агент Поддержки #9999</RatingName>
            <RatingPoints>999999999 points</RatingPoints>
          </RatingUserInfo>
        </RatingCard>
        <br/><br/><br/><br/>
        <RatingCard>
          <RatingUserInfo>
            <RatingAvatar src="https://sun1-18.userapi.com/1Ueqqct8wcrZbzti9W0mVwh8NPm_sbOCbz25Ig/ja5afAJ_KQk.jpg?ava=1" />
            <RatingName>Агент Поддержки #9999</RatingName>
            <RatingPoints>999999999 points</RatingPoints>
          </RatingUserInfo>
        </RatingCard>
        </RatingCardsList>
    </Wrapper>
  )
}

export { Statistic }
