import React, { useEffect } from 'react';

import { getMapInfo, setIpAddress } from '../../store/mapInfoSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

import { validateIP } from '../../services';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const ipAddress = useAppSelector((state) => state.mapInfo.ipAddress);

  useEffect(() => {
    document.addEventListener('keydown', onPressEnter);
    return () => {
      document.removeEventListener('keydown', onPressEnter);
    };
  }, [ipAddress]);

  const onPressEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      getData();
    }
  };
  const getData = () => {
    if (validateIP(ipAddress)) {
      dispatch(getMapInfo(ipAddress));
    }
  };

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIpAddress(e.target.value));
  };

  return (
    <div className={styles['search-bar']}>
      <input
        className={styles['search-bar__input']}
        type='text'
        placeholder='Search for any IP address or domain'
        value={ipAddress}
        onChange={setInputValue}
      />
      <button className={styles['search-bar__btn']} onClick={getData}></button>
    </div>
  );
};

export default SearchBar;
