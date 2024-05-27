import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./store/store";
import App from './App';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import {QueryClient,
    QueryClientProvider,} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const container = document.getElementById('root');
const root = createRoot(container);

const querryClient = new QueryClient()

root.render(
  <React.StrictMode>
      <QueryClientProvider client={querryClient}>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  </React.StrictMode>
);


