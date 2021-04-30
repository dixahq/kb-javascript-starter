import * as React from 'react';
import cx from 'classnames';
import { useLoading } from '@elevio/kb-kit/lib/hooks';

const LoadingBar = ({ className, style, ...props }) => {
  const { percent, status } = useLoading();
  const loadingStyle = {
    ...style,
    transform: `translate3d(-${100 - percent}%, 0px, 0px)`,
  };
  return (
    <div
      style={loadingStyle}
      className={cx(className, 'loading-bar', status)}
      {...props}
    />
  );
};

export default LoadingBar;
