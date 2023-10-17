import { FC, ReactNode } from 'react';

import styles from './layout.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  title?: string;
}
const Layout: FC<Props> = ({ children, title = '' }) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout__header']}>
        <span>{title}</span>
      </div>
      <div className={styles['layout__content']}>{children}</div>
    </div>
  );
};

export default Layout;
    