import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'

import {
  RouterProvider
} from "react-router-dom";
import router from './Route/Routes.jsx';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
<div >
<React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
</div>
)
