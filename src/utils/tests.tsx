import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import { MockedProviderProps } from '@apollo/client/utilities/testing/mocking/MockedProvider';
import { I18nextProvider } from 'react-i18next';
import i18n from '@root/configs/i18n';

const AllTheProviders: FC<MockedProviderProps> = ({ children, ...rest }) => {
  return (
    <MockedProvider {...rest}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>{children}</BrowserRouter>
      </I18nextProvider>
    </MockedProvider>
  );
};

const customRender = (
  ui: ReactElement,
  apolloProviderProps?: MockedProviderProps,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(ui, {
    wrapper: () => <AllTheProviders {...apolloProviderProps} />,
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
