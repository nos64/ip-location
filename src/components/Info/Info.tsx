import React from 'react';
import styles from './Info.module.scss';
import InfoBlock from '../InfoBlock';

const Info = () => {
  return (
    <ul className={styles.info}>
      <InfoBlock subtitle='IP Address' />
      <InfoBlock subtitle='Location' />
      <InfoBlock subtitle='Timezone' isTimezone={true} />
      <InfoBlock subtitle='ISP' />
    </ul>
  );
};

export default Info;
