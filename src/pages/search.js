import * as React from "react";
import * as Search from "@elevio/kb-kit/lib/components/search";
import * as SearchResults from "@elevio/kb-kit/lib/components/searchResults";
import { HomeLink } from "@elevio/kb-kit/lib/components/meta";
import useSearchResults from "@elevio/kb-kit/lib/hooks/useSearchResults";
import { Trans } from "@elevio/kb-kit/lib/components/trans";
import useTranslation from "@elevio/kb-kit/lib/hooks/useTranslation";

import PageLayout from "../components/layouts/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { MainCentered } from "../components/layouts/Main";
import SearchResult from "../components/SearchResult";
import SearchMore from "../components/SearchMore";

const Page = () => {
  const { t } = useTranslation();
  const { searchTerm, totalCount } = useSearchResults();
  return (
    <PageLayout
      header={
        <Header hideSearch>
          <SearchResults.IsNotEmpty>
            <p>
              <Trans i18nKey="search.count" count={totalCount || 0}>
                We found {{ count: totalCount }} articles for{" "}
                <strong>"{{ searchTerm }}"</strong>
              </Trans>
            </p>
          </SearchResults.IsNotEmpty>

          <Search.Input
            className="hero-search"
            placeholder={t("search.placeholder", "Search our help centre...")}
          />
        </Header>
      }
      footer={<Footer />}
    >
      <MainCentered>
        <SearchResults.LoopResults>
          <SearchResult />
        </SearchResults.LoopResults>

        <SearchResults.IsEmpty>
          <div className="search-empty">
            <h3 className="search-empty-title">
              <Trans i18nKey="search.noResults">
                Sorry we couldn’t find anything for “
                <SearchResults.SearchTerm />”
              </Trans>
            </h3>
            <p className="search-empty-message">
              <Trans i18nKey="search.tryAgain">
                Try another search or <HomeLink>Browse by category</HomeLink>
              </Trans>
            </p>
          </div>
        </SearchResults.IsEmpty>
        <SearchMore />
      </MainCentered>
    </PageLayout>
  );
};

export default Page;
