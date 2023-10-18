import { store } from '@/store/store';
import { Provider } from 'react-redux';

import { AppPropsWithLayout } from '@/interfaces';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}
