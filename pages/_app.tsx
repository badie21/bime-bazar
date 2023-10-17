import { AppPropsWithLayout } from '@/interfaces';

import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
