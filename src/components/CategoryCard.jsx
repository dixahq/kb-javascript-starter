import React from 'react';
import cx from 'classnames';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import useArticles from '@elevio/kb-kit/lib/hooks/useArticles';
import useCategory from '@elevio/kb-kit/lib/hooks/useCategory';
import * as Category from '@elevio/kb-kit/lib/components/category';
import * as Meta from '@elevio/kb-kit/lib/components/meta';
function CategoryCard({ categoryId, className }) {
  const category = useCategory(categoryId);
  const { totalCount } = useArticles(categoryId);
  if (!category) return null;
  const subCategoriesCount = (category.subCategories || []).length;
  return (
    <Category.Link
      className={cx('card', className)}
      data-testid="category-link"
    >
      <svg className="card-icon" width="24" height="24" viewBox="0 0 24 24">
        <path d="M4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V19C3 19.2652 3.10536 19.5196 3.29289 19.7071C3.48043 19.8946 3.73478 20 4 20H20C20.2652 20 20.5196 19.8946 20.7071 19.7071C20.8946 19.5196 21 19.2652 21 19V8C21 7.73478 20.8946 7.48043 20.7071 7.29289C20.5196 7.10536 20.2652 7 20 7H11C10.6656 7 10.3534 6.8329 10.1679 6.5547L8.46482 4H4ZM1.87868 2.87868C2.44129 2.31607 3.20435 2 4 2H9C9.33435 2 9.64658 2.1671 9.83205 2.4453L11.5352 5H20C20.7957 5 21.5587 5.31607 22.1213 5.87868C22.6839 6.44129 23 7.20435 23 8V19C23 19.7957 22.6839 20.5587 22.1213 21.1213C21.5587 21.6839 20.7957 22 20 22H4C3.20435 22 2.44129 21.6839 1.87868 21.1213C1.31607 20.5587 1 19.7957 1 19V5C1 4.20435 1.31607 3.44129 1.87868 2.87868Z" />
      </svg>
      <h2 className="card-title">{category.title}</h2>
      <div className="card-divider" />
      <p className="card-info">
        <Meta.If test={subCategoriesCount > 0}>
          <Trans
            i18nKey="categorycard.categoriesCount"
            count={subCategoriesCount}
          >
            {{ count: subCategoriesCount }} Categories
          </Trans>
        </Meta.If>
        <Meta.If
          test={subCategoriesCount > 0 && !!totalCount && totalCount > 0}
        >
          {' '}
          &amp;{' '}
        </Meta.If>
        <Meta.If test={!!totalCount && totalCount > 0}>
          <Trans i18nKey="categorycard.articlesCount" count={totalCount || 0}>
            {{ count: totalCount }} Articles
          </Trans>
        </Meta.If>
      </p>
    </Category.Link>
  );
}
export default CategoryCard;
