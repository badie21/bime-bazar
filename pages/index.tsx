import Layout from '@/layout';
import { ReactElement } from 'react';

function Home() {
  return <>hello</>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='تکمیل اطلاعات'>{page}</Layout>;
};

export default Home;
