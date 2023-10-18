import { FC, useState } from 'react';

import { useGetAllAddressesQuery } from '@/services/bime';

import { TAddress } from '@/services/interface';

import Sheet from 'react-modal-sheet';
import AddressButton from '../address-button';

import styles from './address-picker.module.scss';

interface Props {
  prevSelectedAddress: TAddress | null;
  onSelectAddress: (address: TAddress) => void;
}

const AddressPicker: FC<Props> = ({ prevSelectedAddress, onSelectAddress }) => {
  const { data: addresses } = useGetAllAddressesQuery();

  const [open, setOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<null | TAddress>(null);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const pickAddressHandler = (address: TAddress) => setSelectedAddress(address);

  const submitAddressHandler = () => {
    if (!selectedAddress) {
      setOpen(false);
      return;
    }
    onSelectAddress(selectedAddress);
    setOpen(false);
  };

  return (
    <div className={styles['address-picker']}>
      <span className={styles['address-picker__title']}>
        آدرس جهت درج روی بیمه نامه
      </span>
      <div className={styles['address-picker__address']}>
        {prevSelectedAddress ? (
          <span style={{ fontWeight: 500 }}>{prevSelectedAddress.name}</span>
        ) : (
          <>
            <span>
              لطفا آدرسی که میخواهید روی بیمه‌نامه درج شود، وارد کنید.
            </span>
            <button type='button' onClick={handleOpenModal}>
              انتخاب از آدرس‌های من
            </button>
          </>
        )}
      </div>
      <Sheet
        isOpen={open}
        onClose={handleCloseModal}
        style={{ borderRadius: 'none' }}
        className={styles['modal']}
        snapPoints={[0.78]}
      >
        <Sheet.Container>
          <Sheet.Header className={styles['modal__header']}>
            <span>انتخاب آدرس</span>
            <div onClick={handleCloseModal}>x</div>
          </Sheet.Header>
          <Sheet.Content className={styles['address-picker__addresses']}>
            <div className={styles['address-picker__list']}>
              {addresses &&
                addresses.map((address) => (
                  <AddressButton
                    address={address}
                    checked={selectedAddress?.id === address.id}
                    onCheck={pickAddressHandler}
                  />
                ))}
            </div>

            <div className={styles['address-picker__submit']}>
              <button onClick={submitAddressHandler}>انتخاب</button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default AddressPicker;
