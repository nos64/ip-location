import React, { useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useAppSelector } from '../../hooks/hooks';
import styles from './MapBlock.module.scss';
import { API_YA_KEY } from '../../common/constants';

const MapBlock = () => {
  const info = useAppSelector((state) => state.mapInfo.info);
  const [coordinates, setCoordinates] = useState([0, 0]);

  useEffect(() => {
    if (info) {
      setCoordinates([info.location.lat, info.location.lng]);
    }
  }, []);

  useEffect(() => {
    if (info) {
      setCoordinates([info.location.lat, info.location.lng]);
    }
  }, [info]);

  return (
    <main>
      <YMaps
        query={{
          load: 'package.full',
          apikey: API_YA_KEY,
        }}
      >
        <Map
          state={{
            center: coordinates,
            zoom: 9,
            controls: ['zoomControl'],
          }}
          className={styles.map}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark geometry={coordinates} />
        </Map>
      </YMaps>
    </main>
  );
};

export default MapBlock;
