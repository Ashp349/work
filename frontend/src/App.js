import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './pages/RootLayout';
import RiskLayout from './pages/RiskLayout';
import RiskLog from './pages/RiskLayout';
import NotificationsLayout from './pages/NotificationsLayout';
import Notifications from './pages/Notifications';
import HomePage from './pages/HomePage';
import { ContextProvider } from './components/Context/SideBarContext';
import BackgroundWrapper from './components/Wrappers/BackgroundWrapper';
import AllRisksBoard from './pages/AllRisksBoard';
import NewRisk from './pages/NewRisks';
import RiskMatrix from './pages/RiskMatrix';
import ProjectsLayout from './pages/ProjectsLayout';
import NewProject from './pages/NewProject';
import AllRisksList from './pages/AllRisksList';
import { ProjectDataProvider } from './components/Context/FormDataContext';

const router = createBrowserRouter([
  {
    path: "/",
    element : <RootLayout />,
    children: [
      { index:true ,element :<HomePage/>},
      { path: "risk" ,element: <RiskLayout/>,
        children:[
          {index:true,element:<AllRisksBoard/>},
          {path:"list",element:<AllRisksList/>},
          {path:"new",element:<NewRisk/>},
          {path:"riskmatrix",element:<RiskMatrix/>}
        ]
    },
      { path: "notifications" ,element: <Notifications/>},
  //     { 
     
  //      path:"/projects/new",element:<NewProject/>
   
  // }
    //     { path: "projects",element:<ProjectsLayout/>,
    //    children:[
    //     {path:"new",element:<NewProject/>},
    //    ]
    // }
    ],
  },
  { 
     
       path:"/projects/new",element:<NewProject/>
   
  }

])



function App() {
  return (
    <ContextProvider>
     {/* <BackgroundWrapper> */}
     <RouterProvider router={router}/>
     {/* </BackgroundWrapper> */}
    </ContextProvider>
  );
}

export default App;
