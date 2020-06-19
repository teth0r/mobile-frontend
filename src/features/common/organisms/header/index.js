import React from 'react'
import { Wrapper, Icon } from './styled'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

function Header () {
  return (
        <Wrapper>
          <Icon src="/src/data/images/icons/menu_tickets.svg" />
          <Link to="/profile">lol</Link>
        </Wrapper>
  )
}

export default Header;
