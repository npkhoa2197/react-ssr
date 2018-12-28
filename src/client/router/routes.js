import App, { loadData as appLoadData } from '../App';
import Home from '../pages/Home';
import Users, { loadData as usersLoadData} from '../pages/Users';
import NotFound from '../pages/NotFound';
import Admins, { loadData as adminsLoadData } from '../pages/Admins';

const routes = [
  {
    component: App,
    loadData: appLoadData,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/users',
        component: Users,
        loadData: usersLoadData,
      },
      {
        path: '/admins',
        component: Admins,
        loadData: adminsLoadData,
      },
      {
        component: NotFound,
      }
    ]
  }
];

export default routes;