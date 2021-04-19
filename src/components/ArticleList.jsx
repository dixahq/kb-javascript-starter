import React from 'react';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import useArticles from '@elevio/kb-kit/lib/hooks/useArticles';
import * as Article from '@elevio/kb-kit/lib/components/article';
import * as Articles from '@elevio/kb-kit/lib/components/articles';
function ArticleList({ className }) {
  const { totalCount } = useArticles();
  if (totalCount === 0) return null;
  return (
    <div className={className}>
      <h3>
        <Trans i18nKey="article.relatedTitle">Related Articles</Trans>
      </h3>
      <ul className="article-list">
        <Articles.Loop>
          <>
            <Article.IsActive>
              <li className="article-list-item">
                <strong>
                  <Article.Title />
                </strong>
              </li>
            </Article.IsActive>
            <Article.IsNotActive>
              <li className="article-list-item">
                <Article.Link className="article-list-link">
                  <Article.Title />
                </Article.Link>
              </li>
            </Article.IsNotActive>
          </>
        </Articles.Loop>
      </ul>
    </div>
  );
}
export default ArticleList;
