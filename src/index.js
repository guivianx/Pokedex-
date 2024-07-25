import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ItemsProvider } from './contexts/itemContexHome';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <ItemsProvider>
        <App />
    </ItemsProvider>

)