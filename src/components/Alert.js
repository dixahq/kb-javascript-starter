import React from 'react';
import cx from 'classnames';
import { useNotifications } from '@elevio/kb-kit/lib/hooks';
function Alert({ className }) {
  const { notification, clearNotification } = useNotifications();
  if (!notification) return null;
  const colourClass = getNotificationColour(notification.type);
  return (
    <div role="alert" className={cx('alert', className, colourClass)}>
      <div className="alert-message" data-testid="alert-message">
        {notification.message}
      </div>
      <button className="alert-close" onClick={clearNotification}>
        <svg width="24" height="24" viewBox="0 0 24 24" className="alert-icon">
          <path d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z" />
        </svg>
      </button>
    </div>
  );
}
export default Alert;
const getNotificationColour = (type) => {
  switch (type) {
    case 'success':
      return 'alert-success';
    case 'error':
    default:
      return 'alert-danger';
  }
};
