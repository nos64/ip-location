import React from 'react';
import styles from './InfoBlock.module.scss';

interface InfoBlockProps {
  subtitle: string;
  title?: string;
  isTimezone?: boolean;
}

const InfoBlock: React.FC<InfoBlockProps> = (props) => {
  return (
    <li className={styles['info__block']}>
      <div className={styles['info__block-subtitle']}>{props.subtitle}</div>
      {props.isTimezone ? (
        <div className={styles['info__block-title']}>
          UTC <span>{props.title}</span>
        </div>
      ) : (
        <div className={styles['info__block-title']}>{props.title}</div>
      )}
    </li>
  );
};

export default InfoBlock;
