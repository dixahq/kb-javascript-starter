import React from 'react';
import cx from 'classnames';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import { formatDistance } from 'date-fns'; // import Avatar from "@elevio/styles/lib/components/Avatar";

import useArticle from '@elevio/kb-kit/lib/hooks/useArticle';
import AccessBanner from './AccessBanner';

function ArticleMeta({ className }) {
  const article = useArticle();
  if (!article) return null;
  const relativeUpdated = formatDistance(article.lastUpdatedAt, Date.now());
  return (
    <>
      <div className={cx('article-meta', className)}>
        <div className="article-meta-item">
          <svg
            className="article-meta-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19.2071 3.20709C19.4174 2.9968 19.7026 2.87866 20 2.87866C20.2974 2.87866 20.5826 2.9968 20.7929 3.20709C21.0032 3.41738 21.1213 3.70259 21.1213 3.99998C21.1213 4.29737 21.0032 4.58259 20.7929 4.79288L11.4887 14.097L9.37437 14.6256L9.90296 12.5112L19.2071 3.20709ZM20 0.878662C19.1722 0.878662 18.3783 1.20751 17.7929 1.79288L8.29289 11.2929C8.16473 11.421 8.07381 11.5816 8.02986 11.7574L7.02986 15.7574C6.94466 16.0982 7.04451 16.4587 7.29289 16.7071C7.54127 16.9555 7.90176 17.0553 8.24253 16.9701L12.2425 15.9701C12.4184 15.9262 12.5789 15.8352 12.7071 15.7071L22.2071 6.20709C22.7925 5.62173 23.1213 4.82781 23.1213 3.99998C23.1213 3.17216 22.7925 2.37824 22.2071 1.79288C21.6217 1.20751 20.8278 0.878662 20 0.878662ZM4 2.99997C3.20435 2.99997 2.44129 3.31604 1.87868 3.87865C1.31607 4.44126 1 5.20432 1 5.99997V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H18C18.7957 23 19.5587 22.6839 20.1213 22.1213C20.6839 21.5587 21 20.7956 21 20V13C21 12.4477 20.5523 12 20 12C19.4477 12 19 12.4477 19 13V20C19 20.2652 18.8946 20.5195 18.7071 20.7071C18.5196 20.8946 18.2652 21 18 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5195 3 20.2652 3 20V5.99997C3 5.73475 3.10536 5.4804 3.29289 5.29286C3.48043 5.10533 3.73478 4.99997 4 4.99997H11C11.5523 4.99997 12 4.55225 12 3.99997C12 3.44768 11.5523 2.99997 11 2.99997H4Z" />
          </svg>
          <div className="article-meta-label">
            <Trans i18nKey="article.writtenBy">
              Written By{' '}
              {{
                name: article.author.name,
              }}
            </Trans>
          </div>
        </div>
        <div className="article-meta-item">
          <svg
            className="article-meta-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.3788 11.214 12.725 11.5528 12.8944L15.5528 14.8944C16.0468 15.1414 16.6474 14.9412 16.8944 14.4472C17.1414 13.9532 16.9412 13.3526 16.4472 13.1056L13 11.382V6Z" />
          </svg>
          <div className="article-meta-label">
            <Trans i18nKey="article.lastUpdated">
              Last updated {relativeUpdated} ago
            </Trans>
          </div>
        </div>
      </div>
      <AccessBanner />
    </>
  );
}

export default ArticleMeta;
