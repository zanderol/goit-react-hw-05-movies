// import { Box, Nav, NavItem } from './AppBar.styled';
import css from './AppBar.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <div className={css.box}>
      <div className={css.nav}>
        {navItems.map(({ href, text }) => (
          <div className={css.nav__item} to={href} key={href}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
