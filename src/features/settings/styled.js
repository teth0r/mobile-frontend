import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ifProp } from 'styled-tools'

const Wrapper = styled.header`
    color: rgba(194,222,255,.8);
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: calc(100% - 40px);
    height: 100%;
    z-index: 999;
    background-color: #fff;
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

const Separator = styled.div`
  height: 0.5px;
  margin-top: 66px;

  background: #D7D8D9;
`

const Separator2 = styled.div`
  height: 0.5px;
  margin-top: 26px;

  background: #D7D8D9;
`

const SettingsSectionTitle = styled.div`
  margin-top: 15px;

  color: #818C99;
  font-family: SFRegular;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: bold;
`

const SettingsTitleAndSwitch = styled.div`
  display: flex;
  width: 79%;
`

const SettingsItemTitle = styled.div`
  margin-top: 23px;
  color: #000;
  font-family: SFRegular;
`

const SettingsSwitch = styled.img`
  position: absolute;
  right: 15px;
  margin-top: -25px;
`

/*const SettingsSwitchCircle = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -20px;
  position: absolute;
  bottom: 2px;
  border-radius: 50px;
  box-shadow: 0px .5px .5px rgba(0, 0, 0, 0.237602), 0px 0px .5px rgba(0, 0, 0, 0.12);
`

const SettingsSwitchEllipse = styled.img`
  width: 34px;
  height: 14px;
`*/

export { Wrapper, MenuLink, PanelHeader, PanelTitle, Separator, Separator2, SettingsSectionTitle, SettingsTitleAndSwitch, SettingsItemTitle, SettingsSwitch/*, SettingsSwitchCircle, SettingsSwitchEllipse*/};
