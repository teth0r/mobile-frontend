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

const Page = styled.div`
  margin-top: 100px;
  height: 150px;

  overflow: scroll;
  ::-webkit-scrollbar { width: 0px; height: 0px;}
`

const ShopMainCard = styled.div`
  height: 186px;
  margin-top: 100px;

  background: #FFFFFF;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const ShopMainCardIcon = styled.img`
  width: 112px;
  height: 112px;
  margin-left: 4px;
  margin-top: 4px;
`

const ShopMainCardText = styled.div`
  margin-left: 122px;
  margin-top: -100px;
`

const ShopMainCardTitle = styled.div`
  margin-left: calc(50% - 40px);
  color: #000;
  font-family: SFMedium;
  font-size: 16px;

`

const ShopMainCardDescription = styled.div`
  color: #818C99;
  text-align: center;
`

const ShopProductsList = styled.div`
  height: 300px;
  margin-top: 25px;
  overflow: scroll;
  ::-webkit-scrollbar { width: 0px; height: 0px;}
`

const ShopMainCardButtons = styled.div`
`

const ShopMainCardHistoryButton = styled.div`
  width: 150px;
  height: 36px;

  position: absolute;
  bottom: 350px;
  right: 34px;

  color: #3F8AE0;
  font-family: SFRegular;
  line-height: 38px;
  text-align: center;
  background: rgba(0, 28, 61, 0.05);
  border-radius: 8px;
`

const ShopMainCardDepositButton = styled.div`
  width: 134px;
  height: 36px;

  position: absolute;
  bottom: 350px;
  left: 35px;

  color: #3F8AE0;
  font-family: SFRegular;
  line-height: 38px;
  text-align: center;
  background: rgba(0, 28, 61, 0.05);
  border-radius: 8px;
`

const ShopProductCard = styled.div`
  height: 186px;

  background: #FFFFFF;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.03);
  border-radius: 5px;
`

const ShopProductCardFundsIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 21px;
  margin-top: 15px;
`

const ShopProductCardCost = styled.div`
  margin-left: 49px;
  margin-top: -21px;

  color: #818C99;
  font-size: 12px;
  font-family: SFRegular;
`

const ShopProductCardTitle = styled.div`
  margin-top: 7px;
  margin-left: 22px;

  color: #000;
  font-weight: bold;
  font-family: SFMedium;
`

const ShopProductCardDescription = styled.div`
  max-width: 305px;
  margin-left: 25px;
  margin-top: 12.5px;

  color: #818C99;
  font-size: 12px;
`

const ShopProductCardBuyButton = styled.div`
  width: 90%;
  height: 38px;
  margin-top: 17px;

  color: #FFF;
  font-family: SFRegular;
  background: #12C78C;
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
`

const ShopMainCardBalance = styled.div`
  margin-top: 5px;
  position: absolute;
  left: 50%;
  display: flex;

  color: #000000;
  font-family: SFRegular;
`

const ShopMainCardBalanceCount = styled.div`
  color: #818C99;
  font-family: SFRegular;
`

export { Wrapper, MenuLink, PanelHeader, PanelTitle, Page, ShopMainCard, ShopMainCardIcon, ShopMainCardText, ShopMainCardTitle, ShopMainCardDescription, ShopProductsList, ShopMainCardButtons, ShopMainCardHistoryButton, ShopMainCardDepositButton, ShopProductCard, ShopProductCardFundsIcon, ShopProductCardCost, ShopProductCardTitle, ShopProductCardDescription, ShopProductCardBuyButton, ShopMainCardBalance, ShopMainCardBalanceCount };
