import React from 'react'
import { Wrapper, MenuLink, PanelHeader, PanelTitle, PanelHeaderButtonLeft, PanelHeaderButtonLeftIcon, TicketHeaderBlock, TicketHeaderTitle, TicketHeaderStatus, TicketHeaderButton, TicketHeaderButtonIcon, TicketDialogue, TicketUserMessage, TicketAgentMessage, TicketWriteAnswer, TicketWriteAnswerForm, TicketWriteAnswerIcons, TicketWriteAnswerIcon } from './styled'
import { Header } from 'features/common/organisms/header'

function TicketsExplore () {
  return (
    <Wrapper>
      <PanelHeader>
        <center><PanelTitle>Вопрос</PanelTitle></center>
        <PanelHeaderButtonLeft href="https://vk.com/aydashkin"><PanelHeaderButtonLeftIcon src="/src/data/images/icons/other/backbutton.svg" /></PanelHeaderButtonLeft>
      </PanelHeader>

      <TicketHeaderBlock>
        <TicketHeaderTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TicketHeaderTitle>
        <TicketHeaderStatus>Есть ответ</TicketHeaderStatus>
        <TicketHeaderButton href="https://vk.com/aydashkin"><TicketHeaderButtonIcon src="/src/data/images/icons/other/more.svg" /></TicketHeaderButton>
      </TicketHeaderBlock>

      <TicketDialogue>
        <TicketUserMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketUserMessage>

        <TicketAgentMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketAgentMessage>

        <TicketUserMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketUserMessage>

        <TicketUserMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketUserMessage>

        <TicketAgentMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketAgentMessage>

        <TicketAgentMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketAgentMessage>

        <TicketUserMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketUserMessage>

        <TicketAgentMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketAgentMessage>

        <TicketAgentMessage>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TicketAgentMessage>

      </TicketDialogue>

      <TicketWriteAnswer>
        <TicketWriteAnswerForm placeholder="Написать..."></TicketWriteAnswerForm>

        <TicketWriteAnswerIcons>
          <TicketWriteAnswerIcon src="/src/data/images/icons/other/smile.svg" />
          <TicketWriteAnswerIcon src="/src/data/images/icons/other/send.svg" />
        </TicketWriteAnswerIcons>
      </TicketWriteAnswer>

    </Wrapper>
  )
}

export { TicketsExplore }
