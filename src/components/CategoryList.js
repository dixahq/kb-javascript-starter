import React from 'react';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import useSubCategories from '@elevio/kb-kit/lib/hooks/useSubCategories';
import * as Category from '@elevio/kb-kit/lib/components/category';

function CategoryList({ className }) {
  const subCategories = useSubCategories();
  if (!subCategories || subCategories.length === 0) return null;
  return (
    <div className={className}>
      <h3>
        <Trans i18nKey="category.listTitle">Categories</Trans>
      </h3>
      <ul className="category-list">
        <Category.LoopSubCategories>
          <li className="category-list-item">
            <Category.Link className="category-list-link">
              <Category.Title />
            </Category.Link>
          </li>
        </Category.LoopSubCategories>
      </ul>
    </div>
  );
}

export default CategoryList;
