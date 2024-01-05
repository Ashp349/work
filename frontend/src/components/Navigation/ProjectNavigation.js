import { Link,useParams } from 'react-router-dom';
import Button from '../ContentBody/Button';


export default function ProjectNavigation(){
  const ButtonClassName = "text-gray-200 text-xs gap-x-4 cursor-pointer pt-1.5 pb-1.5 pl-2 pr-2 font-bold hover:bg-gray-300 hover:text-black rounded-md m-2 bg-[#1B1212] bg-opacity-90 duration-300"
  const FontAwesomeClasses1 = "fa-solid fa-chart-simple fa-rotate-180 fa-sm mr-1";
  const FontAwesomeClasses2 ="fa-solid fa-list fa-sm mr-1"
  const params = useParams();
  
     return(
        <div className='ml-2 mr-2 mb-2 flex-row'>
        <Link to={`/p/${params.riskId}/list`}>
          <Button customClasses={ButtonClassName} iconClasses={FontAwesomeClasses2} text="List"/>
          </Link> 
         <Link to={`/p/${params.riskId}/board`}>
          <Button customClasses={ButtonClassName} iconClasses={FontAwesomeClasses1} text="Board"/>
         </Link>
        <Link to="/p/new">
        <Button customClasses={ButtonClassName} text="Add New Risk"/>
        </Link>
        <Link to="/risk/riskmatrix">
        <Button customClasses={ButtonClassName} text="Risk Matrix"/>
        </Link>
        </div>
     )
}