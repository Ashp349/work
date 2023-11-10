import CreateProject from "../components/CustomTemplates/CreateProject";
import RiskLayout from "./RiskLayout";


export default function Project(){
    return(
        <>
        <div>
          <h2 className="justify-center">Create a new Project</h2>
          <CreateProject/>
        </div>
        </>
    )
}