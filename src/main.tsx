import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Navigate } from 'react-router-dom';

// Component imports
import Root from './routes/root.tsx';
import ErrorPage from './Pages/ErrorPage.tsx';
import Info from './Components/Multistep Form/Info/Info.tsx';
import Plan from './Components/Multistep Form/Plan/Plan.tsx';
import AddOns from './Components/Multistep Form/AddOns/AddOns.tsx';
import Summary from './Components/Multistep Form/Summary/Summary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/info" replace /> },
      { path: '/info', element: <Info /> },
      { path: '/plan', element: <Plan /> },
      { path: '/addons', element: <AddOns /> },
      { path: '/summary', element: <Summary /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
