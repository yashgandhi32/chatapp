import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import setupStore from './store/storeconfig';
import App from './components/App';
import './styles/index.css';

setupStore().then((store) =>
   ReactDOM.render(
      <Provider store={store} >
        <App/>
      </Provider>
      , 
      document.getElementById('root')
   )
);
