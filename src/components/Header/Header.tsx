import React from 'react';
import styles from './Header.module.scss';
import SearchBar from '../SearchBar';
import Info from '../Info';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>IP Address Tracker</h1>
      <SearchBar />
      <Info />
    </header>
  );
};

export default Header;
