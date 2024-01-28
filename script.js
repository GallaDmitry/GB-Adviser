const menuItems = {
  main: {
    items: [
      {
        label: 'Главная',
        icon: 'home',
        link: '/',
      },
      {
        label: 'Запросы',
        icon: 'menu_dot',
        link: '/requests',
        count: 16,
      },
      {
        label: 'Заметки',
        icon: 'label',
        link: '/notes',
      },
      {
        label: 'Категории',
        icon: 'files',
        link: '/categories',
      },
      {
        label: 'Пользователи',
        icon: 'group',
        link: '/users',
      },
      {
        label: 'Статистика',
        icon: 'stats',
        link: '/statistics',
      },
      {
        label: 'Избранное',
        icon: 'star',
        link: '/favourites',
      },
      {
        label: 'Поддержка',
        icon: 'chat',
        link: '/support',
      }
    ],
  },
  info: {
    label: 'Информация',
    items: [
      {
        label: 'База знаний',
        icon: 'question',
        link: '/education',
      },
      {
        label: 'Обновления',
        icon: 'updates',
        link: '/updates',
      },
    ]
  },
  settings: {
    label: 'Настройки',
    items: [
      {
        label: 'Профиль',
        icon: 'profile',
        link: '/',
      },
      {
        label: 'Общие настройки',
        icon: 'settings',
        link: '/settings',
      },
    ]
  }
};

document.addEventListener('DOMContentLoaded', function () {
  renderSideMenuItems();
})

function renderSideMenuItems() {
  const sideMenu = document.querySelector('.side-menu');
  Object.entries(menuItems).forEach(([key, value], i) => {
    const menuSection = document.createElement('div');
    menuSection.classList.add('menu-section');
    let menuSectionLabel = null;
    if (value.label) {
      menuSectionLabel = document.createElement('div');
      menuSectionLabel.classList.add('menu-section-label');
      menuSectionLabel.innerText = value.label;
      menuSection.appendChild(menuSectionLabel);
    }
    let menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    value.items.forEach(item => {
      let menuListItem = document.createElement('li');
      menuListItem.classList.add('menu-list-item');
      menuListItem.innerHTML = `<a href="/${item.link}">
                                    <div class="menu-list-item-icon">
                                        <img src="/src/img/icons/${item.icon}.svg" alt="">
                                    </div>
                                    <div class="menu-list-item-label">${item.label}</div>
                                    ${item.count ? `<div class="menu-list-item-badge">${item.count}</div>` : ''}
                                </a>`;
      menuList.appendChild(menuListItem);
    })
    menuSection.appendChild(menuList);
    sideMenu.appendChild(menuSection);
  })
}