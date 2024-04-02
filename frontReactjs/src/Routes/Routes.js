import Dashbord from './components/admin/Dashbord';
import Profile from './components/admin/Profile';
const routes=[
{path:"/admin",exact:true, name:'admin'},
{path:"/dashbord",exact:true, name:'admin', component:{Dashbord}},
{path:"/Profile",exact:true, name:'admin',component:{Profile}}
];
export default routes;