import React from 'react'
import { Wrapper, MenuLink, BanIcon, Separator1, Separator2, BanTitle, BanDescription, BanInfo, BanDescBlock, BanDescIcon, BanDescTitle, BanDescReasonText, BanTimeBlock, BanTimeIcon, BanTimeTitle, BanTimeText } from './styled'

function BanScreen () {
  return (
    <Wrapper>
        <center>
          <BanIcon src="/src/data/images/icons/banned/lock.svg" />
          <Separator1 />
          <BanTitle>Аккаунт заблокирован</BanTitle>
          <BanDescription>Ваша учётная запись была заблокирована за нарушение правил использования приложения.</BanDescription>
          <Separator2 />
          </center>
          <BanDescBlock>
            <BanDescIcon src="/src/data/images/icons/banned/ban_reason.svg" />
            <BanDescTitle>Причина блокировки</BanDescTitle>
            <BanDescReasonText>Неадекватные ответы, см правила :DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD</BanDescReasonText>
          </BanDescBlock>

          <BanTimeBlock>
            <BanTimeIcon src="/src/data/images/icons/banned/ban_date.svg" />
            <BanTimeTitle>Дата окончания блокировки</BanTimeTitle>
            <BanTimeText>Лол, никогда</BanTimeText>
          </BanTimeBlock>
    </Wrapper>

  )
}

export { BanScreen }
