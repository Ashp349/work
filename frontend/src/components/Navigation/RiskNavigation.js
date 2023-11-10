import { Link } from 'react-router-dom';
import Button from '../ContentBody/Button';




export default function RiskNavigation(){
  const ButtonClassName = "text-gray-200 text-xs gap-x-4 cursor-pointer pt-1.5 pb-1.5 pl-2 pr-2 font-bold hover:bg-gray-300 hover:text-black rounded-md m-2 bg-gray-700 duration-300"
  const FontAwesomeClasses1 = "fa-solid fa-chart-simple fa-rotate-180 fa-sm mr-1";
  const FontAwesomeClasses2 ="fa-solid fa-list fa-sm mr-1"
  
     return(
        <div className='mt-1.5 ml-2 mr-2 mb-2 flex-row'>
          <Button customClasses={ButtonClassName} iconClasses={FontAwesomeClasses2} text="List"/> 
         <Link to="/risk">
          <Button customClasses={ButtonClassName} iconClasses={FontAwesomeClasses1} text="Board"/>
         </Link>
        <Link to="/risk/new">
        <Button customClasses={ButtonClassName} text="Add New Risk"/>
        </Link>
        <Link to="/risk/riskmatrix">
        <Button customClasses={ButtonClassName} text="Risk Matrix"/>
        </Link>
        </div>
     )
}