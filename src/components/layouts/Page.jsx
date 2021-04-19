import React from 'react';
import cx from 'classnames';
import Alert from '../Alert';
function PageLayout({ children, className, header, footer }) {
  return (
    <main className={cx('page', className)}>
      {header}
      <Alert />
      <div className="body">
        <div className="body-wrapper">{children}</div>
      </div>
      {footer}
    </main>
  );
}
export default PageLayout;
