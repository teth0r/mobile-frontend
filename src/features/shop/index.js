import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, Page, ShopMainCard, ShopMainCardIcon, ShopMainCardText, ShopMainCardTitle, ShopMainCardDescription, ShopProductsList, ShopMainCardButtons, ShopMainCardHistoryButton, ShopMainCardDepositButton, ShopProductCard, ShopProductCardFundsIcon, ShopProductCardCost, ShopProductCardTitle, ShopProductCardDescription, ShopProductCardBuyButton, ShopMainCardBalance, ShopMainCardBalanceCount } from './styled'
import { Header } from 'features/common/organisms/header'

function Shop () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Магазин</PanelTitle></center>
      </PanelHeader>
        <ShopMainCard>
            <ShopMainCardIcon src="/src/data/images/icons/shop/shop_illustration.svg" />
            <ShopMainCardText>
              <ShopMainCardTitle>Магазин</ShopMainCardTitle>
              <ShopMainCardDescription>В этом разделе Вы можете потратить заработанные APoints.</ShopMainCardDescription>
              <ShopMainCardBalance>Баланс:&nbsp;<ShopMainCardBalanceCount>12 баллов</ShopMainCardBalanceCount></ShopMainCardBalance>
              <ShopMainCardButtons>
                  <ShopMainCardHistoryButton>История баланса</ShopMainCardHistoryButton>
                  <ShopMainCardDepositButton>Пополнить</ShopMainCardDepositButton>
              </ShopMainCardButtons>
            </ShopMainCardText>
        </ShopMainCard>

        <ShopProductsList>
            <ShopProductCard>
              <ShopProductCardFundsIcon src="/src/data/images/icons/shop/shop_funds.svg" />
              <ShopProductCardCost>20 баллов</ShopProductCardCost>
              <ShopProductCardTitle>Изменить номер агента</ShopProductCardTitle>
              <ShopProductCardDescription>После покупки этого товара, Ваш номер будет изменён на новый. Вы можете поменять его в другой раз снова.</ShopProductCardDescription>

              <center><ShopProductCardBuyButton>Купить</ShopProductCardBuyButton></center>
            </ShopProductCard>

            <br/>

            <ShopProductCard>
              <ShopProductCardFundsIcon src="/src/data/images/icons/shop/shop_funds.svg" />
              <ShopProductCardCost>20 баллов</ShopProductCardCost>
              <ShopProductCardTitle>Изменить номер агента</ShopProductCardTitle>
              <ShopProductCardDescription>После покупки этого товара, Ваш номер будет изменён на новый. Вы можете поменять его в другой раз снова.</ShopProductCardDescription>

              <center><ShopProductCardBuyButton>Купить</ShopProductCardBuyButton></center>
            </ShopProductCard>
        </ShopProductsList>
      </Wrapper>
  )
}

export { Shop }
