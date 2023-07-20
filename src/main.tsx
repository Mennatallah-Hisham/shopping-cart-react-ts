import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import Store from './pages/Store.tsx';
import store from './store/Store.tsx';

//home
//store
//cart
//about
const router= createBrowserRouter(

[
  {path:"/store" ,element:<Store/>}


]);

ReactDOM.createRoot(document.getElementById('root')!).render(


  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    <App />

    </Provider>
   
  
  </React.StrictMode>
 
  
,
)
