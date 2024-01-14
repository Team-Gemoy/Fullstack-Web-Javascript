import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ForgotPass from '../pages/ForgotPass/ForgotPass';
import SetNewPass from '../pages/ForgotPass/Components/SetNewPass';
import DonePage from '../pages/ForgotPass/Components/DonePage';
import PageOTP from '../pages/ForgotPass/Components/PageOTP';
import PrivateRoutes from '../utils/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPass />,
  },
  {
    path: '/reset-password',
    element: <SetNewPass />,
  },
  {
    path: '/done',
    element: <DonePage />,
  },
  {
    path: '/otp',
    element: <PageOTP />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      // {
      //   path:'/exampleProtectedRoute',
      //   element:<ProtectedPage/>
      // }
    ],
  },
]);

export default router;
