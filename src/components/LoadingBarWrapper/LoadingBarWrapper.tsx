// LoadingBarWrapper.jsx
import React, { ReactNode, useEffect, useRef, useState } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

interface LoadingBarWrapperProps {
  children: ReactNode;
}

const LoadingBarWrapper: React.FC<LoadingBarWrapperProps> = ({ children }) => {
  const loadingBarRef = useRef<LoadingBarRef>(null);

  return (
    <>
      <LoadingBar ref={loadingBarRef} />
      {children}
    </>
  );
};

export default LoadingBarWrapper;
