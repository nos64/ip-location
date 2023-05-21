import { useEffect } from 'react';

import { getMapInfo } from '../../store/mapInfoSlice';
import { useAppDispatch } from '../../hooks/hooks';

import Header from '../Header';
import MapBlock from '../MapBlock';

import './App.scss';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(getMapInfo('8.8.8.8'));
  }, [dispatch]);

  return (
    <>
      <Header />
      <MapBlock />
    </>
  );
};

export default App;
