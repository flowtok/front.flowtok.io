import React, { CSSProperties, FC, useRef } from 'react';
import { Navbar } from '../organisms/Navbar';

const wrapperStyle: CSSProperties = {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
};

const pageStyle: CSSProperties = {
  background: '#E5E5EA',
  borderRadius: '30px 0px 0px 30px',
  padding: '0 47px',
  width: 'calc(100% - 82px)',
};

export const PageTemplateDesktop: FC = ({ children }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  return (
    <div style={wrapperStyle}>
      <Navbar ref={navbarRef} />
      <div style={pageStyle}>{children}</div>
    </div>
  );
};
