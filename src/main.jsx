import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
       <BrowserRouter>
        <App />
        </BrowserRouter>
        </PersistGate>
    </Provider>

  </React.StrictMode>,
)
