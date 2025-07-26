import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import { AuthProvider } from './contexts/AuthContext';
   import './index.css';

   console.log('index.js: Importing AuthProvider...');
   console.log('index.js: AuthProvider:', AuthProvider);

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <AuthProvider>
         <App />
       </AuthProvider>
     </React.StrictMode>
   );