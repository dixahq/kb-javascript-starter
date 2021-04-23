import React from "react";
import cx from "classnames";
import { Trans } from "@elevio/kb-kit/lib/components/trans";
import { useSearchResults } from "@elevio/kb-kit/lib/hooks";

function SearchMore({ className, ...props }) {
  const { isFetching, loadMore, hasMore } = useSearchResults();
  if (!hasMore) return null;
  return (
    <button
      className={cx("show-more", className)}
      disabled={isFetching || !hasMore}
      onClick={loadMore}
      {...props}
    >
      <Trans i18nKey="search.loadmore">Load more</Trans>
      {isFetching && "..."}
    </button>
  );
}

export default SearchMore;
