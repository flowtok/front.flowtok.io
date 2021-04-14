import {
  cloneElement,
  ReactElement,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Header, HeaderProps } from 'components/organisms/Header';

export interface ExtendedStyleProps {
  paddingTop?: number;
}

export interface PageTemplate {
  headerProps?: HeaderProps;
  extendedStyleProps?: ExtendedStyleProps;
  children: ReactElement;
}

export const PageTemplate = ({
  children,
  headerProps = {},
  extendedStyleProps: { paddingTop = 0 } = {},
}: PageTemplate) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderMounted, setIsHeaderMounted] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsHeaderMounted(!!headerRef.current);
  }, [headerRef]);

  const childrenProps = useMemo(() => {
    if (!headerRef.current) {
      return children.props;
    }

    const headerHeight = headerRef.current?.getBoundingClientRect().height;

    return {
      ...children.props,
      style: {
        ...children.props.style,
        paddingTop: `${headerHeight + paddingTop}px`,
      },
    };
  }, [isHeaderMounted, headerRef, headerProps]);

  return (
    <>
      <Header {...headerProps} ref={headerRef} />
      {cloneElement(children, childrenProps)}
    </>
  );
};
