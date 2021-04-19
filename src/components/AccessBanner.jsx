import React, { useState } from 'react';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import { AccessLevel } from '@elevio/kb-kit/lib/types';
import useArticle from '@elevio/kb-kit/lib/hooks/useArticle';
function AccessBanner() {
  const article = useArticle();
  const [showing, setShowing] = useState(false);
  if (!article) throw new Error('No article in AccessBanner');
  const { isInternal, smartGroups, access } = article.accessControl;
  if (!isInternal) return null;
  const showRestrictions = smartGroups.length > 0;
  return (
    <div className="access-banner">
      <div className="access-banner-header" data-testid="article-access">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="access-banner-icon"
        >
          <path d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.57986 5.99407C2.81969 7.47682 1.30024 9.40045 0.125843 11.5144C-0.0419476 11.8164 -0.0419476 12.1836 0.125843 12.4856C2.70344 17.1253 7.05274 21 12 21C14.0655 21 16.029 20.3185 17.7901 19.2043L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L18.7162 17.302C18.6605 17.2289 18.5965 17.1656 18.5266 17.1124L14.8284 13.4142L10.5858 9.17159L1.70711 0.292893ZM8.55428 9.96849L5.99999 7.4142C4.53198 8.62057 3.21513 10.2068 2.15278 12.0001C4.58303 16.1049 8.25671 19 12 19C13.4774 19 14.9423 18.5541 16.3342 17.7484L14.0315 15.4457C13.4212 15.8056 12.7206 16 12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 11.2794 8.19444 10.5789 8.55428 9.96849ZM12.5177 13.9319C12.3502 13.9767 12.1763 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0392 10 12.5304 10 12C10 11.8237 10.0233 11.6498 10.0681 11.4824L12.5177 13.9319ZM12 5C11.3732 5 10.7504 5.08002 10.1352 5.23305C9.59921 5.36636 9.05666 5.03995 8.92335 4.504C8.79004 3.96805 9.11645 3.4255 9.65241 3.29219C10.4168 3.10205 11.2017 3 12 3C16.9473 3 21.2966 6.87468 23.8742 11.5144C24.0419 11.8164 24.0419 12.1836 23.8742 12.4856C23.2097 13.6816 22.4367 14.8135 21.5745 15.8382C21.219 16.2608 20.5881 16.3151 20.1655 15.9596C19.7429 15.604 19.6886 14.9732 20.0442 14.5506C20.7031 13.7674 21.3085 12.9092 21.8472 11.9999C19.417 7.89507 15.7433 5 12 5Z" />
        </svg>
        <div className="access-banner-title">
          {access === AccessLevel.Restricted ? (
            <Trans i18nKey="internal.restricted">
              For internal use, with restrictions
            </Trans>
          ) : (
            <Trans i18nKey="internal.unrestricted">For internal use</Trans>
          )}
        </div>
        {showRestrictions && (
          <button
            className="access-banner-toggle"
            onClick={() => setShowing(!showing)}
            type="button"
          >
            {showing ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="access-banner-icon"
              >
                <path d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="access-banner-icon"
              >
                <path d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {showRestrictions && showing && (
        <ul className="access-banner-body">
          {smartGroups.map((s, i) => (
            <li key={i} className="access-banner-group">
              {s.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default AccessBanner;
