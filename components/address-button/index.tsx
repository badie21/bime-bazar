import { FC } from 'react';

import Rario from '../radio';

import { TAddress } from '@/services/interface';

import styles from './address-button.module.scss';

interface Props {
  address: TAddress;
  checked: boolean;
  onCheck: (address: TAddress) => void;
}

const AddressButton: FC<Props> = ({ address, onCheck, checked }) => {
  return (
    <div className={styles['address']} onClick={() => onCheck(address)}>
      <Rario checked={checked} />
      <div className={styles['address__label']}>
        <span className={styles['address__name']}>{address.name}</span>
        <span className={styles['address__details']}>{address.details}</span>
      </div>
    </div>
  );
};

export default AddressButton;
