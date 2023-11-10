import { ContextProvider, useSideBar,useSideBarUpdate } from '../components/Context/SideBarContext';
 
export default function Notifications(){
   const openSideBar= useSideBar();

   return(
    <ContextProvider>  
    <div>
       <h2 className={`text-[1.3rem] pt-3 pl-4 font-bold duration-300 ${openSideBar ? 'ml-72' : 'ml-24'}`}>Notifications</h2>
    </div>
    </ContextProvider>
   )
}