import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, Separator, Separator2, SettingsSectionTitle, SettingsTitleAndSwitch, SettingsItemTitle, SettingsSwitch /* , SettingsSwitchCircle, SettingsSwitchEllipse*/ } from './styled'
import { Header } from 'features/common/organisms/header'

function Settings () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Настройки</PanelTitle></center>
      </PanelHeader>

      <Separator />
      <SettingsSectionTitle>уведомления</SettingsSectionTitle>
        <SettingsItemTitle>Новые вопросы</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />

        <SettingsItemTitle>Изменение оценки</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />

        <SettingsItemTitle>Уведомления в личных сообщениях</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />

        <SettingsItemTitle>Текст</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />
      <Separator2 />
      <SettingsSectionTitle>текст</SettingsSectionTitle>
        <SettingsItemTitle>Текст</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />

        <SettingsItemTitle>Текст</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />

        <SettingsItemTitle>Текст</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />

        <SettingsItemTitle>Текст</SettingsItemTitle>
        <SettingsSwitch src="/src/data/images/icons/settings/switch_active.svg" />
    </Wrapper>
  )
}

export { Settings }
