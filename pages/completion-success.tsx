import { ReactElement } from 'react';

import Layout from '@/layout';

import CompeletionSuccess from '@/containers/completion-success';

function Page() {
  return <CompeletionSuccess />;
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title='تکمیل اطلاعات'>{page}</Layout>;
};

export default Page;
