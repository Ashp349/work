import Button from '../components/ContentBody/Button';
import Dropdown from '../components/ContentBody/Dropdown';
import { ContextProvider, useSideBar,useSideBarUpdate } from '../components/Context/SideBarContext';
import Card from '../components/Wrappers/Card';
import CustomForm from '../components/ContentBody/CustomForm';
import RiskForm from '../components/FormsContent/RiskForm';
import { Link, Outlet, useParams } from 'react-router-dom';
import RiskNavigation from '../components/Navigation/RiskNavigation';
import CreateProject from '../CustomTemplates/CreateProject';
import { useFormContext } from '../components/Context/FormContext';
import { useEffect } from 'react';
import ProjectNavigation from '../components/Navigation/ProjectNavigation';

export default function ProjectDetailsPage(props){
   const openSideBar= useSideBar();
   const {state} = useFormContext();
   const params = useParams();

   console.log(state.submittedData);
    
    const finalArray=[];

    const resultArray=[];
    resultArray.push(state.submittedData[state.submittedData.length-1]);
    // console.log(resultArray[0]);
    // console.log(resultArray[0].projectName);
    // console.log(resultArray[0].Id);
    // console.log(resultArray[0].link);
    // console.log(resultArray[0].submittedData[0].projectName);
    // console.log(resultArray[0].submittedData[1].projectName);
    // console.log(resultArray[0].submittedData[2].projectName);
    
    resultArray[0].submittedData.forEach((value) => {
      // Access each value of submittedData
      console.log(value.projectName); 
      console.log(value.submittedData.Id);
      console.log(value.submittedData.link);
      finalArray.push({
          projectName: value.projectName,
          Id:value.submittedData.Id,
          link: value.submittedData.link
      });
    });

    finalArray.push({
        projectName:state.projectName,
        Id:state.submittedData.Id,
        link:state.submittedData.link //params riskId
    });
 
    console.log(finalArray);
  
  //  finalArray.map((ind) =>{ 
  //    ind.find();
  // })
  
  
  let foundObject = finalArray.find(obj => obj.link == params.riskId);
//   if(finalArray.length != null){
//   for (const obj of finalArray) {
//     console.log(params.riskId);
//     console.log(obj.link);
//     if (obj.link == params.riskId) {
//       foundObject = obj;
//       break;
//     }
//   }
// }

if (foundObject) {
  console.log("Found Object:", foundObject);
} else {
  console.log("Object not found");
}

//   const resultArray=[];
//   resultArray.push(state.submittedData[state.submittedData.length-1]);
//   console.log(resultArray);
//   console.log(resultArray.projectName);
// //   console.log(resultArray.submittedData.Id);
// //   console.log(resultArray.submittedData.link);
//   console.log(resultArray.submittedData);

  const ButtonClassName = "text-gray-200 text-xs gap-x-4 cursor-pointer pt-1.5 pb-1.5 pl-2 pr-2 font-bold hover:bg-gray-300 hover:text-black rounded-md m-2 bg-gray-700 duration-300"

   return(
    <ContextProvider> 
     <div className={`duration-300 z-40 relative`}> 
       <div className={`flex flex-col fixed w-full bg-white m-0`}>
        <div className={`flex flex-row items-center duration-300`}>
        <div className=' m-4 p-4 w-9 h-9 bg-[#1B1212] rounded-lg'></div>        
        <h2 className={`text-[1.3rem] font-bold text-center`}>{foundObject.projectName}</h2>
        </div>
        {/* <div className='ml-2 flex-row'> */}
        {/* <Link to="/board">
         <Button customClasses={ButtonClassName} text="Board"/>
        </Link>
        <Button customClasses={ButtonClassName} text="Add New Risk"/>
        <Button customClasses={ButtonClassName} text="Risk Implementation"/> */}
        <div className={`duration-300`}>
        {/* <RiskNavigation/> */}
        <ProjectNavigation/>
        </div>
        </div>
      {/* <RiskForm/> */}
      <div className={`overflow-x-auto overflow-y-auto duration-300 ${openSideBar ? 'ml-72' : 'ml-24'}`}>
      <Outlet/>
      </div>
     </div>
 
    </ContextProvider>
   )
}