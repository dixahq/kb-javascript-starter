import React from 'react';
import cx from 'classnames';
import Breadcrumb from './SearchBreadcrumbs';
import * as SearchResults from '@elevio/kb-kit/lib/components/searchResults';
function SearchResult({ className, image }) {
  return (
    <SearchResults.ArticleLink className={cx('article-link', className)}>
      {image && <img src={image} className="article-link-image" />}
      <div>
        <Breadcrumb className="article-link-breadcrumbs" />
        <h3 className="article-link-title">
          <SearchResults.ArticleTitle />
        </h3>
        <SearchResults.Snippet className="article-link-summary" />
      </div>
    </SearchResults.ArticleLink>
  );
}
export default SearchResult;
