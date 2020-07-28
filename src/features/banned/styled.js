import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ifProp } from 'styled-tools'

const Wrapper = styled.header`
    color: rgba(194,222,255,.8);
    background-color: #6B9BD2;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: calc(100% - 40px);
    height: 100%;
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

const BanIcon = styled.img`
  width: 35.71px;
  height: 42.86px;
  margin-top: 88.57px;
`

const Separator1 = styled.div`
  width: 150px;
  height: 0px;
  margin-top: 68.57px;

  border: 1px solid rgba(255, 255, 255, 0.3);
`

const Separator2 = styled.div`
  width: 150px;
  height: 0px;
  margin-top: 15px;

  border: 1px solid rgba(255, 255, 255, 0.3);
`

const BanTitle = styled.div`
  margin-top: 15px;

  @font-face {
    font-family: "SFRegular";
    src: url("/src/data/fonts/sf_regular.ttf");
  }

  @font-face {
    font-family: "SFMedium";
    src: url("/src/data/fonts/sf_medium.ttf");
  }

  color: #fff;
  font-family: SFMedium;
`

const BanDescription = styled.div`
  width: 255px;
  margin-top: 10px;

  color: #fff;
  font-size: 16px;
  font-family: SFRegular;
`

const BanInfo = styled.div`
  margin-top: -20px;
`

const BanDescBlock = styled.div`
  margin-top: 30px;
`

const BanDescIcon = styled.img`
  width: 15px;
  height: 11.5px;
  margin-top: 40px;

  position: absolute;
  left: 37px;
`

const BanDescTitle = styled.div`
  margin-top: 20px;
  position: absolute;
  left: 75px;

  color: #fff;
  font-size: 16px;
  font-family: SFMedium;
`

const BanDescReasonText = styled.span`
  position: absolute;
  margin-top: 40px;
  left: 75px;
  max-width: 75%;
  word-wrap: break-word;
  color: rgba(255, 255, 255, 0.5);
`

const BanTimeBlock = styled.div`
  margin-top: 135px;
`

const BanTimeIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-top: 40px;
  margin-left: 15px;
`

const BanTimeTitle = styled.div`
  margin-top: -35px;
  position: absolute;
  left: 75px;

  color: #fff;
  font-size: 16px;
  font-family: SFMedium;
`
const BanTimeText = styled.span`
  position: absolute;
  margin-top: 45px;
  left: 75px;
  max-width: 75%;
  word-wrap: break-word;
  color: rgba(255, 255, 255, 0.5);
`

export { Wrapper, MenuLink, BanIcon, Separator1, Separator2, BanTitle, BanDescription, BanInfo, BanDescBlock, BanDescIcon, BanDescTitle, BanDescReasonText, BanTimeBlock, BanTimeIcon, BanTimeTitle, BanTimeText };
