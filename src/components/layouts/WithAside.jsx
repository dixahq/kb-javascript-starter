import React from 'react';
import cx from 'classnames';
function WithAside({ children, className }) {
  return <section className="with-aside">{children}</section>;
}
export default WithAside;
export function Aside({ children, className, ...props }) {
  return (
    <aside className={cx('aside', className)} {...props}>
      {children}
    </aside>
  );
}
function MainContentCard({ children, className, ...props }) {
  return (
    <div className={cx('main-content-card', className)} {...props}>
      {children}
    </div>
  );
}
export function Main({ children, className, ...props }) {
  return (
    <main className={cx('main', className)} {...props}>
      <MainContentCard>{children}</MainContentCard>
    </main>
  );
}
export function MainHeader({ children, className, ...props }) {
  return (
    <div className={cx('main-header', className)} {...props}>
      {children}
    </div>
  );
}
export function MainBody({ children, className, ...props }) {
  return (
    <div className={cx('main-body', className)} {...props}>
      {children}
    </div>
  );
}
export function MainFooter({ children, className, ...props }) {
  return (
    <div className={cx('main-footer', className)} {...props}>
      {children}
    </div>
  );
}
