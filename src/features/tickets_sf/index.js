import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, TicketsMenu, TicketsMenuPuncts, TicketsMenuPunct, TicketsList, TicketCard, TicketTitle, TicketDescription, TicketUserAvatar } from './styled'
import { Header } from 'features/common/organisms/header'

function Tickets () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Вопросы</PanelTitle></center>
      </PanelHeader>

        <TicketsMenu>
            <TicketsMenuPuncts>
                  <TicketsMenuPunct href="https://vk.com/support?act=admin">Все</TicketsMenuPunct>
                  <TicketsMenuPunct href="https://vk.com/support?act=admin&filter=new_answer">Ожидают оценки</TicketsMenuPunct>
                  <TicketsMenuPunct href="https://vk.com/support?act=admin&filter=new_user_answer">Новые комментарии</TicketsMenuPunct>
            </TicketsMenuPuncts>
            <br/><br/><br/><br/>
            </TicketsMenu>

            <TicketsList>
                <TicketCard>
                    <TicketTitle>Заголовок тикетааааааааааааааааааааааааааааааааааааааааааааааа</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>
                <br/><br/><br/><br/>
                <TicketCard>
                    <TicketTitle>Просто заголовок</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>
                <br/><br/><br/><br/>
                <TicketCard>
                    <TicketTitle>ч0</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>
                <br/><br/><br/><br/>
                <TicketCard>
                    <TicketTitle>ч0</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>
                <br/><br/><br/><br/>
                <TicketCard>
                    <TicketTitle>ч0</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>
                <br/><br/><br/><br/>
                <TicketCard>
                    <TicketTitle>ч0</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>
                <br/><br/><br/><br/>
                <TicketCard>
                    <TicketTitle>ч0</TicketTitle>
                    <TicketDescription>Есть ответ, завтра в 24:60</TicketDescription>
                    <TicketUserAvatar src="https://vk.com/sticker/1-126-64" />
                </TicketCard>

            </TicketsList>
    </Wrapper>
  )
}

export { Tickets }
