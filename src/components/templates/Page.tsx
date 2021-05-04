import React, {
  cloneElement,
  FC,
  ReactElement,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Header, HeaderProps } from 'components/organisms/Header';
import { Navbar } from 'components/organisms/Navbar';

export interface ExtendedStyleProps {
  paddingTop?: number;
  paddingBottom?: number;
}

export interface PageTemplatePropsT {
  headerProps?: HeaderProps;
  extendedStyleProps?: ExtendedStyleProps;
  children: ReactElement;
  isNavbar?: boolean;
}

export const PageTemplate: FC<PageTemplatePropsT> = ({
  children,
  headerProps = {},
  isNavbar,
  extendedStyleProps: { paddingTop = 0, paddingBottom = 0 } = {},
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isHeaderMounted, setIsHeaderMounted] = useState<boolean>(false);
  const [isNavbarMounted, setIsNavbarMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsHeaderMounted(!!headerRef.current);
  }, [headerRef]);

  useLayoutEffect(() => {
    setIsNavbarMounted(!!navbarRef.current);
  }, [navbarRef]);

  const childrenProps = useMemo(() => {
    let res = children.props;
    if (headerRef.current) {
      const headerHeight = headerRef.current?.getBoundingClientRect().height;
      res = {
        ...res,
        style: {
          ...res.style,
          paddingTop: `${headerHeight + paddingTop}px`,
        },
      };
    }
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current?.getBoundingClientRect().height;
      res = {
        ...res,
        style: {
          ...res.style,
          paddingBottom: `${navbarHeight + paddingBottom}px`,
        },
      };
    }
    return res;
  }, [isHeaderMounted, headerRef, headerProps, isNavbarMounted, navbarRef]);

  return (
    <>
      <Header {...headerProps} ref={headerRef} />
      {cloneElement(children, childrenProps)}
      {isNavbar && <Navbar ref={navbarRef} />}
    </>
  );
};
