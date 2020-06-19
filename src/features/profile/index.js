import React from 'react'
import { Wrapper, PanelHeader, Cell, UserAvatar, Name, AgentName, ProfileIcon, Answers, AnswersIcon, AnswerInfo, TAtext, BAtext, ALLtext, TAcounter, BAcounter, ALLcounter } from './styled'

function Profile () {
  return (
    <Wrapper>
      <PanelHeader>Профиль</PanelHeader>
            <center>
                <UserAvatar src="https://vk.com/images/support/agents/new/buddha_green.png" />
                <br /><br />
                <Name>
                    <AgentName>
                    Агент Поддержки #9999<ProfileIcon src="/src/data/images/icons/profile_verify.svg" /><ProfileIcon src="/src/data/images/icons/profile_ban.svg" />
                    </AgentName>
                </Name>
            </center>
            <br />
            <Answers>
              <AnswerInfo><AnswersIcon src="/src/data/images/icons/profile_trueanswers.svg" /><TAtext>Положительные ответы:</TAtext><TAcounter>9999</TAcounter></AnswerInfo>
              <AnswerInfo><AnswersIcon src="/src/data/images/icons/profile_badanswers.svg" /><BAtext>Отрицательные ответы:</BAtext><BAcounter>9999</BAcounter></AnswerInfo>
              <AnswerInfo><AnswersIcon src="/src/data/images/icons/profile_allanswers.svg" /><ALLtext>Все ответы:</ALLtext><ALLcounter>9999</ALLcounter></AnswerInfo>
            </Answers>
    </Wrapper>
  )
}

export { Profile };

// стрелочка: <TicketStatusIcon src="/src/data/images/icons/chevron_right.svg" />
// ава агента: <AgentAvatar src="https://vk.com/images/support15_budda.png" />
