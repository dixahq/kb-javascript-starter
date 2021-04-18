import * as React from "react";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";
import { Trans } from "@elevio/kb-kit/lib/components/trans";

import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorPage from "../components/ErrorPage";

const Page = () => {
  const { t } = useTranslation();
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <ErrorPage title={t("error.title", "Whoops!")}>
        <p className="error-message">
          <Trans i18nKey="error.problem">
            Sorry, there has been a problem.
          </Trans>
        </p>
      </ErrorPage>
    </PageLayout>
  );
};

export default Page;
