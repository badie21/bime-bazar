import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useForm, SubmitHandler } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/store/store';
import { setOrder } from '@/slices/orders';

import { useCreateOrderMutation } from '@/services/bime';

import { ToastContainer, toast } from 'react-toastify';

import { TAddress } from '@/services/interface';

import Input from '@/components/Input';
import AddressPicker from '@/components/address-picker';

import styles from './data-compeletion-form.module.scss';

interface Inputs {
  phoneNumber: string;
  nationalId: string;
}

const CompeleteDataForm = () => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const { order } = useAppSelector((state) => state.orders);

  const [createOrder] = useCreateOrderMutation();

  const [selectedAddress, setSelectedAddress] = useState<TAddress | null>(null);

  const selectAddressHandler = (address: TAddress) => {
    setSelectedAddress(address);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!selectedAddress) {
      toast('لطفا آدرس را انتخاب کنید', {
        type: 'error',
      });
      return;
    }

    const order = {
      addressId: selectedAddress.id,
      nationalId: data.nationalId,
      phoneNumber: data.phoneNumber,
    };

    createOrder(order)
      .unwrap()
      .then((response) => {
        toast(response.message, {
          type: 'success',
        });
        dispatch(
          setOrder({
            order: {
              address: selectedAddress,
              nationalId: data.nationalId,
              phoneNumber: data.phoneNumber,
            },
          })
        );
        push('/completion-success');
      })
      .catch((err) => {
        console.log(err);

        if (Array.isArray(err.data.errors)) {
          err.data.errors.forEach((error: string) => {
            toast(error, {
              type: 'error',
            });
          });
        }
      });
  };

  useEffect(() => {
    if (!order) return;

    setValue('nationalId', order.nationalId);
    setValue('phoneNumber', order.phoneNumber);
    setSelectedAddress(order.address);
  }, [order]);

  return (
    <div className={styles['data-compeletion']}>
      <ToastContainer position='bottom-center' />
      <span className={styles['data-compeletion__title']}>
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='number'
          placeholder='کد ملی'
          error={errors.nationalId?.message}
          {...register('nationalId', {
            required: {
              value: true,
              message: 'این قسمت نمیتواند خالی باشد.',
            },
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'کد ملی وارد شده معتبر نیست.',
            },
          })}
        />

        <Input
          type='number'
          placeholder='شماره تلفن همراه'
          error={errors.phoneNumber?.message}
          {...register('phoneNumber', {
            required: {
              value: true,
              message: 'این قسمت نمیتواند خالی باشد.',
            },
            pattern: {
              value: /^0?9[0-9]{9}$/,
              message: 'شماره تلفن وارد شده معتبر نیست.',
            },
          })}
        />

        <AddressPicker
          onSelectAddress={selectAddressHandler}
          prevSelectedAddress={selectedAddress}
        />

        <input
          type='submit'
          className={styles['data-compeletion__submit']}
          value='تایید و ادامه'
        />
      </form>
    </div>
  );
};

export default CompeleteDataForm;
