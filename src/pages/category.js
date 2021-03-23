import * as React from "react";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";
import * as Category from "@elevio/kb-kit/lib/toolkit/category";
import * as Search from "@elevio/kb-kit/lib/toolkit/search";
import * as Article from "@elevio/kb-kit/lib/toolkit/article";
import * as Articles from "@elevio/kb-kit/lib/toolkit/articles";

import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WithAsideLayout, {
  Aside,
  Main,
  MainHeader,
  MainBody,
} from "../components/layouts/WithAside";

import Breadcrumb from "../components/PageBreadcrumbs";
import CategoryList from "../components/CategoryList";

const Page = () => {
  const { t } = useTranslation();
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <Breadcrumb />
      <WithAsideLayout>
        <Main>
          <MainHeader>
            <h1 className="main-title" data-testid="category-title">
              <Category.Title />
            </h1>
          </MainHeader>

          <MainBody data-testid="category-body">
            <Articles.Loop>
              <Article.Link className="article-link" data-testid="article-link">
                <h3>
                  <Article.Title className="article-title" />
                </h3>
                <Article.Summary className="article-summary" />
              </Article.Link>
            </Articles.Loop>
          </MainBody>
        </Main>

        <Aside>
          <Search.Input
            className="sidebar-search"
            placeholder={t("search.shortplaceholder")}
            data-testid="category-search-input"
          />
          <CategoryList />
        </Aside>
      </WithAsideLayout>
    </PageLayout>
  );
};

export default Page;
