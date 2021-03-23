import * as React from "react";
import * as Article from "@elevio/kb-kit/lib/toolkit/article";
import * as Search from "@elevio/kb-kit/lib/toolkit/search";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";

import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";

import WithAsideLayout, {
  Aside,
  Main,
  MainHeader,
  MainBody,
} from "../components/layouts/WithAside";
import CategoryList from "../components/CategoryList";
import ArticleList from "../components/ArticleList";
import Breadcrumb from "../components/PageBreadcrumbs";
import ArticleMeta from "../components/ArticleMeta";
import ArticleIcons from "../components/ArticleIcons";
import ArticleFeedback from "../components/ArticleFeedback";

const Page = () => {
  const { t } = useTranslation();
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <Breadcrumb />
      <WithAsideLayout>
        <Main>
          <MainHeader>
            <ArticleIcons />
            <h1 className="main-title" data-testid="article-title">
              <Article.Title />
            </h1>
            <ArticleMeta />
          </MainHeader>

          <MainBody>
            <Article.Body className="mb-12" />
            <ArticleFeedback className="mb-6" />
          </MainBody>
        </Main>

        <Aside>
          <Search.Input
            className="sidebar-search"
            placeholder={t("search.shortplaceholder", "Search")}
            data-testid="article-search-input"
          />
          <CategoryList />
          <ArticleList />
        </Aside>
      </WithAsideLayout>
    </PageLayout>
  );
};
export default Page;
