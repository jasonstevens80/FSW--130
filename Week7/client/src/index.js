import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import {OviContextProvider} from "./components/ovi/OviContext"
import {SidContextProvider} from "./components/sid/SidContext"
ReactDOM.render(
  <SidContextProvider>
  <OviContextProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </OviContextProvider>
  </SidContextProvider>
  ,
  document.getElementById('root')
);