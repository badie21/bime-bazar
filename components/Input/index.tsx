import { HTMLProps, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './input.module.scss';

const Input = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & { error?: string }
>(function Input({ name, label, error, ...restProps }, ref) {
  return (
    <div
      className={classNames(styles['input'], error && styles['input--error'])}
    >
      <input {...restProps} name={name} ref={ref} />
      {error && <span>{error}</span>}
    </div>
  );
});

export default Input;
