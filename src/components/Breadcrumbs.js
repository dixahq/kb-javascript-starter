import React from "react";
import cx from "classnames";

import * as Meta from "@elevio/kb-kit/lib/components/meta";
import * as Category from "@elevio/kb-kit/lib/components/category";
import * as Article from "@elevio/kb-kit/lib/components/article";

const Breadcrumb = ({ className, crumbs, noLinks }) => (
  <div
    className={cx(
      "breadcrumbs",
      className
    )}
  >
    {crumbs.map((crumb, index) => (
      <React.Fragment key={index}>
        <Crumb
          crumb={crumb}
          className="breadcrumbs-link"
          noLinks={noLinks}
        />
        {index < crumbs.length - 1 && (
          <span className="breadcrumbs-divider">/</span>
        )}
      </React.Fragment>
    ))}
  </div>
);

const Crumb = ({ noLinks, crumb, className }) => {
  if (noLinks) {
    return <span className={className}>{crumb.title}</span>;
  }
  if (crumb.linkType === "article") {
    return <Article.Link articleId={crumb.linkId} className={className}>{crumb.title}</Article.Link>;
  }
  if (crumb.linkType === "category") {
    return (
      <Category.Link categoryId={crumb.linkId} className={className}>{crumb.title}</Category.Link>
    );
  }
  return <Meta.HomeLink className={className}>{crumb.title}</Meta.HomeLink>;
};

export default Breadcrumb;
