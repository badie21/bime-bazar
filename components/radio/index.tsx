import { FC } from 'react';

import styles from './radio.module.scss';

interface Props {
  checked: boolean;
}

const Rario: FC<Props> = ({ checked }) => {
  return (
    <div className={styles['radio']}>
      {checked && <div className={styles['radio__inner']} />}
    </div>
  );
};

export default Rario;
