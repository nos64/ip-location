import React from 'react';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  return (
    <div className={styles['search-bar']}>
      <input
        className={styles['search-bar__input']}
        type='text'
        placeholder='Search for any IP address or domain'
      />
      <button className={styles['search-bar__btn']}></button>
    </div>
  );
};

export default SearchBar;
