import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { client } from 'configs/apollo';
import { ApolloProvider } from '@apollo/client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './configs/i18n';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
