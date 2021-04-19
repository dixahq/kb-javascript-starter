import React from "react";
import cx from "classnames";
import Breadcrumb from "./SearchBreadcrumbs";
import * as SearchResults from "@elevio/kb-kit/lib/components/searchResults";

const SearchResult = ({ className, image }) => {
  return (
    <SearchResults.ArticleLink className={cx('article-link', className)}>
      {image && <img src={image} className="article-link-image" />}
      <div>
        <Breadcrumb className="article-link-breadcrumbs" />
        <h3>
          <SearchResults.ArticleTitle className="article-link-title" />
        </h3>
        <SearchResults.Snippet className="article-link-summary" />
      </div>
    </SearchResults.ArticleLink>
  );
};

export default SearchResult;
