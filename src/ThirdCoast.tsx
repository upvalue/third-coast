import React from 'react';

export interface ThirdCoastProps {
  children?: React.ReactNode;
}

/**
 * Wrapper for all Third Coast component, should be mounted at app root. Provides themes,
 * breakpoints, etc.
 * 
 * @param props 
 */
export const ThirdCoast = (props: ThirdCoastProps) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default ThirdCoast;
