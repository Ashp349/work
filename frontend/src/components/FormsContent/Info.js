import { BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

//This Data is controlled by the Add Risk Tab
//Parent should be Adding new risk Component
//Add Risk

export default function Info(){
    return(
         <section>
            <div>
                <h1 className="font-bold text-3xl mb-3">
                   Delay in Sprint Delivery
                </h1>
               {/* live handling */}
                <div className=" mb-4 text-sm font-semibold text-[#1B1212] flex flex-row items-center justify-between">
                  <p className="opacity-92">Owner</p>
                   <p className="text-sm font-semibold text-center">Project Manager</p>
                </div>
                <div>
                   
                </div>
                <div className="mb-4 text-sm font-semibold text-[#1B1212] flex flex-row items-center justify-between">
                <p className="text-opacity-40">Project</p>
                <p className="text-sm font-semibold text-center">BGND-Bhugyan Project</p>
                </div>
                <div className="mb-4 text-sm font-semibold text-[#1B1212] flex flex-row items-center justify-between">
                <p className="text-opacity-40">Category</p>
                <p className="text-sm font-semibold text-center">Performance</p>
                </div>
                <div className="mb-4 text-sm text-[#1B1212] flex flex-row items-center justify-between">
                <p>Relation</p>
                <p className="text-sm font-bold text-center">Customer Satisfaction</p>
                </div>
                <div className="text-sm text-[#1B1212] flex flex-col mb-6">
                <p className="opacity-92 mb-1">Description</p>
                <div className="text-sm font-bold ml-0">"Delay in delivery of sprint Goal because of unavailability of shared resource (Human resource, hardware, software etc).Resource unavailability due to excigencies in other project"
               </div>
                </div>
                <div className="text-sm text-[#1B1212] flex flex-col mb-6">
                <p className="opacity-92 mb-1">Trigger</p>
                <div className="text-sm font-bold ml-0">"Resource unavailability due to excigencies in other project
"</div>
                </div>

                <div>
                
                <h1 className="font-bold">Risk Analysis</h1>
                
                <div className="text-sm text-[#1B1212] flex flex-col mb-6">
                <p className="opacity-92 mb-1">Impact Description</p>
                <div className="text-sm font-bold ml-0">Delay in completion of planned tasks in a sprint.
</div>
                </div>
                <div className="text-sm text-[#1B1212] flex flex-col mb-4">
                <p className="opacity-92 mb-1">Existing Controls</p>
                <div className="text-sm font-bold ml-0 shadow-sm border-1">Capacity of shared resources are considered based on two project allocation.
                 </div>
                 </div>
                 <div className="text-sm text-[#1B1212] flex flex-row justify-between mb-3">
                <p className="opacity-92 mb-2">Impact On</p>
                <div className="text-sm text-center font-bold ml-0">Schedule</div>
                 </div>
                 <div className="text-sm text-[#1B1212] flex flex-row justify-between mb-3">
                <p className="opacity-92 mb-1">Probability</p>
                <div className="text-sm text-center font-bold ml-0">Very Low</div>
                 </div>
                 <div className="text-sm text-[#1B1212] flex flex-row justify-between mb-3">
                <p className="opacity-92 mb-1">Impact</p>
                <div className="text-sm text-center font-bold ml-0">Medium</div>
                 </div>
               <div className="text-sm text-[#1B1212] flex flex-row justify-between mb-3">
                <p className="opacity-92 mb-1">Impact</p>
                <div className="text-sm text-center font-bold ml-0">Medium</div>
                 </div>
                 <div className="text-sm text-[#1B1212] flex flex-row justify-between mb-3">
                <p className="opacity-92 mb-1">Severity</p>
                <div className="text-sm text-center font-bold ml-0">Very Low</div>
                 </div>
                <div>
                    Risk Priority
                </div>
                <div>
                    Risk Management Strategy
                </div>
                </div>
                <div>
                   <h3>
                     Mitigation plan
                   </h3>
                  <div>
                     Action Item
                  </div>
                  <div>
                    Action Taken
                  </div>
                      {/* Backend */}
                  <div>
                     Planned End Date
                  </div> 
                  <div>
                     Actual End Date 
                  </div>   
                  <div>
                     <h3>
                        Contigency Plan
                     </h3>
                     <div>
                        Contigency Plan 
                     </div>
                     <div>
                        Action Item
                     </div>
                     <div>
                        Action Taken
                     </div>
                     {/* Backend */}
                     <div>
                        Planned End Date 
                     </div>
                     <div>
                        Actual End Date
                     </div>
                  </div>
                   <div>
                      If The Risk is re evaluated then it will be displayed here
                   </div>                
                 </div>
            </div>
         </section>
    )

}