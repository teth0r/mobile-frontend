import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, StatisticCard, StatisticCounters, StatisticUnderCounter, StatisticTrueAnswers, StatisticAllAnswersCounter, StatisticTrueAnswersCounter, StatisticBadAnswersCounter, ProfileAvatar, ProfileName, ProfileAchievementsCard, ProfileAchievementsCardTitle, ProfileAchievementsCardShowAll, ProfileAchievementsCardAchievementCard, ProfileAchievementsCardIconBackground, ProfileAchievementsCardAchievementTitle, ProfileAchievementsCardAchievementDescription } from './styled'
import { Header } from 'features/common/organisms/header'

function Profile () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Профиль</PanelTitle></center>
      </PanelHeader>
      <br/><br/><br/><br/>
      <center>
        <ProfileAvatar src="https://sun9-57.userapi.com/c846019/v846019449/17bec6/EN9CDqmhTko.jpg" />
        <ProfileName>Агент Поддержки #1</ProfileName>
      </center>

        <StatisticCard>
            <StatisticCounters>
              <StatisticTrueAnswers>
                  <StatisticAllAnswersCounter>100</StatisticAllAnswersCounter>
                  <StatisticUnderCounter>Всего ответов</StatisticUnderCounter>
              </StatisticTrueAnswers>
              <StatisticTrueAnswers>
                  <StatisticTrueAnswersCounter>50</StatisticTrueAnswersCounter>
                  <StatisticUnderCounter>Положительных</StatisticUnderCounter>
              </StatisticTrueAnswers>
              <StatisticTrueAnswers>
                  <StatisticBadAnswersCounter>50</StatisticBadAnswersCounter>
                  <StatisticUnderCounter>Отрицательных</StatisticUnderCounter>
              </StatisticTrueAnswers>
            </StatisticCounters>
            <br/><br/><br/><br/>
            </StatisticCard>

        <ProfileAchievementsCard>
            <ProfileAchievementsCardTitle>Достижения</ProfileAchievementsCardTitle>
            <ProfileAchievementsCardShowAll>просмотреть все</ProfileAchievementsCardShowAll>

            <ProfileAchievementsCardAchievementCard>
              <ProfileAchievementsCardIconBackground />
              <ProfileAchievementsCardAchievementTitle>День за днём</ProfileAchievementsCardAchievementTitle>
              <ProfileAchievementsCardAchievementDescription>Заходите каждый день в приложение</ProfileAchievementsCardAchievementDescription>
            </ProfileAchievementsCardAchievementCard>

            <br/>

            <ProfileAchievementsCardAchievementCard>
              <ProfileAchievementsCardIconBackground />
              <ProfileAchievementsCardAchievementTitle>В десятке!</ProfileAchievementsCardAchievementTitle>
              <ProfileAchievementsCardAchievementDescription>Попасть в топ-10 рейтинга</ProfileAchievementsCardAchievementDescription>
            </ProfileAchievementsCardAchievementCard>

            <br/>

            <ProfileAchievementsCardAchievementCard>
              <ProfileAchievementsCardIconBackground />
              <ProfileAchievementsCardAchievementTitle>Месяц в приложении</ProfileAchievementsCardAchievementTitle>
              <ProfileAchievementsCardAchievementDescription>Находиться в приложении 1 месяц</ProfileAchievementsCardAchievementDescription>
            </ProfileAchievementsCardAchievementCard>

        </ProfileAchievementsCard>
    </Wrapper>
  )
}

export { Profile }
