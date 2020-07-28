import React from 'react'
import { Wrapper, MenuLink } from './styled'
import './burger.css';

function Header () {
  return (
    <nav class="mobile-menu">
    <input type="checkbox" id="checkbox" class="mobile-menu__checkbox" />
    <label for="checkbox" class="mobile-menu__btn"><div class="mobile-menu__icon"></div></label>
    <div class="mobile-menu__container">
      <ul class="mobile-menu__list">
        <li class="mobile-menu__item"><img src="https://sun1-21.userapi.com/impg/Az6-eAQeeFb_rBpvkMmceSs5kiOoDw7sUVw2NQ/RihHHVny8I4.jpg?size=50x0&quality=90&crop=11,0,448,448&sign=f4ac935297342d10fc185ed774ae9249&ava=1" class="avatar" /></li>
        <li><a href="/profile" class="mobile-menu__link name">Разработчик</a></li>
        <li><span href="#" class="undername">Разработчик</span></li>
      </ul>
      <div class="puncts">
        <a class="punct" href="/tickets">
          <img src="/src/data/images/icons/menu/tickets.svg" class="icon" />
          <div class="punctTitle">Вопросы</div>
        </a>
        <a class="punct" href="/statistic">
          <img src="/src/data/images/icons/menu/statistic.svg" class="icon" />
          <div class="punctTitle">Статистика</div>
        </a>
        <a class="punct" href="/shop">
          <img src="/src/data/images/icons/menu/shop.svg" class="icon" />
          <div class="punctTitle">Магазин</div>
        </a>
        <a class="punct" href="/chat">
          <img src="/src/data/images/icons/menu/chat.svg" class="icon" />
          <div class="punctTitle">Чат</div>
        </a>
        <a class="punct" href="/settings">
          <img src="/src/data/images/icons/menu/settings.svg" class="icon" />
          <div class="punctTitle">Настройки</div>
        </a>

        <div class="separator" />

        <a class="punct">
          <img src="/src/data/images/icons/menu/tickets_admin.svg" class="icon" />
          <div class="punctTitle">Список вопросов</div>
        </a>
        <a class="punct">
          <img src="/src/data/images/icons/menu/users.svg" class="icon" />
          <div class="punctTitle">Агенты</div>
        </a>
        <a class="punct">
          <img src="/src/data/images/icons/menu/statistic.svg" class="icon" />
          <div class="punctTitle">Статистика</div>
        </a>
        <a class="punct">
          <img src="/src/data/images/icons/menu/history.svg" class="icon" />
          <div class="punctTitle">История</div>
        </a>
      </div>
    </div>


</nav>
  )
}

export { Header }
