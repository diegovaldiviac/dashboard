import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import MSProxy from './msProxy'
import AppRoutes from './routes'
import { store, persistor } from "./redux/store"



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MSProxy>
            <AppRoutes>

            </AppRoutes>
          </MSProxy>
        </BrowserRouter>
      </PersistGate>

    </Provider>
  );
}

export default App;
