import {React,useState} from 'react';
import SideBar from '../components/Navigation/SideBar';
import { Outlet } from 'react-router-dom';
 
export default function RootLayout(props){
   return(
      <> 
         <SideBar/> 
         <Outlet/>
      </>
   )
}