import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home';
import Signin from './Components/Signin';
import Sinup from './Components/Sinup';
import AuthSec from './RoutesSecurity/AuthSec';
import AllSec from './RoutesSecurity/AllSec';
import AuthProvider from './Context/AuthContext';
import Cart from './Components/Cart';
import CartContextProvider from './Context/CartContext';
import UserContextProvider from './Context/UserName';
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';
import EnterNewPassword from './Components/EnterNewPassword';

function App() {
  const router = createBrowserRouter([
    {path:"/" , element:<AllSec><Home /></AllSec> }
    , {path: "signin" , element: <AuthSec><Signin /></AuthSec>},
    {path: "signup" , element:<AuthSec><Sinup /></AuthSec>} ,
    {path:"cart" , element: <AllSec><Cart /></AllSec>} ,
    {path:"fogetPassword" , element:<AuthSec><ForgetPassword /></AuthSec>} ,
    {path:"ResetPassword" , element:<AuthSec><ResetPassword /></AuthSec>} ,
    {path:"enterNewPassword" , element:<AuthSec><EnterNewPassword /></AuthSec>}
  ])

  return (
    <>
    <UserContextProvider>
    <CartContextProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </CartContextProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
