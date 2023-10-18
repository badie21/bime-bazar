import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/store/store';

import styles from './completion-success.module.scss';

const CompeletionSuccess = () => {
  const { push } = useRouter();

  const { order } = useAppSelector((state) => state.orders);

  useEffect(() => {
    if (!order) {
      push('/');
      return;
    }
  }, [order]);

  return (
    <div className={styles['success-page']}>
      <span>اطلاعات شما با موفقیت ثبت شد.</span>
      <button onClick={() => push('/')}>بازگشت</button>
    </div>
  );
};

export default CompeletionSuccess;
