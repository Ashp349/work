import { ContextProvider } from "../../components/Context/SideBarContext";
import RiskForm from "../../components/FormsContent/RiskForm";

export default function AddItem(){
    return(
     <ContextProvider>
      <RiskForm/>
     </ContextProvider>
    )
}