import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx'
import './index.css'
import Store from './pages/Store.tsx';
import store from './store/Store.tsx';
import Cart from './pages/Cart.tsx';
import Error from './pages/Error.tsx';
import Layout from './components/Layout.tsx';

//home
//store
//cart
//about
const router= createBrowserRouter(

[
  {path:"/",
  element:<App/>,
  errorElement:<Error/>,

  children:[{
   index:true ,element:<Store/>
  },{
    path:"cart" , element:<Cart/>
  }
]
}
 


]);

ReactDOM.createRoot(document.getElementById('root')!).render(



    <Provider store={store}>
    <RouterProvider router={router}/>
    <React.StrictMode>
  
    
  </React.StrictMode>

    </Provider>
   
  
 
  
,
)
