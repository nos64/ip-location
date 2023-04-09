import { useEffect, useState } from 'react';

import { getAddress } from '../../services/index';

import Header from '../Header';
import Map from '../Map';

import './App.scss';

const App = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    (async () => {
      const data = await getAddress('102.22.22.1');
      setInfo(data);
    })();
    console.log(info);
  }, []);

  return (
    <>
      <Header />
      <Map />
    </>
  );
};

export default App;
