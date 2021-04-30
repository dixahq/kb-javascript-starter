import React from 'react';
import cx from 'classnames';
import { useTranslation } from '@elevio/kb-kit/lib/hooks';

function ErrorPage({ children, title, className }) {
  const { t } = useTranslation();
  const defaultTitle = t('error.defaultTitle');
  return (
    <section className={cx('error', className)}>
      <h1 className="error-title">{title || defaultTitle}</h1>
      {children}
    </section>
  );
}

export default ErrorPage;
