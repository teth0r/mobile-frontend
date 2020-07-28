import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, NotifiesBellIcon, ThereAreNoNotifiesHereXD } from './styled'
import { Header } from 'features/common/organisms/header'

function Notifies () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Уведомления</PanelTitle></center>
      </PanelHeader>

      <center>
        <NotifiesBellIcon src="/src/data/images/icons/notifies/bell.svg" />
        <ThereAreNoNotifiesHereXD>Нет новых уведомлений</ThereAreNoNotifiesHereXD>
      </center>
    </Wrapper>
  )
}

export { Notifies }
