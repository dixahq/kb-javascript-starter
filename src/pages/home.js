import * as React from "react";
import { Trans } from "@elevio/kb-kit/lib/components/trans";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";

import * as Search from "@elevio/kb-kit/lib/components/search";
import * as Categories from "@elevio/kb-kit/lib/components/categories";
import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MainSection,
  GridContainer,
  GridItem,
} from "../components/layouts/Main";
import CategoryCard from "../components/CategoryCard";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <PageLayout
      header={
        <Header hideSearch>
          <h1>
            <Trans i18nKey="home.welcome">
              Welcome to the elevio help center. <br />
              Here you will find documentation on how to use our product.
            </Trans>
          </h1>
          <Search.Input
            placeholder={t("search.placeholder", "Search our help centre...")}
            data-testid="search-input"
            className="hero-search"
          />
        </Header>
      }
      footer={<Footer />}
    >
      <MainSection>
        <GridContainer>
          <Categories.Loop>
            <GridItem>
              <CategoryCard data-testid="category-card" />
            </GridItem>
          </Categories.Loop>
        </GridContainer>
      </MainSection>
    </PageLayout>
  );
};

export default HomePage;
