import * as React from 'react';
import * as Search from '@elevio/kb-kit/lib/components/search';
import * as SearchResults from '@elevio/kb-kit/lib/components/searchResults';
import { getSearchAsYouTypeEnabled } from '@elevio/kb-kit/lib/utils/globals';
import { useSearch } from '@elevio/kb-kit/lib/hooks/useSearch';
import { useSearchResults } from '@elevio/kb-kit/lib/hooks/useSearchResults';
import { useOnClickOutside } from '@elevio/kb-kit/lib/hooks/useOnClickOutside';
import { Trans } from '@elevio/kb-kit/lib/components/trans';

const SearchInput = ({ className, placeholder, ...props }) => {
  const { isOpen } = useSearch();
  const ref = React.useRef(null);
  return (
    <div ref={ref} className="searchRoot">
      <Search.Input
        placeholder={placeholder}
        data-testid={props['data-testid']}
        className={className}
      />
      {isOpen && <SearchDropdown outerRef={ref} />}
    </div>
  );
};

export default SearchInput;

const SearchDropdown = ({ outerRef }) => {
  const { onCloseDropdown, value } = useSearch();
  const { isFetching, searchTerm } = useSearchResults(); // Because a "mobile" search is rendered there could be two search inputs rendered.
  // Make sure that we are shown before triggering the hiding of the results

  const cb = React.useCallback(() => {
    const display = window.getComputedStyle(
      outerRef.current.querySelector('[data-testid="search-input"]')
    ).display;
    if (display === 'none') return;
    onCloseDropdown();
  }, []);
  useOnClickOutside(outerRef, cb);
  if (value.length === 0) return null;

  if (isFetching) {
    return (
      <Dropdown>
        <Loading />
      </Dropdown>
    );
  }

  if (value !== searchTerm) {
    return (
      <Dropdown>
        {getSearchAsYouTypeEnabled() ? (
          <Loading />
        ) : (
          <NoResults>
            <Trans i18nKey="sdk.trigger_search">Hit enter to search for:</Trans>{' '}
            <span>"{value}"</span>
          </NoResults>
        )}
      </Dropdown>
    );
  }

  return (
    <Dropdown>
      <SearchResults.LoopResults>
        <ArticleTitle />
      </SearchResults.LoopResults>
      <SearchResults.IsEmpty>
        <NoResults>
          <Trans i18nKey="sdk.sorry">Sorry.</Trans>{' '}
          <Trans i18nKey="sdk.no_results"> No results.</Trans>{' '}
          <span>"{value}"</span>
        </NoResults>
      </SearchResults.IsEmpty>
    </Dropdown>
  );
};

const Dropdown = ({ children }) => {
  return (
    <div className="dropdown">
      <div className="mainViewContainer" data-testid="dropdown-content">
        {children}
      </div>
    </div>
  );
};

const NoResults = ({ children }) => <div className="noResults">{children}</div>;

const Loading = () => (
  <div className="mainLoadingView">
    <span className="loadingRoot" />
  </div>
);

const ArticleTitle = () => {
  return (
    <SearchResults.ArticleLink
      className="articleTitleRoot"
      data-testid="article-link"
    >
      <span className="title">
        <div>
          <SearchResults.ArticleTitle />
        </div>
      </span>
    </SearchResults.ArticleLink>
  );
};
