import CreateProject from "../CustomTemplates/CreateProject";
import { FormDataProvider } from "../components/Context/FormDataContext";
import RiskLayout from "./RiskLayout";

export default function NewProject(){
    return(
        <>
         <div className="z-[99] duration-300 animate-fade-in">
            {/* <h2 className="text-xl flex justify-center items-center">Create a new Project</h2> */}
             {/* <FormDataProvider> */}
              <CreateProject/>
            {/* </FormDataProvider> */}
         </div>
        </>
    )
}