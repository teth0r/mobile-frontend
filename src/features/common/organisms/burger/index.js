import React from 'react'
import { Wrapper, Icon } from './styled'
import './burger.css';

function Header () {
  return (
    <Wrapper>
    <div class="wr">
            <input type="checkbox" id="check-menu" />
            <label for="check-menu">название раздела</label>
            <div class="burger-line first"></div>
            <div class="burger-line second"></div>
            <div class="burger-line third"></div>
            <div class="burger-line fourth"></div>
            <nav class="main-menu">
                <a href="#">вопросы</a>
                <a href="#">ку</a>
                <a href="#">йцуйцуйу</a>
                <a href="#">м</a>
                <a href="#">0nime</a>
            </nav>
        </div>
      </Wrapper>
    )
}

export { Header };
