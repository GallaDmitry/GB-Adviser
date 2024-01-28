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
        content: {
          title: 'Настройки профиля',
          menuItems: [
            {label: 'Настройки профиля', link: 'profile_section'},
            {label: 'Профиль пользователя', link: 'profile_section'},
            {label: 'Изменение общих настроек', link: 'profile_section'},
            {label: 'Дополнительные возможности', link: 'profile_section'},
            {label: 'Отправка запросов', link: 'profile_section'},
            {label: 'Работа со стастистикой', link: 'profile_section'},
          ]
        }
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
  renderContentMenu();
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
      menuListItem.setAttribute('data-value', item.link);
      if (item.link === '/education')
        menuListItem.classList.add('active');
      menuListItem.innerHTML = `<a href="${item.link}">
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

function renderContentMenu() {
  const contentMenu = document.querySelector('.content-menu');
  const activeSection = document.querySelector('.side-menu .menu-list-item.active').getAttribute('data-value');
  const currentContentMenu = Object.entries(menuItems)
    .find(([key, value]) => value.items.find(item => item.link === activeSection))[1].items
    .find(item => item.link === activeSection).content;
  const contentTitle = document.createElement('div');
  contentTitle.classList.add('content-title');
  contentTitle.innerHTML = currentContentMenu.title;
  contentMenu.appendChild(contentTitle);
  let menuList = document.createElement('ul');
  menuList.classList.add('content-menu-list');
  currentContentMenu.menuItems.forEach((item, i) => {
    let menuListItem = document.createElement('li');
    menuListItem.classList.add('content-menu-list-item');
    if (i === 0) menuListItem.classList.add('active');
    menuListItem.innerHTML = `<a href="${item.link}">
                                    <div class="menu-list-item-label">${item.label}</div>
                                </a>`;
    menuList.appendChild(menuListItem);
  })
  contentMenu.appendChild(menuList);
}