import { ReactElement } from 'react';

import Layout from '@/layout';

import CompeleteDataForm from '@/containers/data-compeletion-form';

function Home() {
  return <CompeleteDataForm />;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='تکمیل اطلاعات'>{page}</Layout>;
};

export default Home;
