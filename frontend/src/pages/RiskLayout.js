import Button from '../components/ContentBody/Button';
import Dropdown from '../components/ContentBody/Dropdown';
import { ContextProvider, useSideBar,useSideBarUpdate } from '../components/Context/SideBarContext';
import Card from '../components/Wrappers/Card';
import CustomForm from '../components/ContentBody/CustomForm';
import RiskForm from '../components/FormsContent/RiskForm';
import { Link, Outlet } from 'react-router-dom';
import RiskNavigation from '../components/Navigation/RiskNavigation';
import CreateProject from '../CustomTemplates/CreateProject';
import { useFormContext } from '../components/Context/FormContext';

export default function RiskLayout(props){
   const openSideBar= useSideBar();
   const {state} = useFormContext();

   const ButtonClassName = "text-gray-200 text-xs gap-x-4 cursor-pointer pt-1.5 pb-1.5 pl-2 pr-2 font-bold hover:bg-gray-300 hover:text-black rounded-md m-2 bg-gray-700 duration-300"

   return(
    <ContextProvider>  
     <div className={`duration-300 ${openSideBar ? 'ml-72' : 'ml-24'}`}>
       <div className='flex flex-col fixed z-[9] w-full bg-white'>
        <div className='flex flex-row items-center'>
        <div className=' m-4 p-4 w-9 h-9 bg-[#1B1212] rounded-lg'></div>        
        <h2 className={`text-[1.3rem] font-bold text-center`}>{state.projectName}</h2>
        </div>
        {/* <div className='ml-2 flex-row'> */}
        {/* <Link to="/board">
         <Button customClasses={ButtonClassName} text="Board"/>
        </Link>
        <Button customClasses={ButtonClassName} text="Add New Risk"/>
        <Button customClasses={ButtonClassName} text="Risk Implementation"/> */}
        <RiskNavigation/>
        </div>
      {/* <RiskForm/> */}
      <div className='overflow-x-auto overflow-y-auto'>
      <Outlet/>
      </div>
     </div>
    </ContextProvider>
   )
}