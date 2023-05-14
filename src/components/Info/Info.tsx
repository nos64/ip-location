import React from 'react';
import styles from './Info.module.scss';
import InfoBlock from '../InfoBlock';
import { useAppSelector } from '../../hooks/hooks';

const Info = () => {
  const info = useAppSelector((state) => state.info.info);

  return (
    <ul className={styles.info}>
      <InfoBlock title={info && info.ip} subtitle='IP Address' />
      <InfoBlock title={info && info.location.city} subtitle='Location' />
      <InfoBlock title={info && info.location.timezone} subtitle='Timezone' isTimezone={true} />
      <InfoBlock title={info && info.isp} subtitle='ISP' />
    </ul>
  );
};

export default Info;
