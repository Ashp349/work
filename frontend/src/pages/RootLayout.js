import {React,useState} from 'react';
import SideBar from '../components/Navigation/SideBar';
import { Outlet } from 'react-router-dom';
// import { ProjectDataProvider } from '../components/Context/FormContext';
 
export default function RootLayout(props){
   return(
      <> 
        {/* <ProjectDataProvider> */}
       <div className='w-full'>
         <SideBar/>
         <div className='overflow-visible'>
         <Outlet/>
         </div>
         </div>
         {/* </ProjectDataProvider> */}
      </>
   )
}