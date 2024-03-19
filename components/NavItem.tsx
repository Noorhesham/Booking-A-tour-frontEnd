import React from 'react';

interface NavItemProps {
  link: string;
  text: string;
  icon: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, text, icon }) => (
  <li className="side-nav__item">
    <a href={link} className="side-nav__link">
      <svg className="side-nav__icon">
        <use xlinkHref={`/img/icons.svg#${icon}`} />
      </svg>
      <span>{text}</span>
    </a>
  </li>
);

export default NavItem;
