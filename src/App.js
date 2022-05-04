import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import MSProxy from './msProxy';
import AppRoutes from './routes';
import { store, persistor } from "./redux/store";
import { Amplify } from "aws-amplify";
import apiConfig from "./configs/api";
import authConfig from "./configs/cognito";

const environment = process.env.NODE_ENV || "development";
Amplify.configure({ Auth: authConfig[environment], API: apiConfig[environment] });

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MSProxy>
            <AppRoutes />
          </MSProxy>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
