import React, { useState } from 'react';
import cx from 'classnames';
import { Trans } from '@elevio/kb-kit/lib/components/trans';
import * as Search from '@elevio/kb-kit/lib/components/search';
import { useLanguages } from '@elevio/kb-kit/lib/hooks';
import { Logo } from './Logo';
import LoginLogout from './LoginLogout';
import LanguagePicker from './LanguagePicker';

function Header({ children, className, hideSearch }) {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const { supportedLanguages, selectedLanguage, setCurrentLanguageId } =
    useLanguages();
  return (
    <header className={cx('header', className)} data-testid="header">
      <div className="header-wrapper">
        <nav className="nav" aria-label="navigation">
          <div className="nav-wrapper">
            <div className="nav-details">
              <Logo />
              <div className="nav-title">
                <Trans i18nKey="header.title">Help Centre</Trans>
              </div>
            </div>

            <div className="nav-desktop-menu">
              <a className="nav-desktop-menu-link" href="#">
                <Trans i18nKey="external-link">Our Site</Trans>
              </a>
              <LoginLogout className="nav-desktop-menu-link" />
              {supportedLanguages.length > 1 && (
                <LanguagePicker
                  selectedLanguageId={selectedLanguage.id}
                  setCurrentLanguageId={setCurrentLanguageId}
                  supportedLanguages={supportedLanguages}
                />
              )}
            </div>

            <div className="nav-mobile-menu">
              {!hideSearch && (
                <button
                  className="nav-mobile-search-trigger"
                  onClick={() => setDisplaySearchBar(!displaySearchBar)}
                  title="Search"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M9.16666 3.33341C5.945 3.33341 3.33332 5.94509 3.33332 9.16675C3.33332 12.3884 5.945 15.0001 9.16666 15.0001C10.7777 15.0001 12.2349 14.3481 13.2914 13.2915C14.348 12.235 15 10.7778 15 9.16675C15 5.94509 12.3883 3.33341 9.16666 3.33341ZM1.66666 9.16675C1.66666 5.02461 5.02452 1.66675 9.16666 1.66675C13.3088 1.66675 16.6667 5.02461 16.6667 9.16675C16.6667 10.9373 16.0524 12.5654 15.0265 13.8481L18.0892 16.9108C18.4147 17.2363 18.4147 17.7639 18.0892 18.0893C17.7638 18.4148 17.2362 18.4148 16.9107 18.0893L13.848 15.0266C12.5653 16.0525 10.9372 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3089 1.66666 9.16675Z" />
                  </svg>
                </button>
              )}
              <button
                className="nav-mobile-menu-trigger"
                onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
                title="Menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M1.66669 5.00002C1.66669 4.53978 2.03978 4.16669 2.50002 4.16669H17.5C17.9603 4.16669 18.3334 4.53978 18.3334 5.00002C18.3334 5.46026 17.9603 5.83335 17.5 5.83335H2.50002C2.03978 5.83335 1.66669 5.46026 1.66669 5.00002ZM1.66669 10C1.66669 9.53978 2.03978 9.16669 2.50002 9.16669H17.5C17.9603 9.16669 18.3334 9.53978 18.3334 10C18.3334 10.4603 17.9603 10.8334 17.5 10.8334H2.50002C2.03978 10.8334 1.66669 10.4603 1.66669 10ZM2.50002 14.1667C2.03978 14.1667 1.66669 14.5398 1.66669 15C1.66669 15.4603 2.03978 15.8334 2.50002 15.8334H17.5C17.9603 15.8334 18.3334 15.4603 18.3334 15C18.3334 14.5398 17.9603 14.1667 17.5 14.1667H2.50002Z" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {displayMobileMenu && (
          <div className="mobile-menu">
            <div className="mobile-menu-wrapper">
              <a className="mobile-menu-link" href="#">
                <Trans i18nKey="external-link">Our Site</Trans>
              </a>
              <LoginLogout className="mobile-menu-link" />
              {supportedLanguages.length > 1 && (
                <LanguagePicker
                  selectedLanguageId={selectedLanguage.id}
                  setCurrentLanguageId={setCurrentLanguageId}
                  supportedLanguages={supportedLanguages}
                />
              )}
            </div>
          </div>
        )}

        {displaySearchBar && !hideSearch && (
          <div className="mobile-search">
            <div className="mobile-search-wrapper">
              <Search.Input className="mobile-search-input" />
            </div>
          </div>
        )}

        {children && (
          <div className="hero">
            <div className="hero-wrapper">{children}</div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
