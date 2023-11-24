import CreateProject from "../CustomTemplates/CreateProject";
import { FormDataProvider } from "../components/Context/FormContext";
import { FormProvider } from "../components/Context/FormContext";
import RiskLayout from "./RiskLayout";
// import { ProjectDataProvider } from "../components/Context/FormContext";

export default function NewProject(){
    return(
        <>
         <div className="z-[99] duration-300 animate-fade-in">
            {/* <h2 className="text-xl flex justify-center items-center">Create a new Project</h2> */}
         {/* <ProjectDataProvider> */}
         {/* Your other components */}
         {/* <FormProvider initialState={{ projectName: '', template: '' }}> */}
           <CreateProject />
           {/* </FormProvider> */}
            {/* Other components */}
        {/* </ProjectDataProvider> */}
         </div>
        </>
    )
}