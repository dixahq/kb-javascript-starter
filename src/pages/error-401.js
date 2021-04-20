import * as React from 'react';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import * as Auth from '@elevio/kb-kit/lib/components/auth';
import PageLayout from '../components/layouts/Page';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorPage from '../components/ErrorPage';

function Page() {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <ErrorPage title="Login Required">
        <p className="error-message">
          <Trans i18nKey="error.auth">
            The article you have requested is restricted to logged in users. If you have an account,{' '}
            <Auth.LoginLink>login here</Auth.LoginLink>.
          </Trans>
        </p>
      </ErrorPage>
    </PageLayout>
  );
}

export default Page;
