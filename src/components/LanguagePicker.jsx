import { useState } from 'react';
function LanguagePicker({
  selectedLanguageId,
  setCurrentLanguageId,
  supportedLanguages,
}) {
  const [open, setOpen] = useState(false);
  const selectedLanguage = supportedLanguages.find((language) => {
    return language.id === selectedLanguageId;
  });
  return (
    <div className="language-picker">
      <div className="language-picker-input" onClick={() => setOpen(!open)}>
        <img
          className="language-picker-image"
          src={selectedLanguage.iconPath}
        />
        <div className="language-picker-name">{selectedLanguage.label}</div>
        <svg
          className="language-picker-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z" />
        </svg>
      </div>
      {open && (
        <>
          <div
            className="language-picker-overlay"
            onClick={() => setOpen(false)}
          />
          <ul className="language-picker-list">
            {supportedLanguages.map(({ iconPath, id, label }, index) => {
              return (
                <li
                  className="language-picker-item"
                  key={index}
                  onClick={() => setCurrentLanguageId(id)}
                >
                  <img className="language-picker-image" src={iconPath} />
                  <div className="language-picker-name">{label}</div>
                  {selectedLanguageId === id && (
                    <svg
                      className="language-picker-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" />
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
export default LanguagePicker;
