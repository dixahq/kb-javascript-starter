import React from 'react';
import cx from 'classnames';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import LoginLogout from './LoginLogout';

function Footer({ className }) {
  return (
    <footer className={cx('footer', className)} data-testid="footer">
      <div className="footer-wrapper">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Elevio Pty Ltd
        </p>
        <nav className="footer-nav">
          <a className="footer-link" href="#">
            <Trans i18nKey="external-link">Our Site</Trans>
          </a>
          <LoginLogout className="footer-link" />
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
