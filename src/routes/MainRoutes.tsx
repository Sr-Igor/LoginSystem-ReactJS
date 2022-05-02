import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/Home';
import { User } from '../pages/User';
import { RequiredAuth } from '../Auth/RequiredAuth';
import { Login } from '../pages/Login';

export const MainRoutes = () =>{

    return useRoutes([
      {path: '/', element: <Home />},
      {path: '/user', element: <RequiredAuth><User /></RequiredAuth>},
      {path: '/login', element: <Login />},
    ]);
};