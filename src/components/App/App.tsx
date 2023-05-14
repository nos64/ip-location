import { useEffect } from 'react';

import { getMapInfo } from '../../store/mapInfoSlice';
import { useAppDispatch } from '../../hooks/hooks';

import Header from '../Header';
import Map from '../Map';

import './App.scss';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMapInfo('8.8.8.8'));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default App;
