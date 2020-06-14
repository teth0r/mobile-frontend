import React from 'react'
import { Wrapper, PanelHeader, Cell, Avatar, TicketTitle, TicketStatus, GoToTicketIcon, TicketInfo, TicketStatusIcon, AgentAvatar, TicketStatusIconMini } from './styled'

function Tickets () {
  return (
    <Wrapper>
      <PanelHeader>Вопросы</PanelHeader>
      <Cell href="https://vk.com">
          <TicketInfo>
              <Avatar src="https://sun1-25.userapi.com/7PQaYDiIaIHCxSS6vbNe4UOtppVkBBKALimpDQ/QRcFxh0e7U0.jpg?ava=1" />
              <TicketTitle>Название тикета</TicketTitle>
              <TicketStatus>На рассмотрении</TicketStatus>
              <TicketStatusIconMini src="/src/data/images/icons/tickets_new.svg" />
          </TicketInfo>
      </Cell>
      <Cell>
          <TicketInfo>
              <Avatar src="https://sun1-25.userapi.com/7PQaYDiIaIHCxSS6vbNe4UOtppVkBBKALimpDQ/QRcFxh0e7U0.jpg?ava=1" />
              <TicketTitle>Название тикетаааааааааааа</TicketTitle>
              <TicketStatus>На рассмотрении</TicketStatus>
              <TicketStatusIconMini src="/src/data/images/icons/tickets_new.svg" />
      </TicketInfo>
      </Cell>
      <Cell>
          <TicketInfo>
              <Avatar src="https://sun1-25.userapi.com/7PQaYDiIaIHCxSS6vbNe4UOtppVkBBKALimpDQ/QRcFxh0e7U0.jpg?ava=1" />
              <TicketTitle>чо палиш</TicketTitle>
              <TicketStatus>На рассмотрении</TicketStatus>.
              <TicketStatusIconMini src="/src/data/images/icons/tickets_new.svg" />
          </TicketInfo>
      </Cell>
    </Wrapper>
  )
}

export { Tickets }

// стрелочка: <TicketStatusIcon src="/src/data/images/icons/chevron_right.svg" />
// ава агента: <AgentAvatar src="https://vk.com/images/support15_budda.png" />
