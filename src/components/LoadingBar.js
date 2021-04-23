import * as React from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

import { Helmet } from "@elevio/kb-kit/lib/components/meta";
import { useLoading } from "@elevio/kb-kit/lib/hooks";

const LOADER_STYLES = `
	 .loading-bar {
		 transition: opacity 300ms, transform 200ms linear 0s;
		 width: 100%;
		 will-change: transform, opacity;
		 height: 2px;
		 background-color: blue;
		 box-shadow: rgb(0, 102, 255) 0px 1px 5px 2px;
		 position: fixed;
		 top: 0;
	 }
 
	 .loading-enter {
		 opacity: 0;
	 }
	 .loading-enter-active {
		 opacity: 1;
	 }
	 .loading-exit {
		 opacity: 1;
	 }
	 .loading-exit-active {
		 opacity: 0.5;
	 }
	 .loading-exit-done {
		 opacity: 0;
	 }
 `;

function buildStyle({ percent, styleProp, direction }) {
  const coefficient = direction === "rtl" ? 1 : -1;
  const tx = (100 - percent) * coefficient;
  const style = {
    zIndex: 999999,
    transform: `translate3d(${tx}%, 0px, 0px)`,
  };

  return { ...style, ...styleProp };
}

const LoadingBar = ({ className, style, ...props }) => {
  const { percent, status } = useLoading();
  const nodeRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <style>{LOADER_STYLES}</style>
      </Helmet>
      <CSSTransition
        nodeRef={nodeRef}
        in={status !== "hidden"}
        timeout={300}
        classNames="loading"
        unmountOnExit
      >
        <div
          ref={nodeRef}
          style={buildStyle({ percent, style })}
          className={cx(className, status, "loading-bar")}
          {...props}
        />
      </CSSTransition>
    </>
  );
};

LoadingBar.displayName = "LoadingBar";

export default LoadingBar;
