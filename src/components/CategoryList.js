import React from 'react';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import { useCategories } from '@elevio/kb-kit/lib/hooks';
import * as Category from '@elevio/kb-kit/lib/components/category';
import * as Categories from '@elevio/kb-kit/lib/components/categories';
function CategoryList({ className }) {
  const { totalCount } = useCategories();
  if (totalCount === 0) return null;
  return (
    <div className={className}>
      <h3>
        <Trans i18nKey="category.listTitle">Categories</Trans>
      </h3>
      <ul className="category-list">
        <Categories.Loop>
          <li className="category-list-item">
            <Category.Link className="category-list-link">
              <Category.Title />
            </Category.Link>
          </li>
        </Categories.Loop>
      </ul>
    </div>
  );
}
export default CategoryList;
